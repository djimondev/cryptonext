import { useState } from "react";
import { MetricsHeader } from "../../components/metrics/MetricsHeader";
import { useLastUpdated } from "./hooks/useLastUpdated";
import { MetricsList } from "./components/MetricsList";
import { NetworkDistribution } from "./components/NetworkDistribution";
import { NetworkVisualizationSection } from "./components/NetworkVisualization/NetworkVisualizationSection";
import { DataFlowSection } from "./components/DataFlow/DataFlowSection";
import { GlobalDistribution } from "./components/GlobalDistribution/GlobalDistribution";

export function Overview() {
  const [timeRange, setTimeRange] = useState("daily");
  const lastUpdated = useLastUpdated();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Overview</h1>
      </div>

      <MetricsHeader lastUpdated={lastUpdated} onTimeRangeChange={setTimeRange} selectedRange={timeRange} />

      <MetricsList />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NetworkDistribution />
        <NetworkVisualizationSection />
      </div>

      <GlobalDistribution />
      <DataFlowSection />
    </div>
  );
}
