/**
 * Font configuration and utilities
 * Centralized font management for the application
 */

import { Sora } from "next/font/google";
import localFont from "next/font/local";

// Sora font for primary usage
export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

// Big Shoulders Display font for headings and display text
export const bigShouldersDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/BigShouldersDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BigShouldersDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/BigShouldersDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/BigShouldersDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-big-shoulders",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: false,
});

/**
 * Get the appropriate font variable based on locale
 * @param {string} locale - The locale code ('en' or 'ar')
 * @returns {string} Font variable class name
 */
export function getFontVariable(locale) {
  return `${sora.variable} ${bigShouldersDisplay.variable}`;
}

/**
 * Get the appropriate font class name based on locale
 * @param {string} locale - The locale code ('en' or 'ar')
 * @returns {string} Font class name
 */
export function getFontClassName(locale) {
  return "font-sora";
}