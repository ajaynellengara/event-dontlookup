"use client";

import { motion } from "framer-motion";

/**
 * A reusable component that adds a subtle reveal animation to its children 
 * when they enter the viewport.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to animate.
 * @param {string} [props.className] - Optional CSS classes.
 * @param {number} [props.delay=0] - Delay before the animation starts.
 * @param {number} [props.duration=0.6] - Duration of the animation.
 * @param {number} [props.y=20] - Initial vertical offset.
 */
export default function RevealAnimation({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    y = 20
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
