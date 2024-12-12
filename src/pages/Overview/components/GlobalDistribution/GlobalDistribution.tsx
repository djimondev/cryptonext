import { Chart } from "react-google-charts";
import { useTheme } from "../../../../hooks/useTheme";
import { globalDistributionData } from "./data";

export function GlobalDistribution() {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Global Distribution</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Network activity distribution across regions</p>
        </div>
      </div>

      <Chart
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={globalDistributionData}
        options={{
          backgroundColor: "transparent",
          colorAxis: {
            colors: theme === "dark" ? ["#1e40af", "#3b82f6", "#93c5fd"] : ["#1e40af", "#3b82f6", "#93c5fd"]
          },
          legend: {
            textStyle: {
              color: theme === "dark" ? "#e5e7eb" : "#111827"
            }
          },
          datalessRegionColor: theme === "dark" ? "#1f2937" : "#f3f4f6",
          defaultColor: "#f3f4f6",
          tooltip: {
            textStyle: {
              color: theme === "dark" ? "#e5e7eb" : "#111827"
            }
          }
        }}
      />
    </div>
  );
}
