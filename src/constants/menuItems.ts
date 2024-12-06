import { BarChart3, FileText, Network, User } from "lucide-react";
import { MenuItem } from "../types/common";

export const menuItems: MenuItem[] = [
  {
    id: "acquisition",
    label: "Data Acquisition",
    icon: Network,
    path: "/acquisition",
    requiresAuth: true
  },
  {
    id: "visualization",
    label: "Visualization",
    icon: BarChart3,
    path: "/visualization",
    requiresAuth: true
  },
  {
    id: "reporting",
    label: "Reporting",
    icon: FileText,
    path: "/reporting",
    requiresAuth: true
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    path: "/profile",
    requiresAuth: true,
    isSecondary: true
  }
];
