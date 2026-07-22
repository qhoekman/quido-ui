import RadioGroupComponent from "@/components/radio-group/radio-group.vue";
import RadioGroupItemComponent from "@/components/radio-group/radio-group-item.vue";
import LabelComponent from "@/components/label/label.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref, watch } from "vue";

const meta = {
  title: "Components/Data Entry/Radio Group",
  component: RadioGroupComponent,
  argTypes: {
    defaultValue: {
      control: "text",
      description:
        "The value of the radio item that should be checked when initially rendered",
    },
    value: {
      control: "text",
      description: "The controlled value of the radio group",
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the radio group",
    },
    required: {
      control: "boolean",
      description:
        "When true, indicates that the user must select a value before submitting",
    },
    name: {
      control: "text",
      description:
        "The name of the group, submitted as a name/value pair with form data",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the component",
    },
  },
  args: {
    defaultValue: "option-one",
    disabled: false,
    required: false,
    orientation: "vertical",
  },
  render: (args) => ({
    components: {
      RadioGroupComponent,
      RadioGroupItemComponent,
      LabelComponent,
    },
    setup() {
      const value = ref(args.value ?? args.defaultValue ?? "");

      watch(
        () => args.value,
        (newValue) => {
          if (newValue !== undefined) {
            value.value = newValue;
          }
        }
      );

      const handleValueChange = (newValue: string) => {
        value.value = newValue;
      };

      return { args, value, handleValueChange };
    },
    template: `
      <form>
        <RadioGroupComponent
          :default-value="args.defaultValue"
          :value="value"
          :disabled="args.disabled"
          :required="args.required"
          :name="args.name"
          :orientation="args.orientation"
          @update:value="handleValueChange"
        >
          <div style="display: flex; align-items: center; gap: var(--spacing-2);">
            <RadioGroupItemComponent value="option-one" id="option-one" />
            <LabelComponent for="option-one">Credit card</LabelComponent>
          </div>
          <div style="display: flex; align-items: center; gap: var(--spacing-2);">
            <RadioGroupItemComponent value="option-two" id="option-two" />
            <LabelComponent for="option-two">PayPal</LabelComponent>
          </div>
        </RadioGroupComponent>
      </form>
    `,
  }),
} satisfies Meta<typeof RadioGroupComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Composition: Story = {
  render: () => ({
    components: { RadioGroupComponent, RadioGroupItemComponent, LabelComponent },
    setup() {
      const value = ref("weekly");
      const handleValueChange = (newValue: string) => {
        value.value = newValue;
      };
      return { value, handleValueChange };
    },
    template: `
      <div style="max-width: 18rem;">
        <h3 style="margin: 0 0 var(--spacing-1);">Notification Frequency</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg); font-size: var(--font-size-sm);">How often should we email you a digest?</p>
        <RadioGroupComponent :value="value" @update:value="handleValueChange">
          <div style="display: flex; align-items: center; gap: var(--spacing-2);">
            <RadioGroupItemComponent value="daily" id="freq-daily" />
            <LabelComponent for="freq-daily">Daily</LabelComponent>
          </div>
          <div style="display: flex; align-items: center; gap: var(--spacing-2);">
            <RadioGroupItemComponent value="weekly" id="freq-weekly" />
            <LabelComponent for="freq-weekly">Weekly</LabelComponent>
          </div>
          <div style="display: flex; align-items: center; gap: var(--spacing-2);">
            <RadioGroupItemComponent value="never" id="freq-never" />
            <LabelComponent for="freq-never">Never</LabelComponent>
          </div>
        </RadioGroupComponent>
      </div>
    `,
  }),
};
