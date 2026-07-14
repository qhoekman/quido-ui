import TimeSelectComponent from "@/components/time-select/time-select.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta = {
  title: "Components/Data Entry/Time Select",
  component: TimeSelectComponent,
  argTypes: {
    selectedHour: {
      control: "text",
    },
    selectedMinute: {
      control: "text",
    },
    hours: {
      control: "text",
    },
    minutes: {
      control: "text",
    },
  },
  args: {
    selectedHour: "12",
    selectedMinute: "08",
  },
  render: (args) => ({
    components: { TimeSelectComponent },
    setup() {
      const selectedHour = ref(args.selectedHour || "12");
      const selectedMinute = ref(args.selectedMinute || "08");

      const handleValueChange = (time: string) => {
        const [hour, minute] = time.split(":");
        selectedHour.value = hour;
        selectedMinute.value = minute;
      };

      return {
        args: {
          ...args,
          selectedHour: selectedHour.value,
          selectedMinute: selectedMinute.value,
        },
        handleValueChange,
      };
    },
    template:
      '<TimeSelectComponent v-bind="args" @valueChange="handleValueChange" />',
  }),
} satisfies Meta<typeof TimeSelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
