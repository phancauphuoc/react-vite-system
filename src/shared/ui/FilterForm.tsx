import { ReactNode } from "@tanstack/react-router";
import {
  Children,
  FormEvent,
  useState,
  ReactElement,
  isValidElement,
} from "react";
import { cn } from "../utils/utils";
import { Button } from "./Button";

interface IFilterForm {
  children?: ReactNode | undefined;
  onSubmit?: (e?: FormEvent) => void;
}

interface IFormItem {
  children?: ReactNode | undefined;
  isAdvanced?: boolean;
  className?: string | undefined;
}

interface IFormAction {
  children?: ReactNode | undefined;
  className?: string | undefined;
}

export const FilterForm = ({ children, onSubmit }: IFilterForm) => {
  const [open, setOpen] = useState<boolean>(false);
  const items = Children.toArray(children).filter(
    (child): child is ReactElement<IFormItem> =>
      isValidElement(child) && child.type === FormItem
  );
  const actions = Children.toArray(children).filter(
    (child): child is ReactElement<IFormAction> =>
      isValidElement(child) && child.type === FormAction
  );
  return (
    <form
      onSubmit={(event: FormEvent) => {
        onSubmit?.(event);
        setOpen(false);
      }}
      className="flex flex-col gap-y-5 [&_div:first-child_hr]:hidden"
    >
      {items.map((c) => {
        if (c.props.isAdvanced) return open && c;
        return c;
      })}
      {items.filter((item) => item.props.isAdvanced).length > 0 && (
        <div className="btn-advanced-wrap relative h-8 flex justify-center">
          <hr className="border-gray-200 w-full" />
          <Button
            variant="outlined"
            className="btn-graylight"
            label="Advanced Search"
            onClick={() => setOpen((pre) => !pre)}
            // iconRight={
            //   <span className="material-icons-outlined text-2xl text-secondary">
            //     {open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            //   </span>
            // }
          />
        </div>
      )}
      {actions}
    </form>
  );
};

export const FormItem = ({ children, className }: IFormItem) => {
  return (
    <div className={cn("h-[71px] flex flex-col gap-y-5", className)}>
      <hr className="border-gray-200" />
      {children}
    </div>
  );
};

export const FormAction = ({ children, className }: IFormAction) => {
  return (
    <div className={cn("flex gap-2.5 justify-end flex-wrap", className)}>
      {children}
    </div>
  );
};
