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

export const Composition: StoryObj<typeof Breadcrumb> = {
  render: () => (
    <div>
      <Breadcrumb style={{ marginBottom: "var(--spacing-2)" }}>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem href="#">Website Redesign</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem href="/projects/website-redesign/tasks">Tasks</BreadcrumbItem>
      </Breadcrumb>
      <h3 style={{ margin: 0 }}>Tasks</h3>
    </div>
  ),
};
