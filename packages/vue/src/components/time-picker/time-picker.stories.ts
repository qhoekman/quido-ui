import TimePickerComponent from "@/components/time-picker/time-picker.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Time Picker",
  component: TimePickerComponent,
  argTypes: {
    selectedHour: {
      control: "text",
    },
    selectedMinute: {
      control: "text",
    },
    open: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    selectedHour: "12",
    selectedMinute: "00",
    disabled: false,
  },
  render: (args) => ({
    components: { TimePickerComponent },
    setup() {
      const selectedHour = ref(args.selectedHour || "12");
      const selectedMinute = ref(args.selectedMinute || "00");
      const open = ref(args.open);

      const handleValueChange = (time: string) => {
        const [hour, minute] = time.split(":");
        selectedHour.value = hour;
        selectedMinute.value = minute;
      };

      const handleOpenChange = (value: boolean) => {
        open.value = value;
      };

      return {
        args: {
          ...args,
          selectedHour: selectedHour.value,
          selectedMinute: selectedMinute.value,
          open: open.value,
        },
        handleValueChange,
        handleOpenChange,
      };
    },
    template:
      '<TimePickerComponent v-bind="args" @valueChange="handleValueChange" @update:open="handleOpenChange" />',
  }),
} satisfies Meta<typeof TimePickerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Composition: Story = {
  render: () => ({
    components: { TimePickerComponent },
    setup() {
      const selectedHour = ref("09");
      const selectedMinute = ref("30");

      const handleValueChange = (time: string) => {
        const [hour, minute] = time.split(":");
        selectedHour.value = hour;
        selectedMinute.value = minute;
      };

      return { selectedHour, selectedMinute, handleValueChange };
    },
    template: `
      <div style="max-width: 280px;">
        <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Meeting time</label>
        <TimePickerComponent :selected-hour="selectedHour" :selected-minute="selectedMinute" @valueChange="handleValueChange" />
        <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Shown in your local time zone.</p>
      </div>
    `,
  }),
};
