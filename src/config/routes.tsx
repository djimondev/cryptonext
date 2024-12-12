import { BarChart2, BarChart3, Clock, Database, File, FileText, Folder, Info, LogOut, MapPin, Network, Palette, Settings, User } from "lucide-react";
import type { AppRouteConfig } from "../types/routing";

// Placeholder components - replace with actual components
const Overview = () => <div>Overview</div>;
const Collectors = () => <div>Collectors</div>;
const Sensors = () => <div>Sensors</div>;
const DatabaseView = () => <div>Database</div>;
const QuantumResistance = () => <div>Quantum Resistance</div>;
const Primitives = () => <div>Primitives</div>;
const Protocols = () => <div>Protocols</div>;
const Location = () => <div>Location</div>;
const Reports = () => <div>Reports</div>;
const Templates = () => <div>Templates</div>;
const History = () => <div>History</div>;
const ProfileInfo = () => <div>Profile Information</div>;
const ProfileReports = () => <div>Profile Reports</div>;
const NetworkSettings = () => <div>Network Settings</div>;
const Views = () => <div>Views</div>;
const Preferences = () => <div>Preferences</div>;
const Logout = () => <div>Logout</div>;

export const routeConfig: AppRouteConfig = {
  sections: [
    {
      id: "acquisition",
      path: "/acquisition",
      label: "Data Acquisition",
      icon: Network,
      metadata: { requiresAuth: true },
      children: [
        {
          id: "overview",
          path: "/acquisition/overview",
          label: "Overview",
          icon: Info,
          component: Overview
        },
        {
          id: "collectors",
          path: "/acquisition/collectors",
          label: "Collectors",
          icon: FileText,
          component: Collectors
        },
        {
          id: "sensors",
          path: "/acquisition/sensors",
          label: "Sensors",
          icon: Network,
          component: Sensors
        },
        {
          id: "database",
          path: "/acquisition/database",
          label: "Database",
          icon: Database,
          component: DatabaseView
        }
      ]
    },
    {
      id: "visualization",
      path: "/visualization",
      label: "Visualization",
      icon: BarChart3,
      metadata: { requiresAuth: true },
      children: [
        {
          id: "quantum-resistance",
          path: "/visualization/quantum-resistance",
          label: "Quantum Resistance",
          icon: BarChart2,
          component: QuantumResistance
        },
        {
          id: "primitives",
          path: "/visualization/primitives",
          label: "Primitives",
          icon: Palette,
          component: Primitives
        },
        {
          id: "protocols",
          path: "/visualization/protocols",
          label: "Protocols",
          icon: Network,
          component: Protocols
        },
        {
          id: "location",
          path: "/visualization/location",
          label: "Location",
          icon: MapPin,
          component: Location
        }
      ]
    },
    {
      id: "reporting",
      path: "/reporting",
      label: "Reporting",
      icon: FileText,
      metadata: { requiresAuth: true },
      children: [
        {
          id: "reports",
          path: "/reporting/reports",
          label: "Reports",
          icon: FileText,
          component: Reports
        },
        {
          id: "templates",
          path: "/reporting/templates",
          label: "Templates",
          icon: File,
          component: Templates
        },
        {
          id: "history",
          path: "/reporting/history",
          label: "History",
          icon: Clock,
          component: History
        }
      ]
    },
    {
      id: "profile",
      path: "/profile",
      label: "Profile",
      icon: User,
      metadata: { requiresAuth: true, isSecondary: true },
      children: [
        {
          id: "information",
          path: "/profile/information",
          label: "Information",
          icon: Info,
          component: ProfileInfo
        },
        {
          id: "reports",
          path: "/profile/reports",
          label: "Reports",
          icon: File,
          component: ProfileReports
        },
        {
          id: "network",
          path: "/profile/network",
          label: "Network",
          icon: Network,
          component: NetworkSettings
        },
        {
          id: "views",
          path: "/profile/views",
          label: "Views",
          icon: Folder,
          component: Views
        },
        {
          id: "preferences",
          path: "/profile/preferences",
          label: "Preferences",
          icon: Settings,
          component: Preferences
        },
        {
          id: "logout",
          path: "/profile/logout",
          label: "Logout",
          icon: LogOut,
          component: Logout
        }
      ]
    }
  ]
};
