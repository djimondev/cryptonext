import { ResponsiveSunburst } from "@nivo/sunburst";
import { useTheme } from "../../../hooks/useTheme";

const data = {
  name: "network",
  color: "hsl(222, 70%, 50%)",
  children: [
    {
      name: "Americas",
      color: "hsl(97, 70%, 50%)",
      children: [
        {
          name: "North America",
          color: "hsl(12, 70%, 50%)",
          value: 2500
        },
        {
          name: "South America",
          color: "hsl(126, 70%, 50%)",
          value: 1800
        }
      ]
    },
    {
      name: "Europe",
      color: "hsl(175, 70%, 50%)",
      children: [
        {
          name: "Western Europe",
          color: "hsl(19, 70%, 50%)",
          value: 3100
        },
        {
          name: "Eastern Europe",
          color: "hsl(271, 70%, 50%)",
          value: 1400
        }
      ]
    },
    {
      name: "Asia Pacific",
      color: "hsl(337, 70%, 50%)",
      children: [
        {
          name: "East Asia",
          color: "hsl(316, 70%, 50%)",
          value: 2900
        },
        {
          name: "South Asia",
          color: "hsl(60, 70%, 50%)",
          value: 1600
        },
        {
          name: "Oceania",
          color: "hsl(185, 70%, 50%)",
          value: 900
        }
      ]
    }
  ]
};

export function NetworkDistribution() {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Network Distribution</h2>
      <div className="h-[400px]">
        <ResponsiveSunburst
          data={data}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          id="name"
          value="value"
          cornerRadius={2}
          borderWidth={1}
          borderColor={{
            theme: "background"
          }}
          colors={{ scheme: "nivo" }}
          childColor={{
            from: "color",
            modifiers: [["brighter", 0.1]]
          }}
          enableArcLabels={true}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 1.4]]
          }}
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
    </div>
  );
}
