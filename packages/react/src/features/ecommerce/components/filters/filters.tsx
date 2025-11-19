import React from "react";
import styled from "styled-components";
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

const StyledFiltersForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

type FiltersFormProps = React.FormHTMLAttributes<HTMLFormElement>;
export const FiltersForm = React.forwardRef<HTMLFormElement, FiltersFormProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <StyledFiltersForm ref={ref} className={className} {...props}>
        {children}
      </StyledFiltersForm>
    );
  }
);
FiltersForm.displayName = "FiltersForm";

const StyledFilterCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

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
    <StyledFilterCheckboxContainer>
      <Checkbox
        id={name ?? props.id}
        name={name}
        checked={filters[name] === "true"}
        onCheckedChange={handleChange(name)}
        {...props}
      />
      <Label htmlFor={name ?? props.id}>{children}</Label>
    </StyledFilterCheckboxContainer>
  );
};

const StyledFilterRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const StyledFilterRangeLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFilterRangeLabel = styled(Label)`
  opacity: 0.6;
`;

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

  const rangeProps = { ...props };
  delete (rangeProps as any).labelPrefix;

  return (
    <StyledFilterRangeContainer>
      <StyledFilterRangeLabelContainer>
        <StyledFilterRangeLabel htmlFor={name ?? props.id}>
          {labelPrefix} {filterValues[0]}
        </StyledFilterRangeLabel>
        <StyledFilterRangeLabel htmlFor={name ?? props.id}>
          {labelPrefix} {filterValues[1]}
        </StyledFilterRangeLabel>
      </StyledFilterRangeLabelContainer>
      <Range
        id={name ?? props.id}
        name={name}
        value={filterValues}
        onValueChange={(value) => handleChange(name)(JSON.stringify(value))}
        {...rangeProps}
      />
    </StyledFilterRangeContainer>
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

const StyledFilterRadioGroupItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

type FilterRadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupItem
> & {
  htmlFor: FilterItemKey;
  id: string;
  value: string;
};
export const FilterRadioGroupItem: React.FC<FilterRadioGroupItemProps> = ({
  value,
  id,
  htmlFor,
  children,
  ...props
}) => {
  const { filters } = useFilterStore();

  return (
    <StyledFilterRadioGroupItemContainer>
      <RadioGroupItem
        checked={filters?.[htmlFor] === value}
        value={value}
        id={id}
        {...props}
      />
      <Label htmlFor={id}>{children}</Label>
    </StyledFilterRadioGroupItemContainer>
  );
};

const StyledFilterClearButton = styled(Button)<{ $isHidden: boolean }>`
  display: ${(props) => (props.$isHidden ? "none" : "flex")};
`;

type FilterClearButtonProps = ButtonProps;
export const FilterClearButton = React.forwardRef<
  HTMLButtonElement,
  FilterClearButtonProps
>(({ className, children, ...props }, ref) => {
  const { filters, clearFilters } = useFilterStore();
  const isHidden = Object.keys(filters).length === 0;

  return (
    <StyledFilterClearButton
      ref={ref}
      $isHidden={isHidden}
      className={className}
      onClick={clearFilters}
      {...props}
    >
      {children}
    </StyledFilterClearButton>
  );
});
FilterClearButton.displayName = "FilterClearButton";
