import {
  Navbar,
  NavbarBack,
  NavbarContent,
  NavbarLink,
  NavbarSubtitle,
  NavbarTitle,
} from "@/features/mobile/components/navbar/navbar";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Mobile/Components/Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

export const Default: StoryFn = (args) => (
  <ViewportLayout>
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
  </ViewportLayout>
);

Default.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "mobile2",
  },
};
