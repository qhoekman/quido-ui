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
            <LabelComponent for="option-one">Option One</LabelComponent>
          </div>
          <div style="display: flex; align-items: center; gap: var(--spacing-2);">
            <RadioGroupItemComponent value="option-two" id="option-two" />
            <LabelComponent for="option-two">Option Two</LabelComponent>
          </div>
        </RadioGroupComponent>
      </form>
    `,
  }),
} satisfies Meta<typeof RadioGroupComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
