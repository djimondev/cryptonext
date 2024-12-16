import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  title: string
  description: string
  variant?: "default" | "destructive"
}

export function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  description,
  variant = "destructive"
}: ConfirmDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-full",
              variant === "destructive" ? "bg-destructive/10" : "bg-primary/10"
            )}>
              <AlertCircle className={cn(
                "h-5 w-5",
                variant === "destructive" ? "text-destructive" : "text-primary"
              )} />
            </div>
            <DialogTitle>{title}</DialogTitle>
          </div>
          <p className="text-sm text-muted-foreground pt-3">
            {description}
          </p>
        </DialogHeader>
        <div className="flex justify-end gap-2 mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            variant={variant}
            onClick={() => {
              onConfirm()
              onOpenChange(false)
            }}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 