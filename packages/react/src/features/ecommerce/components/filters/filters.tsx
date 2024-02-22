import { Button, ButtonProps } from "@/components/button/button";
import { Checkbox, CheckboxProps } from "@/components/checkbox/checkbox";
import { Label } from "@/components/label/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/radio-group/radio-group";
import { Range, RangeProps } from "@/components/range/range";
import {
  FilterItemKey,
  useFilterStore,
} from "@/features/ecommerce/components/filters/useFilterStore";
import { cn } from "@/lib/utils";

import React from "react";

type FiltersFormProps = React.FormHTMLAttributes<HTMLFormElement>;
export const FiltersForm = React.forwardRef<HTMLFormElement, FiltersFormProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn("flex flex-col space-y-4", className)}
        {...props}
      >
        {children}
      </form>
    );
  }
);

type FilterCheckboxProps = CheckboxProps & {
  name: FilterItemKey;
  children: React.ReactNode;
};

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  children,
  name,

  ...props
}) => {
  const { filters, setFilter } = useFilterStore();

  const handleChange = (key: FilterItemKey) => (value: boolean) => {
    setFilter(key, `${value}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={name ?? props.id}
        name={name}
        checked={filters[name] === "true"}
        onCheckedChange={handleChange(name)}
        {...props}
      />
      <Label htmlFor={name ?? props.id}>{children}</Label>
    </div>
  );
};

type FilterRangeProps = RangeProps & {
  name: FilterItemKey;
  labelPrefix?: string;
};

export const FilterRange: React.FC<FilterRangeProps> = ({
  name,
  min = 0,
  max = 9999,
  labelPrefix = "€",
  defaultValue,
  ...props
}) => {
  const { filters, setFilter } = useFilterStore();
  const filterValues = JSON.parse(filters?.[name] ?? `[${min}, ${max}]`);

  const handleChange = (key: FilterItemKey) => (value: string) => {
    setFilter(key, `${value}`);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        {/* Minimum label */}
        <Label htmlFor={name ?? props.id} className="opacity-60">
          {labelPrefix} {filterValues[0]}
        </Label>
        {/* Maximum label */}
        <Label htmlFor={name ?? props.id} className="opacity-60">
          {labelPrefix} {filterValues[1]}
        </Label>
      </div>
      <Range
        id={name ?? props.id}
        name={name}
        value={filterValues}
        onValueChange={(value) => handleChange(name)(JSON.stringify(value))}
        {...props}
      />
    </div>
  );
};

type FilterRadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroup
> & {
  name: FilterItemKey;
};
export const FilterRadioGroup: React.FC<FilterRadioGroupProps> = ({
  name,
  defaultValue,
  ...props
}) => {
  const { filters, setFilter } = useFilterStore();

  const handleChange = (key: FilterItemKey) => (value: string) => {
    setFilter(key, value);
  };

  return (
    <RadioGroup
      name={name}
      value={filters[name] ?? defaultValue}
      onValueChange={handleChange(name)}
      {...props}
    />
  );
};

type FilterRadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupItem
> & {
  value: string;
};
export const FilterRadioGroupItem: React.FC<FilterRadioGroupItemProps> = ({
  value,
  id,
  children,
  ...props
}) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={value} id={id} {...props} />
      <Label htmlFor={id}>{children}</Label>
    </div>
  );
};

type FilterClearButtonProps = ButtonProps;
export const FilterClearButton = React.forwardRef<
  HTMLButtonElement,
  FilterClearButtonProps
>(({ className, children, ...props }, ref) => {
  const { filters, clearFilters } = useFilterStore();

  return (
    <Button
      ref={ref}
      className={cn(
        Object.keys(filters).length === 0 ? "hidden" : "flex",
        className
      )}
      onClick={clearFilters}
      {...props}
    >
      {children}
    </Button>
  );
});
