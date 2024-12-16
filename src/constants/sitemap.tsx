import { CollectorPageWrapper } from "@/components/collectors/CollectorPageWrapper";
import { HomePage } from "@/components/HomePage";
import type { Sitemap } from "@/types/common";
import { AlertCircle, BarChart, Clock, Database, FileText, HomeIcon, LineChart, MapPin, Network, Shield } from "lucide-react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@/components/ui/alert';

const NYI: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh]">
    <div className="max-w-lg">
      <Alert>
        <AlertIcon>
          <AlertCircle aria-hidden="true" />
        </AlertIcon>
        <div className="flex-1">
          <AlertTitle>Under Development</AlertTitle>
          <AlertDescription>
            This feature is currently being developed and will be available soon.
          </AlertDescription>
        </div>
      </Alert>
    </div>
  </div>
);

export const sitemap: Sitemap = {
  items: [
    {
      id: "homePage",
      label: "Home",
      icon: HomeIcon,
      path: "/",
      component: HomePage
    }
  ],
  categories: [
    {
      id: "data-acquisition",
      path: "/data-acquisition",
      label: "Data Acquisition",
      description: "Data Acquisition",
      icon: Network,
      items: [
        {
          id: "overview",
          label: "Overview",
          icon: LineChart,
          path: "/data-acquisition/overview",
          component: NYI
        },
        {
          id: "collectors",
          label: "Collectors",
          icon: Network,
          path: "/data-acquisition/collectors",
          component: CollectorPageWrapper
        },
        {
          id: "sensors",
          label: "Sensors",
          icon: BarChart,
          path: "/data-acquisition/sensors",
          component: NYI
        },
        {
          id: "data-sources",
          label: "Data Sources",
          icon: Database,
          path: "/data-acquisition/data-sources",
          component: NYI
        }
      ]
    },
    {
      id: "visualization",
      path: "/visualization",
      label: "Visualization",
      description: "Visualization",
      icon: BarChart,
      items: [
        {
          id: "quantum-resistance",
          label: "Quantum Resistance",
          icon: Shield,
          path: "/visualization/quantum-resistance",
          component: NYI  
        },
        {
          id: "primitives",
          label: "Primitives",
          icon: BarChart,
          path: "/visualization/primitives",
          component: NYI
        },
        {
          id: "protocols",
          label: "Protocols",
          icon: Network,
          path: "/visualization/protocols",
          component: NYI
        },
        {
          id: "location",
          label: "Location",
          icon: MapPin,
          path: "/visualization/location",
          component: NYI
        }
      ]
    },
    {
      id: "reporting",
      path: "/reporting",
      label: "Reporting",
      description: "Reporting",
      icon: FileText,
      items: [
        {
          id: "reports",
          label: "Reports",
          icon: FileText,
          path: "/reporting/reports",
          component: NYI
        },
        {
          id: "templates",
          label: "Templates",
          icon: FileText,
          path: "/reporting/templates",
          component: NYI
        },
        {
          id: "history",
          label: "History",
          icon: Clock,
          path: "/reporting/history",
          component: NYI
        }
      ]
    }
  ]
}