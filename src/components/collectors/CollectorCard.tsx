import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Collector } from "@/contexts/CollectorContext";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

interface CollectorCardProps {
  collector: Collector;
  onEdit: (collector: Collector) => void;
  onDelete: (collector: Collector) => void;
}

export function CollectorCard({ collector, onEdit, onDelete }: CollectorCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{collector.name}</CardTitle>
          <div className="text-sm text-muted-foreground">
            ID: {collector.id}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {collector.description}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Created: {collector.createdAt.toLocaleDateString()}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 ml-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(collector)}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>

      <ConfirmDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirm={() => onDelete(collector)}
        title="Delete Collector"
        description={`Are you sure you want to delete the collector "${collector.name}"? This action cannot be undone.`}
        variant="destructive"
      />
    </>
  );
} 