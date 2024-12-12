import { LucideIcon } from "lucide-react";

export type Theme = "light" | "dark" | "system";
export type Language = "en" | "fr";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  preferences: {
    theme: Theme;
    language: Language;
  };
}

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
  requiresAuth?: boolean;
  isSecondary?: boolean;
  children?: MenuItem[];
}
