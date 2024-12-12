import { Info } from "lucide-react";
import { useState } from "react";
import { formatNumber } from "../../utils/format";
import { Tooltip } from "../common/Tooltip/Tooltip";

interface MetricsCardProps {
  title: string;
  value: number;
  previousValue: number;
  icon: React.ReactNode;
  description: string;
  formatter?: (value: number) => string;
}

export function MetricsCard({ title, value, previousValue, icon, description, formatter = formatNumber }: MetricsCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const percentageChange = ((value - previousValue) / previousValue) * 100;
  const isPositive = percentageChange >= 0;

  return (
    <div className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              aria-label={`Information about ${title}`}
            >
              <Info className="w-4 h-4" />
            </button>
            <Tooltip show={showTooltip} content={description} />
          </div>
        </div>
        <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">{icon}</div>
      </div>

      <div className="space-y-2">
        <div className="text-2xl font-semibold text-gray-900 dark:text-white">{formatter(value)}</div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded text-sm ${
              isPositive
                ? "text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/20"
                : "text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/20"
            }`}
          >
            <span className="sr-only">{isPositive ? "Increased by" : "Decreased by"}</span>
            {isPositive ? "+" : ""}
            {percentageChange.toFixed(1)}%
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">vs previous period</span>
        </div>
      </div>
    </div>
  );
}
