import { Check } from 'lucide-react';
import clsx from 'clsx';

interface ColorSwatchProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
  label: string;
}

export function ColorSwatch({ color, isSelected, onClick, label }: ColorSwatchProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-12 h-12 rounded-lg shadow-sm transition-all duration-200',
        'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2',
        'flex items-center justify-center'
      )}
      style={{ backgroundColor: color }}
      aria-label={label}
    >
      {isSelected && <Check className="w-6 h-6 text-white drop-shadow-md" />}
    </button>
  );
}