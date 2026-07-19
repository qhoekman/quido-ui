import React from "react";
import styled, { css } from "styled-components";
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

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const filtersFormStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const StyledFiltersForm = styled.form`
  ${filtersFormStyles}
`;

type FiltersFormProps = React.FormHTMLAttributes<HTMLFormElement>;
export const FiltersForm = React.forwardRef<HTMLFormElement, FiltersFormProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <StyledFiltersForm
        ref={ref}
        data-testid="filters__form"
        className={cx("q-filters-form", className)}
        {...props}
      >
        {children}
      </StyledFiltersForm>
    );
  }
);
FiltersForm.displayName = "FiltersForm";

const filterCheckboxContainerStyles = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

const StyledFilterCheckboxContainer = styled.div`
  ${filterCheckboxContainerStyles}
`;

const filterLabelStyles = css`
  cursor: pointer;
  user-select: none;
`;

const StyledFilterCheckboxLabel = styled(Label)`
  ${filterLabelStyles}
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
    <StyledFilterCheckboxContainer
      data-testid={`filters__checkbox-${name}`}
      className="q-filter-checkbox-container"
    >
      <Checkbox
        id={name ?? props.id}
        name={name}
        checked={filters[name] === "true"}
        onCheckedChange={handleChange(name)}
        {...props}
      />
      <StyledFilterCheckboxLabel
        htmlFor={name ?? props.id}
        className="q-filter-checkbox-label"
      >
        {children}
      </StyledFilterCheckboxLabel>
    </StyledFilterCheckboxContainer>
  );
};

const filterRangeContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const StyledFilterRangeContainer = styled.div`
  ${filterRangeContainerStyles}
`;

const filterRangeLabelContainerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFilterRangeLabelContainer = styled.div`
  ${filterRangeLabelContainerStyles}
`;

const filterRangeLabelStyles = css`
  font-size: var(--font-size-sm);
  opacity: 0.6;
  cursor: default;
`;

const StyledFilterRangeLabel = styled(Label)`
  ${filterRangeLabelStyles}
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
    <StyledFilterRangeContainer
      data-testid={`filters__range-${name}`}
      className="q-filter-range-container"
    >
      <StyledFilterRangeLabelContainer className="q-filter-range-label-container">
        <StyledFilterRangeLabel
          htmlFor={name ?? props.id}
          className="q-filter-range-label"
        >
          {labelPrefix} {filterValues[0]}
        </StyledFilterRangeLabel>
        <StyledFilterRangeLabel
          htmlFor={name ?? props.id}
          className="q-filter-range-label"
        >
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
      data-testid={`filters__radio-group-${name}`}
      {...props}
    />
  );
};

const filterRadioGroupItemContainerStyles = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

const StyledFilterRadioGroupItemContainer = styled.div`
  ${filterRadioGroupItemContainerStyles}
`;

const StyledFilterRadioGroupItemLabel = styled(Label)`
  ${filterLabelStyles}
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
    <StyledFilterRadioGroupItemContainer
      data-testid={`filters__radio-group-item-${value}`}
      className="q-filter-radio-group-item-container"
    >
      <RadioGroupItem
        checked={filters?.[htmlFor] === value}
        value={value}
        id={id}
        {...props}
      />
      <StyledFilterRadioGroupItemLabel
        htmlFor={id}
        className="q-filter-radio-group-item-label"
      >
        {children}
      </StyledFilterRadioGroupItemLabel>
    </StyledFilterRadioGroupItemContainer>
  );
};

const filterClearButtonStyles = css<{ $isHidden: boolean }>`
  display: ${(props) => (props.$isHidden ? "none" : "flex")};
`;

const StyledFilterClearButton = styled(Button)<{ $isHidden: boolean }>`
  ${filterClearButtonStyles}
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
      data-testid="filters__clear-button"
      className={cx("q-filter-clear-button", className)}
      onClick={clearFilters}
      {...props}
    >
      {children}
    </StyledFilterClearButton>
  );
});
FilterClearButton.displayName = "FilterClearButton";
