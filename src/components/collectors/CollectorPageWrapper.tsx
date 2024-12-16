import { CollectorProvider } from "@/contexts/CollectorContext";
import { CollectorPage } from "./CollectorPage";

export function CollectorPageWrapper() {
  return (
    <CollectorProvider>
      <CollectorPage />
    </CollectorProvider>
  );
} 