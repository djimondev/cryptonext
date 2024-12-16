import { Button } from "@/components/ui/button";
import { useCollectors } from "@/contexts/CollectorContext";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CollectorCard } from "./CollectorCard";
import { CollectorForm } from "./CollectorForm";
import type { Collector } from "@/contexts/CollectorContext";

export function CollectorPage() {
  const { collectors, deleteCollector } = useCollectors();
  const [open, setOpen] = useState(false);
  const [selectedCollector, setSelectedCollector] = useState<Collector | undefined>();

  const handleEdit = (collector: Collector) => {
    setSelectedCollector(collector);
    setOpen(true);
  };

  const handleDelete = (collector: Collector) => {
    deleteCollector(collector.id);
  };

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setSelectedCollector(undefined);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Collectors</h1>
        <Button onClick={() => setOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Collector
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {collectors.map((collector) => (
          <CollectorCard
            key={collector.id}
            collector={collector}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <CollectorForm
        open={open}
        onOpenChange={handleOpenChange}
        collector={selectedCollector}
      />
    </div>
  );
} 