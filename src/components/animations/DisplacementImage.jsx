"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// 1. Define the Custom Shader Material
const DisplacementShaderMaterial = shaderMaterial(
    {
        effectFactor: 1.2,
        dispFactor: 0,
        tex: null,
        tex2: null,
        disp: null,
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
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;

    void main() {
      vec2 uv = vUv;
      
      // Get displacement value
      vec4 disp = texture2D(disp, uv);
      
      // Calculate displaced UVs using the displacement map and factor
      // Diagonal direction: Top-Right to Bottom-Left feel
      // We apply positive shift to X and negative to Y (or vice versa) to creates diagonal movement
      
      float force = disp.r * effectFactor;
      
      vec2 distortedPosition = vec2(
          uv.x + dispFactor * force, 
          uv.y - dispFactor * force
      );
      vec2 distortedPosition2 = vec2(
          uv.x - (1.0 - dispFactor) * force, 
          uv.y + (1.0 - dispFactor) * force
      );

      // Fetch textures with distorted UVs
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);

      // Mix the textures based on dispFactor
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);

      gl_FragColor = finalTexture;
    }
  `
);

// Register the shader material with R3F
extend({ DisplacementShaderMaterial });

function SceneContent({ image1, image2, displacementImage, hovered }) {
    const materialRef = useRef();

    // Load textures using useTexture
    const [tex1, tex2, disp] = useTexture([image1, image2, displacementImage]);

    // Optimize textures
    useMemo(() => {
        tex1.magFilter = tex2.magFilter = disp.magFilter = THREE.LinearFilter;
        tex1.minFilter = tex2.minFilter = disp.minFilter = THREE.LinearFilter;
        tex1.colorSpace = THREE.SRGBColorSpace;
        tex2.colorSpace = THREE.SRGBColorSpace;
    }, [tex1, tex2, disp]);

    // Animation Loop
    useFrame((state, delta) => {
        if (materialRef.current) {
            const target = hovered ? 1 : 0;
            materialRef.current.dispFactor = THREE.MathUtils.lerp(
                materialRef.current.dispFactor,
                target,
                delta * 4.0
            );
        }
    });

    return (
        <displacementShaderMaterial
            ref={materialRef}
            tex={tex1}
            tex2={tex2}
            disp={disp}
            toneMapped={false}
        />
    );
}

// Helper component to make the plane fill the view
function FillPlane(props) {
    const { viewport } = useThree();
    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry />
            <SceneContent {...props} />
        </mesh>
    )
}

const DisplacementImage = ({
    image1,
    image2,
    displacementImage = "https://images.pexels.com/photos/5675754/pexels-photo-5675754.jpeg",
    hovered,
    className,
}) => {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: [0, 0, 1], fov: 50 }}
                style={{ width: "100%", height: "100%" }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Suspense fallback={null}>
                    <FillPlane
                        image1={image1}
                        image2={image2}
                        displacementImage={displacementImage}
                        hovered={hovered}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default DisplacementImage;
