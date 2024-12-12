import { ExternalLink, Info } from "lucide-react";
import { GeoMap } from "./GeoMap";
import { Tooltip } from "../../../../components/common/Tooltip/Tooltip";
import { useState } from "react";
import { MapLegend } from "./components/MapLegend";
import { StatsCard } from "./components/StatsCard";
import { geoData } from "./data";

export function GeographicDistribution() {
  const [showTooltip, setShowTooltip] = useState(false);

  const totalDataCenters = geoData.reduce((sum, item) => sum + item.datacenterCount, 0);
  const activeRegions = geoData.length;
  const avgGrowth = geoData.reduce((sum, item) => sum + item.growth, 0) / geoData.length;
  const avgResponseTime = 45;

  return (
    <div className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Geographic Distribution</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Global distribution of network activity and data centers</p>
          </div>
          <div className="relative mt-1">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              aria-label="Information about Geographic Distribution"
            >
              <Info className="w-4 h-4" />
            </button>
            <Tooltip
              show={showTooltip}
              content="This map shows the global distribution of network activity and data center locations. Darker colors indicate higher activity levels."
            />
          </div>
        </div>
        <a
          href="https://nivo.rocks/choropleth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline"
        >
          Learn more
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <GeoMap />

      <div className="mt-4 flex justify-center">
        <MapLegend min={0} max={1000000} />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total Data Centers" value={totalDataCenters} trend={8.5} />
        <StatsCard label="Active Regions" value={activeRegions} trend={12.5} />
        <StatsCard label="Average Growth" value={`${avgGrowth.toFixed(1)}%`} />
        <StatsCard label="Avg. Response Time" value={`${avgResponseTime}ms`} trend={-15.2} />
      </div>
    </div>
  );
}
