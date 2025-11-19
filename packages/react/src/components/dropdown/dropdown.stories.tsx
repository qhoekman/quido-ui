import { Button } from "@/components/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/dropdown/dropdown";
import type { Meta, StoryFn } from "@storybook/react-vite";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

export default {
  title: "Components/Overlay/Drop Down",
  component: DropdownMenu,
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the dropdown menu when it is initially rendered",
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the dropdown menu",
    },
    modal: {
      control: "boolean",
      description: "Whether the dropdown menu is modal",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "The reading direction of the dropdown menu",
    },
  },
  args: {
    defaultOpen: false,
  },
} satisfies Meta<typeof DropdownMenu>;

export const Default: StoryFn<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args}>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent style={{ width: "var(--spacing-56)" }}>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User
            style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
          />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard
            style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
          />
          <span>Billing</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings
            style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
          />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Keyboard
            style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
          />
          <span>Keyboard shortcuts</span>
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Users
            style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
          />
          <span>Team</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus
              style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
            />
            <span>Invite users</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail
                  style={{
                    width: "var(--spacing-4)",
                    height: "var(--spacing-4)",
                  }}
                />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare
                  style={{
                    width: "var(--spacing-4)",
                    height: "var(--spacing-4)",
                  }}
                />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle
                  style={{
                    width: "var(--spacing-4)",
                    height: "var(--spacing-4)",
                  }}
                />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <Plus
            style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
          />
          <span>New Team</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Github
          style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
        />
        <span>GitHub</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LifeBuoy
          style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
        />
        <span>Support</span>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <Cloud
          style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
        />
        <span>API</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut
          style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }}
        />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
