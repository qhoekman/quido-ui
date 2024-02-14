import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/avatar/avatar";
import { HStack } from "@/components/hstack/hstack";
import { ScrollArea } from "@/components/scroll-area/scroll-area";
import {
  Sidebar,
  SidebarBrand,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupExpand,
  SidebarGroupHeader,
  SidebarGroupItems,
  SidebarGroupTrigger,
  SidebarItem,
  SidebarItemBadge,
  SidebarSection,
} from "@/features/application/components/sidebar/sidebar";
import type { Meta, StoryFn } from "@storybook/react";
import { BoxesIcon, Contact2Icon, PlaySquareIcon, Radio } from "lucide-react";
export default {
  title: "Features/Application/Components/Sidebar",
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export const Default: StoryFn<typeof Sidebar> = (args) => (
  <Sidebar className="max-w-64" {...args}>
    <SidebarBrand>
      <img
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo"
        alt="Logo"
        className="w-8 h-8"
      />
      <span className="ml-2 font-bold text-lg">Musica</span>
    </SidebarBrand>
    <SidebarGroupHeader>Discover</SidebarGroupHeader>
    <SidebarSection>
      <SidebarGroup>
        <SidebarItem>
          <PlaySquareIcon size={24} />
          <span>Listen now</span>
        </SidebarItem>
        <SidebarItem>
          <BoxesIcon size={24} />
          <span>Browse</span>
          <SidebarItemBadge>99+</SidebarItemBadge>
        </SidebarItem>
        <SidebarItem>
          <Radio size={24} />
          <span>Radio</span>
        </SidebarItem>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupTrigger>
          <Contact2Icon size={24} />
          <span>My Library</span>
          <SidebarGroupExpand />
        </SidebarGroupTrigger>
        <SidebarGroupItems>
          <SidebarItem>
            <PlaySquareIcon size={24} />
            <span>Recently played</span>
          </SidebarItem>
          <SidebarItem>
            <BoxesIcon size={24} />
            <span>Albums</span>
          </SidebarItem>
          <SidebarItem>
            <Radio size={24} />
            <span>Artists</span>
          </SidebarItem>
        </SidebarGroupItems>
      </SidebarGroup>
    </SidebarSection>
    <SidebarGroupHeader>Genres</SidebarGroupHeader>
    <ScrollArea className="h-48">
      <SidebarGroup>
        <SidebarItem>
          <PlaySquareIcon size={24} />
          <span>Pop</span>
        </SidebarItem>
        <SidebarItem>
          <PlaySquareIcon size={24} />
          <span>Rock</span>
        </SidebarItem>
        <SidebarItem>
          <PlaySquareIcon size={24} />
          <span>Electronic</span>
        </SidebarItem>
        <SidebarItem>
          <PlaySquareIcon size={24} />
          <span>Classical</span>
        </SidebarItem>
        <SidebarItem>
          <PlaySquareIcon size={24} />
          <span>Jazz</span>
        </SidebarItem>
        <SidebarItem>
          <PlaySquareIcon size={24} />
          <span>Blues</span>
        </SidebarItem>
        <SidebarItem>
          <PlaySquareIcon size={24} />
          <span>Country</span>
        </SidebarItem>
      </SidebarGroup>
    </ScrollArea>
    <SidebarFooter>
      <HStack className="items-center">
        <Avatar>
          <AvatarImage src="/icon.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span>John Doe</span>
      </HStack>
    </SidebarFooter>
  </Sidebar>
);
