import { cn } from "../utils/utils";

interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  type?: "success" | "warning";
}

export const Badge = ({ className, children, type }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-white ring-1 ring-indigo-700/10 ring-inset",
        {
          "bg-green-500": type === "success",
          "bg-yellow-500": type === "warning",
          className,
        }
      )}
    >
      {children}
    </span>
  );
};
