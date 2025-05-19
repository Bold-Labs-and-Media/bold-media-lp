import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addHexOpacity(hexColor: string, opacityPercent = 100) {
  const opacity = Math.round((opacityPercent / 100) * 255);
  const hex = hexColor.replace("#", "");
  return `#${hex}${opacity.toString(16).padStart(2, "0")}`;
}
