interface MapTooltipProps {
  name: string;
  value: number;
  datacenterCount: number;
  growth: number;
}

export function MapTooltip({ name, value, datacenterCount, growth }: MapTooltipProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="font-semibold text-gray-900 dark:text-white mb-2">{name}</div>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-gray-600 dark:text-gray-400">Network Activity:</span>
          <span className="text-gray-900 dark:text-white font-medium">{value.toLocaleString()}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-600 dark:text-gray-400">Data Centers:</span>
          <span className="text-gray-900 dark:text-white font-medium">{datacenterCount}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-600 dark:text-gray-400">Growth:</span>
          <span className={`font-medium ${growth >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {growth >= 0 ? "+" : ""}
            {growth}%
          </span>
        </div>
      </div>
    </div>
  );
}
