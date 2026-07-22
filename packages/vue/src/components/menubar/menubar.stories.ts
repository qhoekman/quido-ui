import MenubarComponent from "./menubar.vue";
import MenubarTriggerComponent from "./menubar-trigger.vue";
import MenubarMenuComponent from "./menubar-menu.vue";
import MenubarGroupComponent from "./menubar-group.vue";
import MenubarItemComponent from "./menubar-item.vue";
import MenubarSeparatorComponent from "./menubar-separator.vue";
import { MenubarMenu } from "reka-ui";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Navigation/Menubar",
  component: MenubarComponent,
  argTypes: {},
  args: {},
  render: (args: any) => ({
    components: {
      MenubarComponent,
      MenubarTriggerComponent,
      MenubarMenuComponent,
      MenubarGroupComponent,
      MenubarItemComponent,
      MenubarSeparatorComponent,
      MenubarMenu,
    },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 2rem;">
        <MenubarComponent>
          <MenubarMenu>
            <MenubarTriggerComponent>File</MenubarTriggerComponent>
            <MenubarMenuComponent>
              <MenubarGroupComponent>
                <MenubarItemComponent>New</MenubarItemComponent>
                <MenubarItemComponent>Open...</MenubarItemComponent>
                <MenubarItemComponent>Save</MenubarItemComponent>
                <MenubarItemComponent>Save As...</MenubarItemComponent>
              </MenubarGroupComponent>
              <MenubarSeparatorComponent />
              <MenubarGroupComponent>
                <MenubarItemComponent>Close window</MenubarItemComponent>
                <MenubarItemComponent>Close</MenubarItemComponent>
                <MenubarItemComponent>Quit</MenubarItemComponent>
              </MenubarGroupComponent>
            </MenubarMenuComponent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTriggerComponent>Edit</MenubarTriggerComponent>
            <MenubarMenuComponent>
              <MenubarGroupComponent>
                <MenubarItemComponent>Undo</MenubarItemComponent>
                <MenubarItemComponent>Redo</MenubarItemComponent>
              </MenubarGroupComponent>
              <MenubarSeparatorComponent />
              <MenubarGroupComponent>
                <MenubarItemComponent>Cut</MenubarItemComponent>
                <MenubarItemComponent>Copy</MenubarItemComponent>
                <MenubarItemComponent>Paste</MenubarItemComponent>
              </MenubarGroupComponent>
            </MenubarMenuComponent>
          </MenubarMenu>
        </MenubarComponent>
      </div>
    `,
  }),
} satisfies Meta<typeof MenubarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Composition: Story = {
  render: () => ({
    components: {
      MenubarComponent,
      MenubarTriggerComponent,
      MenubarMenuComponent,
      MenubarGroupComponent,
      MenubarItemComponent,
      MenubarSeparatorComponent,
      MenubarMenu
    },
    template: `
      <div style="width: 500px; box-sizing: border-box; border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <MenubarComponent style="border-bottom: var(--border-width-default) solid var(--color-border);">
          <MenubarMenu>
            <MenubarTriggerComponent>File</MenubarTriggerComponent>
            <MenubarMenuComponent>
              <MenubarGroupComponent>
                <MenubarItemComponent>New document</MenubarItemComponent>
                <MenubarItemComponent>Open...</MenubarItemComponent>
                <MenubarItemComponent>Save</MenubarItemComponent>
              </MenubarGroupComponent>
            </MenubarMenuComponent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTriggerComponent>View</MenubarTriggerComponent>
            <MenubarMenuComponent>
              <MenubarGroupComponent>
                <MenubarItemComponent>Zoom in</MenubarItemComponent>
                <MenubarItemComponent>Zoom out</MenubarItemComponent>
                <MenubarItemComponent>Reset zoom</MenubarItemComponent>
              </MenubarGroupComponent>
            </MenubarMenuComponent>
          </MenubarMenu>
        </MenubarComponent>
        <div style="padding: var(--spacing-6); color: var(--color-muted-fg); font-size: var(--font-size-sm);">
          Document content goes here.
        </div>
      </div>
    `
  })
}
