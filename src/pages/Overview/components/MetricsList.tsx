import { Activity, ArrowUpRight, Network, Shield, Users } from "lucide-react";
import { MetricsCard } from "../../../components/metrics/MetricsCard";
import { formatNumber, formatPercentage } from "../../../utils/format";

const metrics = [
  {
    title: "Active Collectors",
    value: 1458,
    previousValue: 1389,
    icon: <Network className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
    description: "Number of data collectors currently active and sending data"
  },
  {
    title: "Data Points",
    value: 2847392,
    previousValue: 2543789,
    icon: <Activity className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
    description: "Total number of data points collected in the current period"
  },
  {
    title: "System Uptime",
    value: 99.98,
    previousValue: 99.95,
    icon: <ArrowUpRight className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
    description: "Percentage of time the system was operational",
    formatter: formatPercentage
  },
  {
    title: "Security Events",
    value: 127,
    previousValue: 164,
    icon: <Shield className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
    description: "Number of security events detected and analyzed"
  },
  {
    title: "Active Users",
    value: 847,
    previousValue: 792,
    icon: <Users className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
    description: "Number of users currently active in the system"
  }
];

export function MetricsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map(metric => (
        <MetricsCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          previousValue={metric.previousValue}
          icon={metric.icon}
          description={metric.description}
          formatter={metric.formatter}
        />
      ))}
    </div>
  );
}
