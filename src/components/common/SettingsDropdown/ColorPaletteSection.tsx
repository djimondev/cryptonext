import { Palette } from "lucide-react";
import { colorPalettes } from "../../../constants/colorPalettes";
import { useColorPalette } from "../../../hooks/useColorPalette";

interface ColorPreviewProps {
  colors: string[];
  isSelected: boolean;
  onClick: () => void;
  name: string;
}

function ColorPreview({ colors, isSelected, onClick, name }: ColorPreviewProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-2 py-2 rounded-md transition-colors ${
        isSelected ? "bg-primary-50 dark:bg-gray-900/20" : "hover:bg-primary-100 dark:hover:bg-primary-700"
      }`}
      role="menuitem"
      aria-label={`Select ${name} theme`}
    >
      <div className="flex gap-0.5">
        {colors.map((color, index) => (
          <div key={index} className="w-4 h-4 rounded-sm first:rounded-l-md last:rounded-r-md" style={{ backgroundColor: color }} />
        ))}
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-200">{name}</span>
    </button>
  );
}

export function ColorPaletteSection() {
  const { currentPalette, setPalette } = useColorPalette();

  return (
    <div className="px-4 py-2">
      <div className="flex items-center gap-2 mb-2">
        <Palette className="w-4 h-4 text-primary-500 dark:text-primary-400" />
        <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Color Theme</span>
      </div>
      <div className="space-y-1">
        {colorPalettes.map(palette => (
          <ColorPreview
            key={palette.id}
            colors={[palette.colors.primary[600], palette.colors.primary[400], palette.colors.secondary[600]]}
            isSelected={currentPalette.id === palette.id}
            onClick={() => setPalette(palette.id)}
            name={palette.name}
          />
        ))}
      </div>
    </div>
  );
}
