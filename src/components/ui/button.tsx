import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-primary px-7 py-3 text-primary-foreground shadow-brand hover:bg-foreground hover:-translate-y-0.5",
        outline:
          "rounded-full border-2 border-border-strong bg-transparent px-7 py-3 text-foreground hover:bg-secondary",
        compact:
          "min-h-9 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground shadow-sm hover:bg-foreground",
        ghost: "rounded-md px-3 text-foreground hover:bg-secondary",
        icon: "size-11 rounded-full bg-surface-inverse/15 p-0 text-background hover:bg-primary",
      },
      size: {
        default: "text-base",
        large: "min-h-14 px-8 py-4 text-lg",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
