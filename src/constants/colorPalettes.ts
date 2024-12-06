export interface ColorPalette {
  id: string;
  name: string;
  colors: {
    primary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    secondary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    background: {
      light: string;
      dark: string;
    };
    surface: {
      light: string;
      dark: string;
    };
    text: {
      primary: {
        light: string;
        dark: string;
      };
      secondary: {
        light: string;
        dark: string;
      };
    };
  };
}

export const colorPalettes: ColorPalette[] = [
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
      secondary: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
        950: '#042f2e',
      },
      background: {
        light: '#f8fafc',
        dark: '#0f172a',
      },
      surface: {
        light: '#ffffff',
        dark: '#1e293b',
      },
      text: {
        primary: {
          light: '#0f172a',
          dark: '#f8fafc',
        },
        secondary: {
          light: '#475569',
          dark: '#94a3b8',
        },
      },
    },
  },
  {
    id: 'sunset',
    name: 'Sunset Warmth',
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
        950: '#431407',
      },
      secondary: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
        950: '#500724',
      },
      background: {
        light: '#fffbf5',
        dark: '#27150d',
      },
      surface: {
        light: '#ffffff',
        dark: '#3d2517',
      },
      text: {
        primary: {
          light: '#27150d',
          dark: '#fffbf5',
        },
        secondary: {
          light: '#9a3412',
          dark: '#fdba74',
        },
      },
    },
  },
  {
    id: 'forest',
    name: 'Forest Depths',
    colors: {
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
        950: '#052e16',
      },
      secondary: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
        950: '#422006',
      },
      background: {
        light: '#f8faf8',
        dark: '#0f1f13',
      },
      surface: {
        light: '#ffffff',
        dark: '#1e2f1e',
      },
      text: {
        primary: {
          light: '#0f1f13',
          dark: '#f8faf8',
        },
        secondary: {
          light: '#166534',
          dark: '#86efac',
        },
      },
    },
  },
  {
    id: 'royal',
    name: 'Royal Purple',
    colors: {
      primary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
        950: '#3b0764',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      background: {
        light: '#faf7fe',
        dark: '#1a1425',
      },
      surface: {
        light: '#ffffff',
        dark: '#2d2235',
      },
      text: {
        primary: {
          light: '#1a1425',
          dark: '#faf7fe',
        },
        secondary: {
          light: '#6b21a8',
          dark: '#d8b4fe',
        },
      },
    },
  },
];