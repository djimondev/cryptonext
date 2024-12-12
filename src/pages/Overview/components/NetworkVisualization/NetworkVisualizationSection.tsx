import { ExternalLink } from "lucide-react";
import { NetworkGraph } from "./NetworkGraph";

export function NetworkVisualizationSection() {
  return (
    <div className="bg-white dark:bg-primary-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Network Visualization</h2>
        </div>
      </div>

      <NetworkGraph />
    </div>
  );
}
