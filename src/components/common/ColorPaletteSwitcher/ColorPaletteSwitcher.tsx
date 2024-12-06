import { useColorPalette } from '../../../hooks/useColorPalette';
import { colorPalettes } from '../../../constants/colorPalettes';
import { ColorSwatch } from './ColorSwatch';

export function ColorPaletteSwitcher() {
  const { currentPalette, setPalette } = useColorPalette();

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Color Theme
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {colorPalettes.map((palette) => (
          <div key={palette.id} className="flex flex-col items-center gap-2">
            <ColorSwatch
              color={palette.colors.primary[600]}
              isSelected={currentPalette.id === palette.id}
              onClick={() => setPalette(palette.id)}
              label={`Select ${palette.name} theme`}
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {palette.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}