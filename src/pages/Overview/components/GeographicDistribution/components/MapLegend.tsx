import { useTheme } from "../../../../../hooks/useTheme";

interface MapLegendProps {
  min: number;
  max: number;
}

export function MapLegend({ min, max }: MapLegendProps) {
  const { theme } = useTheme();

  const gradientStops = [
    { color: "#eff6ff", label: "0" },
    { color: "#bfdbfe", label: "250K" },
    { color: "#60a5fa", label: "500K" },
    { color: "#2563eb", label: "750K" },
    { color: "#1e40af", label: "1M+" }
  ];

  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      <span className="text-gray-600 dark:text-gray-400">{min.toLocaleString()}</span>
      <div className="flex h-2 w-40">
        {gradientStops.map((stop, i) => (
          <div
            key={i}
            className="flex-1"
            style={{
              background: theme === "dark" ? `color-mix(in srgb, ${stop.color} 85%, #1f2937)` : stop.color
            }}
          />
        ))}
      </div>
      <span className="text-gray-600 dark:text-gray-400">{max.toLocaleString()}</span>
    </div>
  );
}
