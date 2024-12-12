import { ResponsiveNetwork } from "@nivo/network";
import { useTheme } from "../../../../hooks/useTheme";
import { networkData } from "./data";

export function NetworkGraph() {
  const { theme } = useTheme();

  return (
    <div className="h-[400px]">
      <ResponsiveNetwork
        data={networkData}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={e => e.distance}
        centeringStrength={0.3}
        repulsivity={6}
        nodeSize={n => n.size}
        activeNodeSize={n => 1.5 * n.size}
        nodeColor={n => n.color}
        nodeBorderWidth={1}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]]
        }}
        linkThickness={l => 2 + 2 * l.weight}
        linkBlendMode="multiply"
        motionConfig="gentle"
        theme={{
          background: "transparent",
          textColor: theme === "dark" ? "#e5e7eb" : "#111827",
          tooltip: {
            container: {
              background: theme === "dark" ? "#1f2937" : "#ffffff",
              color: theme === "dark" ? "#e5e7eb" : "#111827",
              fontSize: "12px",
              borderRadius: "6px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            }
          }
        }}
      />
    </div>
  );
}
