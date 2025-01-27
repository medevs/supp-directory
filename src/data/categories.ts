import { Pill, Leaf, Heart, HeartPulse, Droplet } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Category = {
  name: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  { name: "Vitamins", icon: Pill },
  { name: "Minerals", icon: Leaf },
  { name: "Supplements", icon: Heart },
  { name: "Sports Nutrition", icon: HeartPulse },
  { name: "Herbal", icon: Droplet },
];