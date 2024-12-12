import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export interface RouteMetadata {
  requiresAuth?: boolean;
  roles?: string[];
  isSecondary?: boolean;
}

export interface RouteConfig {
  id: string;
  path: string;
  label: string;
  icon: LucideIcon;
  component: ComponentType;
  metadata?: RouteMetadata;
  children?: RouteConfig[];
}

export interface SectionConfig {
  id: string;
  path: string;
  label: string;
  icon: LucideIcon;
  children: RouteConfig[];
  metadata?: RouteMetadata;
}

export type AppRouteConfig = {
  sections: SectionConfig[];
};
