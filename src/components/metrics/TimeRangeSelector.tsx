interface TimeRangeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function TimeRangeSelector({ value, onChange }: TimeRangeSelectorProps) {
  const ranges = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" }
  ];

  return (
    <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700">
      {ranges.map((range, index) => (
        <button
          key={range.value}
          onClick={() => onChange(range.value)}
          className={`px-4 py-2 text-sm font-medium ${index === 0 ? "rounded-l-lg" : ""} ${index === ranges.length - 1 ? "rounded-r-lg" : ""} ${
            value === range.value
              ? "bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
              : "bg-white dark:bg-primary-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-primary-700"
          }`}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}
