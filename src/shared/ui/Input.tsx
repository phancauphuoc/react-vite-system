import React, { forwardRef, InputHTMLAttributes, useId } from "react";
import { cn } from "../utils/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  className?: string;
  inputClassName?: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      helperText,
      required,
      placeholder,
      type,
      className,
      inputClassName,
      error,
      ...rest
    }: InputProps,
    ref
  ) => {
    const _id = useId();

    const wrapperInput = (
      <div
        className={cn("input-type-wrap", {
          "!ring-red-500 [&>.input-type]:!text-red-500": error,
          disabled: rest.disabled,
          [className as string]: className,
        })}
      >
        <input
          ref={ref}
          type={type}
          id={id ?? _id}
          autoComplete="off"
          className={cn("input-type", {
            "placeholder:text-red-500": error,
            [inputClassName as string]: inputClassName,
          })}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );

    if (label || helperText) {
      return (
        <div className="flex flex-col gap-1 w-full">
          {label && (
            <label>
              {label} {required && <sup className="text-red-500">*</sup>}
            </label>
          )}
          {wrapperInput}
          {helperText && (
            <p
              className={cn("text-xs leading-none", { "text-red-500": error })}
            >
              {helperText}
            </p>
          )}
        </div>
      );
    }

    return wrapperInput;
  }
);

Input.displayName = "Input";
export default Input;
