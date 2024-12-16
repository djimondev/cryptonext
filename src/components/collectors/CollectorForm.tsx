import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCollectors } from "@/contexts/CollectorContext";
import type { Collector } from "@/contexts/CollectorContext";
import { useEffect, useState } from "react";

interface CollectorFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  collector?: Collector;
}

export function CollectorForm({ open, onOpenChange, collector }: CollectorFormProps) {
  const { addCollector, updateCollector } = useCollectors();
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  useEffect(() => {
    if (open) {
      setFormData({
        name: collector?.name ?? "",
        description: collector?.description ?? ""
      });
    }
  }, [open, collector]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (collector) {
      updateCollector(collector.id, formData);
    } else {
      addCollector(formData);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {collector ? "Edit Collector" : "Add Collector"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter collector name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Enter collector description"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {collector ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 