import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-input border border-muted bg-background px-3 py-2 text-base transition-colors",
          "placeholder:text-foreground-secondary",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 focus:border-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "invalid:border-destructive invalid:focus:ring-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
