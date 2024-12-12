import { SankeyChart } from "./SankeyChart";

export function DataFlowSection() {
  return (
    <div className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <SankeyChart />
    </div>
  );
}
