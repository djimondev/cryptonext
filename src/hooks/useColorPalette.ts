import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ColorPalette } from "../constants/colorPalettes";
import { colorPalettes } from "../constants/colorPalettes";

interface ColorPaletteStore {
  currentPalette: ColorPalette;
  setPalette: (paletteId: string) => void;
}

export const useColorPalette = create<ColorPaletteStore>()(
  persist(
    set => ({
      currentPalette: colorPalettes[0],
      setPalette: paletteId => {
        const palette = colorPalettes.find(p => p.id === paletteId);
        if (palette) {
          set({ currentPalette: palette });
          document.documentElement.style.setProperty("--transition-colors", "all 0.3s ease");
          Object.entries(palette.colors.primary).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--primary-${key}`, value);
          });
          Object.entries(palette.colors.secondary).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--secondary-${key}`, value);
          });
          setTimeout(() => {
            document.documentElement.style.removeProperty("--transition-colors");
          }, 300);
        }
      }
    }),
    {
      name: "color-palette"
    }
  )
);

export function useColorPaletteEffect() {
  const { currentPalette } = useColorPalette();

  useEffect(() => {
    Object.entries(currentPalette.colors.primary).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--primary-${key}`, value);
    });
    Object.entries(currentPalette.colors.secondary).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--secondary-${key}`, value);
    });
  }, [currentPalette]);
}
