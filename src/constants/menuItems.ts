import { MenuItem } from '../types/common';
import { BarChart3, Network, FileText, User } from 'lucide-react';

export const menuItems: MenuItem[] = [
  {
    id: 'acquisition',
    label: 'Data Acquisition',
    icon: Network,
    path: '/acquisition',
    requiresAuth: true,
  },
  {
    id: 'visualization',
    label: 'Visualization',
    icon: BarChart3,
    path: '/visualization',
    requiresAuth: true,
  },
  {
    id: 'reporting',
    label: 'Reporting',
    icon: FileText,
    path: '/reporting',
    requiresAuth: true,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    path: '/profile',
    requiresAuth: true,
    isSecondary: true
  },
];