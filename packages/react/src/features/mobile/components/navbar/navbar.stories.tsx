import {
  Navbar,
  NavbarBack,
  NavbarContent,
  NavbarLink,
  NavbarSubtitle,
  NavbarTitle,
} from "@/features/mobile/components/navbar/navbar";
import { ViewportLayout } from "@/features/mobile/layouts/viewport/viewport";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Mobile/Components/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export const Default: StoryObj<typeof Navbar> = {
  render: (args) => (
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
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};

export const Composition: StoryObj<typeof Navbar> = {
  render: () => (
    <ViewportLayout>
      <Navbar>
        <NavbarContent>
          <NavbarBack href="#" />
          <NavbarTitle>
            Messages
            <NavbarSubtitle>3 unread</NavbarSubtitle>
          </NavbarTitle>
          <NavbarLink href="#">Edit</NavbarLink>
        </NavbarContent>
      </Navbar>
    </ViewportLayout>
  ),

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
