import React from "react";
import { cn } from "../utils/utils";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "contained" | "outlined" | "text" | "ghost";
  label?: string;
  disable?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = React.forwardRef<HTMLButtonElement, IButton>( //React.forwardRef access pass useRef
  ({ className, variant, label, disable, type, ...rest }: IButton, ref) => {
    return (
      <button
        ref={ref}
        title={typeof label === "string" ? (label as string) : undefined}
        className={cn("btn", {
          "btn-primary": variant === "contained",
          "btn-primary-outline": variant === "outlined",
          "btn-link shadow-none": variant === "text",
          "btn-no-outline": variant === "ghost",
          [className as string]: className,
        })}
        disabled={disable}
        type={type}
        {...rest}
      >
        {label}
      </button>
    );
  }
);
