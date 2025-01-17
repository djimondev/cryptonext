import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "flex items-center gap-4 p-6 rounded border",
  {
    variants: {
      variant: {
        default: "border-primary/20 bg-primary/10 text-primary",
        destructive: "border-destructive/20 bg-destructive/10 text-destructive",
        warning: "border-yellow-500/20 bg-yellow-500/10 text-yellow-500",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
    {children}
  </div>
))
Alert.displayName = "Alert"

const AlertIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-6 w-6 flex-shrink-0", className)} {...props} />
))
AlertIcon.displayName = "AlertIcon"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold mb-1", className)}
    {...props}
  >
    {props.children}
  </h3>
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertIcon, AlertTitle, AlertDescription } 