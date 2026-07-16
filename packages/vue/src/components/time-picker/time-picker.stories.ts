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
