import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    disabled, 
    type = "button",
    ...props 
}, ref) => {
    return (
      <button 
        ref={ref}
        disabled={disabled}
        className={cn(
          `
            w-auto
            rounded-full
            bg-white
            border-transparent
            px-5
            py-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-black
            font-semibold
            hover:opacity-75
            transition
          `,
          className
        )}
        {...props}
      >
        {children}
      </button>);
  }
);

Button.displayName = " Button";

export default Button;