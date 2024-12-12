import { Clock } from "lucide-react";
import { TimeRangeSelector } from "./TimeRangeSelector";

interface MetricsHeaderProps {
  lastUpdated: Date;
  onTimeRangeChange: (range: string) => void;
  selectedRange: string;
}

export function MetricsHeader({ lastUpdated, onTimeRangeChange, selectedRange }: MetricsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Clock className="w-4 h-4" />
        <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
      </div>
      <TimeRangeSelector value={selectedRange} onChange={onTimeRangeChange} />
    </div>
  );
}
