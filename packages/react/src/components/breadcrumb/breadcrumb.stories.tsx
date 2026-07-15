import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/breadcrumb/breadcrumb";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Components/Data Display/Breadcrumb",
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export const Default: StoryObj<typeof Breadcrumb> = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/library">Library</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const WithCustomSeparator: StoryObj<typeof Breadcrumb> = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbSeparator>//</BreadcrumbSeparator>
      <BreadcrumbItem href="/library">Library</BreadcrumbItem>
    </Breadcrumb>
  ),
};
