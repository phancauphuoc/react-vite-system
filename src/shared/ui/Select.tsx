import React, { useId } from "react";
import SelectLib from "react-select";

export interface IOption {
  label: string;
  value: string | number;
  isDisabled?: boolean;
}

export type ValueType = IOption | IOption[] | null;

type SelectProps = {
  id?: string;
  label?: string;
  required?: boolean;
  value: ValueType;
  onChange: (option: ValueType) => void;
  options: readonly IOption[];
  isMulti?: boolean;
};

const Select = ({
  label,
  id,
  required,
  value,
  onChange,
  options,
  isMulti,
}: SelectProps) => {
  const _id = useId();

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id ?? _id} className="label-xs">
          {label} {required && <sup className="text-red-500">*</sup>}
        </label>
      )}
      <div className="flex flex-col space-y-2 relative">
        <SelectLib
          inputId={id ?? _id}
          value={value}
          onChange={(newValue) => onChange(newValue as ValueType)}
          options={options}
          isMulti={isMulti}
        />
      </div>
    </div>
  );
};

export default Select;
