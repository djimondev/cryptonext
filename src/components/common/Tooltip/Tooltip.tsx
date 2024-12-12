interface TooltipProps {
  content: string;
  show: boolean;
}

export function Tooltip({ content, show }: TooltipProps) {
  if (!show) return null;

  return (
    <div className="absolute z-50 w-64 px-4 py-2 text-sm text-white bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg -left-8 top-8">
      <div className="absolute w-3 h-3 bg-gray-900 dark:bg-gray-800 transform rotate-45 -top-1.5 left-[42px]" />
      {content}
    </div>
  );
}
