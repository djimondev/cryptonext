import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export type Language = "en" | "fr";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  preferences: {
    language: Language;
  };
}

export interface Sitemap {
  items: MenuItem[];
  categories: MenuCategory[];
}

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
  component: ComponentType;
}

export interface MenuCategory {
  id: string;
  path: string;
  label: string;
  description: string;
  icon: LucideIcon;
  isSecondary?: boolean;
  items: MenuItem[];
}
