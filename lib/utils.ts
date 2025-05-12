import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomlyGenerateText(labels: string[]) {
  const randomIndex = Math.floor(Math.random() * labels.length);
  return labels[randomIndex];
}
