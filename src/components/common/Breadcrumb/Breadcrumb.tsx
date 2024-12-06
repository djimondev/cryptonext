import { Home } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../../../constants/menuItems';
import { sectionMenuItems } from '../../../constants/sectionMenuItems';
import { BreadcrumbItem } from './BreadcrumbItem';

export function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems = useMemo(() => {
    const items = [];
    let currentPath = '';

    // Add home item
    items.push({
      label: 'Home',
      path: '/',
    });

    // Build breadcrumb items based on path segments
    for (const segment of pathSegments) {
      currentPath += `/${segment}`;
      
      // Find matching menu item
      const menuItem = menuItems.find(item => item.path === currentPath);
      if (menuItem) {
        items.push({
          label: menuItem.label,
          path: currentPath,
        });
        continue;
      }

      // Find matching section menu item
      const section = menuItems.find(item => currentPath.startsWith(item.path));
      if (section) {
        const sectionMenuItem = sectionMenuItems[section.id]?.find(
          item => item.path === currentPath
        );
        if (sectionMenuItem) {
          items.push({
            label: sectionMenuItem.label,
            path: currentPath,
          });
        }
      }
    }

    return items;
  }, [location.pathname]);

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="px-6 py-4">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {breadcrumbItems.slice(1).map((item, index) => (
          <BreadcrumbItem
            key={item.path}
            label={item.label}
            path={item.path}
            isLast={index === breadcrumbItems.length - 2}
          />
        ))}
      </ol>
    </nav>
  );
}