import {
  Navbar,
  NavbarBack,
  NavbarContent,
  NavbarLink,
  NavbarSubtitle,
  NavbarTitle,
} from "@/features/mobile/components/navbar/navbar";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Mobile/Components/Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

export const Default: StoryFn = (args) => (
  <Navbar {...args}>
    <NavbarContent>
      <NavbarBack href="#" />
      <NavbarTitle>
        Navbar
        <NavbarSubtitle>Subtitle</NavbarSubtitle>
      </NavbarTitle>
      <NavbarLink href="#">Link</NavbarLink>
    </NavbarContent>
  </Navbar>
);

Default.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};
