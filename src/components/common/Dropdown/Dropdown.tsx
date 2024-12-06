import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface DropdownItem {
  id: string;
  label: string;
  path: string;
}

interface DropdownProps {
  items: DropdownItem[];
  label: string;
}

export function Dropdown({ items, label }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 rounded-lg transition-colors"
      >
        <span>{label}</span>
        <ChevronDown
          className={clsx("w-4 h-4 transition-transform", {
            "transform rotate-180": isOpen
          })}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-primary-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-primary-700 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
