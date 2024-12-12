import { ResponsiveSankey } from "@nivo/sankey";
import { useTheme } from "../../../../hooks/useTheme";
import { sankeyData } from "./data";

export function SankeyChart() {
  const { theme } = useTheme();

  return (
    <div className="h-[400px]">
      <ResponsiveSankey
        data={sankeyData}
        margin={{ top: 40, right: 160, bottom: 40, left: 150 }}
        align="justify"
        colors={{ scheme: "category10" }}
        nodeOpacity={1}
        nodeThickness={18}
        nodeInnerPadding={3}
        nodeBorderWidth={0}
        linkOpacity={0.5}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="horizontal"
        nodeBorderRadius={2}
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
