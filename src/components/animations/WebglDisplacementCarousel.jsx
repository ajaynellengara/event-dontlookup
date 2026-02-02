"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// 1. Define the Custom Shader Material
const CarouselDisplacementMaterial = shaderMaterial(
    {
        dispFactor: 0,
        tex: null,
        tex2: null,
        disp: null,
        effectFactor: 1.2,
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
    // Fragment Shader
    `
    varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float dispFactor;
    uniform float effectFactor;

    void main() {
      vec2 uv = vUv;
      
      vec4 disp = texture2D(disp, uv);
      
      float force = disp.r * effectFactor;
      
      vec2 distortedPosition = vec2(
          uv.x + dispFactor * force, 
          uv.y - dispFactor * force
      );
      vec2 distortedPosition2 = vec2(
          uv.x - (1.0 - dispFactor) * force, 
          uv.y + (1.0 - dispFactor) * force
      );

      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);

      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      
      // DEBUG: If output is black, verify UVs
      // gl_FragColor = vec4(uv, 0.0, 1.0); 
      
      gl_FragColor = finalTexture;
      // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Uncomment to test if canvas is alive
    }
  `
);

extend({ CarouselDisplacementMaterial });

function CarouselScene({ images, displacementImage, activeIndex }) {
    const materialRef = useRef();
    // Load all textures
    const textures = useTexture(images);
    const dispTexture = useTexture(displacementImage); // Displacement map

    // We need to keep track of "current" and "next" textures for the transition
    // When activeIndex changes, we transition from prevTexture to newTexture.
    // BUT the shader takes tex1 and tex2 and mixes them with dispFactor (0 to 1).

    // Strategy:
    // We maintain a "visual state": { currentImageIndex, nextImageIndex, progress }
    // However, standard shader transitions usually mix from A to B.
    // When activeIndex changes, we want to animate 0 -> 1.
    // After animation ends, we swap: A becomes B, and we reset to 0.

    const [renderState, setRenderState] = useState({
        idx1: activeIndex,
        idx2: activeIndex,
        progress: 0
    });

    const lastActiveIndex = useRef(activeIndex);

    useFrame((state, delta) => {
        if (materialRef.current) {
            // Linear interpolation for smooth transition
            // We want to animate materialRef.current.dispFactor towards renderState.progress
            // But we handle the logic slightly differently for React state updates.

            // Actually, let's just do the lerp here.
            // If activeIndex changed, we want to start animating.

            let target = 0;
            // If we are in a transition state
            if (renderState.idx1 !== renderState.idx2) {
                target = 1;
            }

            const currentDisp = materialRef.current.dispFactor;
            const speed = 2.5; // Transition speed

            const newDisp = THREE.MathUtils.lerp(currentDisp, target, delta * speed);
            materialRef.current.dispFactor = newDisp;

            // If we are close enough to 1, we update state to swap textures.
            // visual "mix" is at 100% (Image B). We then swap A->B, B->B.
            // IMPORTANT: We do NOT reset dispFactor to 0 here directly, because props still hold Old/New.
            // If we reset to 0 now, it snaps to Old.
            // We wait for React to update renderState, making props New/New.
            // Then mix(New, New, any) is New.
            if (target === 1 && newDisp >= 0.99) {
                // materialRef.current.dispFactor = 1; // Optional: ensure it locks to 1 until update
                setRenderState({
                    idx1: renderState.idx2,
                    idx2: renderState.idx2,
                    progress: 0
                });
            }

            // If stable, force 0
            if (renderState.idx1 === renderState.idx2) {
                materialRef.current.dispFactor = 0;
            }
        }
    });

    // Effect to trigger transition
    useEffect(() => {
        if (activeIndex !== renderState.idx1 && activeIndex !== renderState.idx2) {
            // Trigger transition to new index
            setRenderState(prev => ({
                idx1: prev.idx1,
                idx2: activeIndex,
                progress: 1 // Target
            }));
        }
    }, [activeIndex, renderState.idx1, renderState.idx2]);


    // Optimize textures
    useMemo(() => {
        [...textures, dispTexture].forEach(t => {
            t.magFilter = THREE.LinearFilter;
            t.minFilter = THREE.LinearFilter;
            t.colorSpace = THREE.SRGBColorSpace;
        });
    }, [textures, dispTexture]);


    return (
        <carouselDisplacementMaterial
            ref={materialRef}
            tex={textures[renderState.idx1]}
            tex2={textures[renderState.idx2]}
            disp={dispTexture}
            toneMapped={false}
        />
    );
}

function FullScreenPlane(props) {
    const { viewport } = useThree();
    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry />
            <CarouselScene {...props} />
        </mesh>
    );
}

export default function WebglDisplacementCarousel({
    images,
    displacementImage = "https://images.pexels.com/photos/5675754/pexels-photo-5675754.jpeg",
    activeIndex
}) {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 1], fov: 50 }}
                style={{ width: "100%", height: "100%" }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <React.Suspense fallback={null}>
                    <FullScreenPlane
                        images={images}
                        displacementImage={displacementImage}
                        activeIndex={activeIndex}
                    />
                </React.Suspense>
            </Canvas>
        </div>
    );
}
