import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/breadcrumb/breadcrumb";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Data Display/Breadcrumb",
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export const Default: StoryFn<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem href="#">Home</BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem href="/library">Library</BreadcrumbItem>
  </Breadcrumb>
);

export const WithCustomSeparator: StoryFn<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem href="#">Home</BreadcrumbItem>
    <BreadcrumbSeparator>//</BreadcrumbSeparator>
    <BreadcrumbItem href="/library">Library</BreadcrumbItem>
  </Breadcrumb>
);
