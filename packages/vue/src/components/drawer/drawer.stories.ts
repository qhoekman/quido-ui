import DrawerComponent from "@/components/drawer/drawer.vue";
import DrawerOverlayComponent from "@/components/drawer/drawer-overlay.vue";
import DrawerContentComponent from "@/components/drawer/drawer-content.vue";
import ButtonComponent from "@/components/button/button.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref, watch } from "vue";
import { Menu } from "lucide-vue-next";

const meta = {
  title: "Components/Overlay/Drawer",
  component: DrawerComponent,
  argTypes: {
    variant: {
      control: "select",
      options: ["side", "over", "push"],
    },
    position: {
      control: "select",
      options: ["left", "right"],
    },
    hasBackdrop: {
      control: "select",
      options: [true, false, "auto"],
    },
    defaultOpened: {
      control: "boolean",
    },
  },
  args: {
    variant: "side",
    position: "left",
    hasBackdrop: "auto",
    defaultOpened: false,
  },
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => ({
    components: {
      DrawerComponent,
      DrawerOverlayComponent,
      DrawerContentComponent,
      ButtonComponent,
      Menu,
    },
    setup() {
      const open = ref(args.defaultOpened ?? false);

      watch(
        () => args.defaultOpened,
        (newValue) => {
          open.value = newValue ?? false;
        }
      );

      return { args, open };
    },
    template: `
      <DrawerComponent
        v-model:opened="open"
        :variant="args.variant"
        :position="args.position"
        :has-backdrop="args.hasBackdrop"
      >
        <template #overlay>
          <div style="padding: var(--spacing-4); display: flex; justify-content: flex-end;">
            <ButtonComponent variant="ghost" size="sm" @click="open = false">
              ✕
            </ButtonComponent>
          </div>
        </template>
        <DrawerContentComponent>
          <ButtonComponent :full-width="true" @click="open = true">
            <Menu :size="16" />
          </ButtonComponent>
        </DrawerContentComponent>
      </DrawerComponent>
    `,
  }),
} satisfies Meta<typeof DrawerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
