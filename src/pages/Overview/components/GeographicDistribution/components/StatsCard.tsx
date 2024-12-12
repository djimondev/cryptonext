interface StatsCardProps {
  label: string;
  value: string | number;
  trend?: number;
}

export function StatsCard({ label, value, trend }: StatsCardProps) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</div>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</span>
        {trend !== undefined && (
          <span className={`text-sm font-medium ${trend >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {trend >= 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>
    </div>
  );
}
