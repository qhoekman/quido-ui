import {
  DefinitionDescription,
  DefinitionList,
  DefinitionTerm,
  DefintionListItem,
} from "@/features/application/components/defintion-list/definition-list";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Application/Components/Definition List",
  component: DefinitionList,
} satisfies Meta<typeof DefinitionList>;

export const Default: StoryFn<typeof DefinitionList> = (args) => (
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
);
