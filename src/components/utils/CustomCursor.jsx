"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const cursor2Ref = useRef(null);
    const cursor3Ref = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursor2 = cursor2Ref.current;
        const cursor3 = cursor3Ref.current;

        if (!cursor || !cursor2 || !cursor3) return;

        const onMouseMove = (event) => {
            const { clientX, clientY } = event;

            // Update cursor 1 (dot) immediately
            cursor.style.left = `${clientX}px`;
            cursor.style.top = `${clientY}px`;

            // Update cursor 2 (ring)
            cursor2.style.left = `${clientX}px`;
            cursor2.style.top = `${clientY}px`;

            // Update cursor 3 (hover effect ring) 
            cursor3.style.left = `${clientX}px`;
            cursor3.style.top = `${clientY}px`;
        };

        const onMouseDown = () => {
            cursor.classList.add("hover");
            cursor2.classList.add("hover");
        };

        const onMouseUp = () => {
            cursor.classList.remove("hover");
            cursor2.classList.remove("hover");
        };

        const onHoverStart = () => {
            cursor2.classList.add("hover");
            cursor3.classList.add("hover");
        };

        const onHoverEnd = () => {
            cursor2.classList.remove("hover");
            cursor3.classList.remove("hover");
        };

        // Add general mouse move listener
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);

        // Add hover listeners to interactive elements
        const hoverTargets = document.querySelectorAll("a, button, .hover-target");
        hoverTargets.forEach((target) => {
            target.addEventListener("mouseenter", onHoverStart);
            target.addEventListener("mouseleave", onHoverEnd);
        });

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);

            hoverTargets.forEach((target) => {
                target.removeEventListener("mouseenter", onHoverStart);
                target.removeEventListener("mouseleave", onHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                .cursor {
                    position: fixed;
                    background-color: #fff;
                    width: 6px;
                    height: 6px;
                    border-radius: 100%;
                    z-index: 1000;
                    transition: all 0.3s linear;
                    user-select: none;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                    left: 0;
                    top: 0;
                }

                .cursor.hover {
                    opacity: 0;
                }

                .cursor2 {
                    position: fixed;
                    width: 36px;
                    height: 36px;
                    border: 2px solid #fff;
                    box-shadow: 0 0 22px rgba(255, 255, 255, 0.6);
                    border-radius: 100%;
                    z-index: 1000;
                    transition: all 0.3s ease-out;
                    user-select: none;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                    left: 0;
                    top: 0;
                }

                .cursor2.hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: transparent;
                }

                .cursor3 {
                    position: fixed;
                    width: 36px;
                    height: 36px;
                    background-color: rgba(255, 255, 255, 0.9);
                    border-radius: 100%;
                    z-index: 1000;
                    transition: all 0.3s ease-out;
                    user-select: none;
                    pointer-events: none;
                    transform: scale(0) translate(-50%, -50%);
                    left: 0;
                    top: 0;
                }

                .cursor3.hover {
                    transform: scale(1) translate(-50%, -50%);
                }

                body, a, button {
                    cursor: none;
                }
            `}</style>
            <div ref={cursorRef} className="cursor hidden md:block"></div>
            <div ref={cursor2Ref} className="cursor2 hidden md:block"></div>
            <div ref={cursor3Ref} className="cursor3 hidden md:block"></div>
        </>
    );
}
