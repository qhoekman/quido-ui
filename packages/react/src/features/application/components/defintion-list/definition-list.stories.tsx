import {
  DefinitionDescription,
  DefinitionList,
  DefinitionTerm,
  DefintionListItem,
} from "@/features/application/components/defintion-list/definition-list";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Application/Components/Definition List",
  component: DefinitionList,
} satisfies Meta<typeof DefinitionList>;

export const Default: StoryObj<typeof DefinitionList> = {
  render: (args) => (
    <div style={{ maxWidth: "var(--spacing-2xl)", margin: "0 auto" }}>
      <DefinitionList {...args}>
        <DefintionListItem>
          <DefinitionTerm>Full name</DefinitionTerm>
          <DefinitionDescription>John Doe</DefinitionDescription>
        </DefintionListItem>
        <DefintionListItem>
          <DefinitionTerm>Phone number</DefinitionTerm>
          <DefinitionDescription>+1 (555) 123-4567</DefinitionDescription>
        </DefintionListItem>
        <DefintionListItem>
          <DefinitionTerm>Email address</DefinitionTerm>
          <DefinitionDescription>
            <a href="mailto:johndoe@example.com">johndoe@example.com</a>
          </DefinitionDescription>
        </DefintionListItem>
      </DefinitionList>
    </div>
  ),
};

export const Composition: StoryObj<typeof DefinitionList> = {
  render: () => (
    <div
      style={{
        maxWidth: "var(--spacing-2xl)",
        padding: "var(--spacing-4)",
        border: "var(--border-width-default) solid var(--color-border)",
        borderRadius: "var(--border-radius-lg)",
      }}
    >
      <h4 style={{ margin: "0 0 var(--spacing-4)" }}>Order #4471</h4>
      <DefinitionList>
        <DefintionListItem>
          <DefinitionTerm>Order date</DefinitionTerm>
          <DefinitionDescription>June 12, 2026</DefinitionDescription>
        </DefintionListItem>
        <DefintionListItem>
          <DefinitionTerm>Status</DefinitionTerm>
          <DefinitionDescription>Shipped</DefinitionDescription>
        </DefintionListItem>
        <DefintionListItem>
          <DefinitionTerm>Total</DefinitionTerm>
          <DefinitionDescription>$128.50</DefinitionDescription>
        </DefintionListItem>
      </DefinitionList>
    </div>
  ),
};
