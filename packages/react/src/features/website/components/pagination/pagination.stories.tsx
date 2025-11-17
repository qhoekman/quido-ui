import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/features/website/components/pagination/pagination";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Website/Components/Pagination",
  component: Pagination,
  argTypes: {
    linkSize: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Size of the pagination links",
    },
    isActive: {
      control: "boolean",
      description: "Whether the active pagination link is highlighted",
    },
  },
  args: {
    linkSize: "icon",
    isActive: true,
  },
} satisfies Meta<typeof Pagination>;

export const Default: StoryFn<typeof Pagination> = ({ linkSize, isActive, ...args }) => (
  <Pagination {...args}>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" size={linkSize}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive={isActive} size={linkSize}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" size={linkSize}>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);
