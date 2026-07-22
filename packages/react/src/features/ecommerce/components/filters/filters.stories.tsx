import {
  Sidebar,
  SidebarBrand,
  SidebarGroupHeader,
  SidebarSection,
} from "@/features/application/components/sidebar/sidebar";
import {
  FilterCheckbox,
  FilterClearButton,
  FilterRadioGroup,
  FilterRadioGroupItem,
  FilterRange,
  FiltersForm,
} from "@/features/ecommerce/components/filters/filters";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Filters",
  component: FiltersForm,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    labelPrefix: {
      control: "text",
      description: "Prefix for FilterRange labels (e.g., '€', '$')",
    },
    min: {
      control: "number",
      description: "Minimum value for FilterRange",
    },
    max: {
      control: "number",
      description: "Maximum value for FilterRange",
    },
    step: {
      control: "number",
      description: "Step value for FilterRange",
    },
    disabled: {
      control: "boolean",
      description: "Disable state for filter components",
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      description: "Variant for FilterClearButton",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Size for FilterClearButton",
    },
  },
  args: {
    labelPrefix: "€",
    min: 0,
    max: 100,
    step: 10,
    disabled: false,
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof FiltersForm>;

const filters = {
  category: ["shoes", "clothes", "accessories", "electronics"],
  brand: ["nike", "adidas", "puma", "reebok"],
  size: ["s", "m", "l", "xl"],
};

export const Default: StoryObj<typeof FiltersForm> = {
  render: (args) => (
    <Sidebar style={{ maxWidth: "var(--spacing-64)" }}>
      <SidebarBrand style={{ height: "var(--spacing-4)" }} />
      <SidebarGroupHeader>Categories</SidebarGroupHeader>
      <SidebarSection
        style={{
          paddingLeft: "var(--spacing-4)",
          paddingRight: "var(--spacing-4)",
        }}
      >
        <FiltersForm {...args}>
          {filters.category.map((category) => (
            <FilterCheckbox
              key={`category.${category}`}
              name={`category.${category}`}
              disabled={args.disabled}
            >
              {category}
            </FilterCheckbox>
          ))}
        </FiltersForm>
      </SidebarSection>
      <SidebarGroupHeader>Price</SidebarGroupHeader>
      <SidebarSection
        style={{
          paddingLeft: "var(--spacing-4)",
          paddingRight: "var(--spacing-4)",
        }}
      >
        <FilterRange
          key={`price`}
          name={`price`}
          min={args.min}
          max={args.max}
          step={args.step}
          labelPrefix={args.labelPrefix}
          disabled={args.disabled}
        >
          Price
        </FilterRange>
      </SidebarSection>
      <SidebarGroupHeader>Brand</SidebarGroupHeader>
      <SidebarSection
        style={{
          paddingLeft: "var(--spacing-4)",
          paddingRight: "var(--spacing-4)",
        }}
      >
        <FiltersForm {...args}>
          <FilterRadioGroup name="brand">
            {filters.brand.map((brand) => (
              <FilterRadioGroupItem
                key={`brand.${brand}`}
                id={`brand.${brand}`}
                htmlFor="brand"
                value={brand}
                disabled={args.disabled}
              >
                {brand}
              </FilterRadioGroupItem>
            ))}
          </FilterRadioGroup>
        </FiltersForm>
      </SidebarSection>
      <FilterClearButton
        style={{
          width: "100%",
          marginLeft: "var(--spacing-4)",
          marginRight: "var(--spacing-4)",
        }}
        variant={args.variant}
        size={args.size}
        disabled={args.disabled}
      >
        Clear all filters
      </FilterClearButton>
    </Sidebar>
  ),
};

export const Composition: StoryObj<typeof FiltersForm> = {
  render: () => (
    <div
      style={{
        maxWidth: "var(--spacing-64)",
        padding: "var(--spacing-4)",
        border: "var(--border-width-default) solid var(--color-border)",
        borderRadius: "var(--border-radius-lg)",
      }}
    >
      <h4 style={{ margin: "0 0 var(--spacing-4)" }}>Refine results</h4>
      <h5 style={{ margin: "0 0 var(--spacing-2)", fontSize: "var(--font-size-sm)" }}>
        Category
      </h5>
      <FiltersForm>
        {filters.category.map((category) => (
          <FilterCheckbox key={`category.${category}`} name={`category.${category}`}>
            {category}
          </FilterCheckbox>
        ))}
      </FiltersForm>
      <h5
        style={{
          margin: "var(--spacing-4) 0 var(--spacing-2)",
          fontSize: "var(--font-size-sm)",
        }}
      >
        Price
      </h5>
      <FilterRange name="price" min={0} max={200} step={10} labelPrefix="$">
        Price
      </FilterRange>
      <FilterClearButton style={{ width: "100%", marginTop: "var(--spacing-4)" }}>
        Clear all filters
      </FilterClearButton>
    </div>
  ),
};
