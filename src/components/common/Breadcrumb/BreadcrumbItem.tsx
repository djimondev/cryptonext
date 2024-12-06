import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItemProps {
  label: string;
  path?: string;
  isLast: boolean;
}

export function BreadcrumbItem({ label, path, isLast }: BreadcrumbItemProps) {
  const content = (
    <span
      className={clsx(
        'max-w-[200px] truncate',
        isLast
          ? 'text-primary-900 dark:text-white font-medium'
          : 'text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-white'
      )}
    >
      {label}
    </span>
  );

  return (
    <li className="flex items-center">
      <ChevronRight className="w-4 h-4 mx-2 text-primary-400 dark:text-primary-600 flex-shrink-0" />
      {isLast ? (
        <span aria-current="page" className="text-primary-600 dark:text-primary-400">{content}</span>
      ) : (
        <Link to={path || '#'} className="hover:underline">
          {content}
        </Link>
      )}
    </li>
  );
}