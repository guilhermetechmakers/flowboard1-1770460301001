import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-md hover:scale-[1.02]",
  secondary:
    "border border-primary bg-transparent text-primary hover:bg-primary/10",
  outline:
    "border border-muted bg-background hover:bg-surface hover:border-primary/50",
  ghost: "hover:bg-surface",
  destructive: "bg-destructive text-white hover:bg-destructive/90 hover:shadow-md",
  link: "text-primary underline-offset-4 hover:underline",
};

const sizeStyles: Record<string, string> = {
  sm: "h-8 px-3 text-sm",
  default: "h-10 px-4 py-3 text-base",
  lg: "h-12 px-6 text-lg",
  icon: "h-9 w-9",
  "icon-sm": "h-8 w-8",
  "icon-lg": "h-10 w-10",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      asChild = false,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variantStyles[variant] ?? variantStyles.primary,
          sizeStyles[size] ?? sizeStyles.default,
          className
        )}
        ref={ref}
        disabled={disabled ?? isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
