import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../../constants/menuItems';
import { getIconClasses } from '../../../helpers/menuitems.helper';

interface SectionDropdownProps {
  currentSection: string | null;
  collapsed: boolean;
}

export function SectionDropdown({ currentSection, collapsed }: SectionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();



const primarySections = menuItems.filter(item => !item.isSecondary);
const secondarySections = menuItems.filter(item => item.isSecondary);

const currentSectionData = [...primarySections, ...secondarySections].find(
  section => section.id === currentSection
);
  

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!currentSectionData) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'text-sm w-full flex items-center px-4 py-3 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors border-b border-gray-200 dark:border-gray-700',
          { 'justify-center': collapsed }
        )}
      >
        <currentSectionData.icon className="w-5 h-5 flex-shrink-0" />
        {!collapsed && (
          <>
            <span className="ml-3 flex-1 text-gray-700 dark:text-gray-300">{currentSectionData.label}</span>
            <ChevronDown
              className={clsx('w-4 h-4 transition-transform', {
                'transform rotate-180': isOpen,
              })}
            />
          </>
        )}
      </button>
      {isOpen && !collapsed && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-primary-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-b-lg z-50">
          {primarySections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                navigate(section.path);
                setIsOpen(false);
              }}
              className={clsx(
                'text-sm w-full flex items-center gap-3 px-4 py-2 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors',
                {
                  'bg-primary-100 dark:bg-primary-700': section.id === currentSection,
                }
              )}
            >
              <section.icon className={`${getIconClasses(collapsed)} flex-shrink-0`} />
              <span className="text-gray-700 dark:text-gray-300">{section.label}</span>
            </button>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700">
            {secondarySections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                navigate(section.path);
                setIsOpen(false);
              }}
              className={clsx(
                'text-sm w-full flex items-center gap-3 px-4 py-2 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors',
                {
                  'bg-primary-100 dark:bg-primary-700': section.id === currentSection,
                }
              )}
            >
              <section.icon className={`${getIconClasses(collapsed)} flex-shrink-0`} />
              <span className="text-gray-700 dark:text-gray-300">{section.label}</span>
            </button>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}