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
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Ecommerce/Components/Filters",
  component: FiltersForm,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof FiltersForm>;

const filters = {
  category: ["shoes", "clothes", "accessories", "electronics"],
  brand: ["nike", "adidas", "puma", "reebok"],
  size: ["s", "m", "l", "xl"],
};

export const Default: StoryFn<typeof FiltersForm> = (args) => (
  <Sidebar className="max-w-64">
    <SidebarBrand className="h-4" />
    <SidebarGroupHeader>Categories</SidebarGroupHeader>
    <SidebarSection className="px-4">
      <FiltersForm {...args}>
        {filters.category.map((category) => (
          <FilterCheckbox
            key={`category.${category}`}
            name={`category.${category}`}
          >
            {category}
          </FilterCheckbox>
        ))}
      </FiltersForm>
    </SidebarSection>
    <SidebarGroupHeader>Price</SidebarGroupHeader>
    <SidebarSection className="px-4">
      <FilterRange key={`price`} name={`price`} max={100} step={10}>
        Price
      </FilterRange>
    </SidebarSection>
    <SidebarGroupHeader>Brand</SidebarGroupHeader>
    <SidebarSection className="px-4">
      <FiltersForm {...args}>
        <FilterRadioGroup name="brand">
          {filters.brand.map((brand) => (
            <FilterRadioGroupItem key={`brand.${brand}`} value={brand}>
              {brand}
            </FilterRadioGroupItem>
          ))}
        </FilterRadioGroup>
      </FiltersForm>
    </SidebarSection>
    <FilterClearButton className="w-full mx-4">
      Clear all filters
    </FilterClearButton>
  </Sidebar>
);
