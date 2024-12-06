import {
  BarChart2,
  Clock,
  Database,
  File,
  FileText,
  Folder,
  Info,
  LogOut,
  MapPin,
  Network,
  Palette,
  Settings
} from 'lucide-react';
import type { MenuItem } from '../types/common';

export const sectionMenuItems: Record<string, MenuItem[]> = {
  acquisition: [
    {
      id: 'overview',
      label: 'Overview',
      icon: Info,
      path: '/acquisition/overview',
      requiresAuth: true,
    },
    {
      id: 'collectors',
      label: 'Collectors',
      icon: FileText,
      path: '/acquisition/collectors',
      requiresAuth: true,
    },
    {
      id: 'sensors',
      label: 'Sensors',
      icon: Network,
      path: '/acquisition/sensors',
      requiresAuth: true,
    },    {
      id: 'database',
      label: 'Database',
      icon: Database,
      path: '/acquisition/database',
      requiresAuth: true,
    },
  ],
  visualization: [
    {
      id: 'quantum-resistance',
      label: 'Quantum Resistance',
      icon: BarChart2,
      path: '/visualization/quantum-resistance',
      requiresAuth: true,
    },
    {
      id: 'primitives',
      label: 'Primitives',
      icon: Palette,
      path: '/visualization/primitives',
      requiresAuth: true,
    },
    {
      id: 'protocols',
      label: 'Protocols',
      icon: Network,
      path: '/visualization/protocols',
      requiresAuth: true,
    },    {
      id: 'location',
      label: 'Location',
      icon: MapPin,
      path: '/visualization/location',
      requiresAuth: true,
    },
  ],
  reporting: [
    {
      id: 'reports',
      label: 'Reports',
      icon: FileText,
      path: '/reporting/reports',
      requiresAuth: true,
    },
    {
      id: 'templates',
      label: 'Templates',
      icon: File,
      path: '/reporting/templates',
      requiresAuth: true,
    },
    {
      id: 'history',
      label: 'History',
      icon: Clock,
      path: '/reporting/history',
      requiresAuth: true,
    },
  ],
  profile: 
    [
    {
      id: 'information',
      label: 'Information',
      icon: Info,
      path: '/profile/information',
      requiresAuth: true,
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: File,
      path: '/profile/reports',
      requiresAuth: true,
    },
    {
      id: 'network',
      label: 'Network',
      icon: Network,
      path: '/profile/network',
      requiresAuth: true,
    },
    {
      id:'views',
      label: 'Views',
      icon: Folder,
      path: '/profile/views',
      requiresAuth: true,
    },
    {
      id: 'preferences',
      label: 'Preferences',
      icon: Settings,
      path: '/profile/preferences',
      requiresAuth: true,
    },
    {
      id: 'logout',
      label: 'Logout',
      icon: LogOut,
      path: '/profile/logout',
      requiresAuth: true,
    }
  ],
};