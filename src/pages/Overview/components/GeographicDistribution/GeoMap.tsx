import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "../../../../hooks/useTheme";
import { geoData } from "./data";
import { features } from "./features";
import { MapTooltip } from "./components/MapTooltip";

export function GeoMap() {
  const { theme } = useTheme();

  return (
    <div className="h-[500px]">
      <ResponsiveChoropleth
        data={geoData}
        features={features.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="blues"
        domain={[0, 1000000]}
        unknownColor={theme === "dark" ? "#1f2937" : "#f3f4f6"}
        label="properties.name"
        valueFormat=".2s"
        projectionScale={140}
        projectionTranslation={[0.5, 0.6]}
        projectionRotation={[-10, 0, 0]}
        enableGraticule={true}
        graticuleLineColor={theme === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .05)"}
        borderWidth={0.5}
        borderColor={theme === "dark" ? "#374151" : "#e5e7eb"}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -20,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: theme === "dark" ? "#e5e7eb" : "#111827",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme === "dark" ? "#fff" : "#000",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        tooltip={({ feature }) => {
          const data = geoData.find(item => item.id === feature.id);
          if (!data) return null;

          return <MapTooltip name={feature.properties.name} value={data.value} datacenterCount={data.datacenterCount} growth={data.growth} />;
        }}
        theme={{
          background: "transparent",
          textColor: theme === "dark" ? "#e5e7eb" : "#111827",
          fontSize: 12,
          axis: {
            domain: {
              line: {
                stroke: theme === "dark" ? "#4b5563" : "#d1d5db",
                strokeWidth: 1
              }
            },
            ticks: {
              line: {
                stroke: theme === "dark" ? "#4b5563" : "#d1d5db",
                strokeWidth: 1
              }
            }
          },
          grid: {
            line: {
              stroke: theme === "dark" ? "#4b5563" : "#e5e7eb",
              strokeWidth: 1
            }
          },
          tooltip: {
            container: {
              background: "transparent",
              boxShadow: "none",
              padding: 0
            }
          }
        }}
      />
    </div>
  );
}
