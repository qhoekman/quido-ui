import RadioCardComponent from "@/components/radio-card/radio-card.vue";
import RadioCardItemComponent from "@/components/radio-card/radio-card-item.vue";
import RadioCardItemLabelComponent from "@/components/radio-card/radio-card-item-label.vue";
import RadioCardItemDescriptionComponent from "@/components/radio-card/radio-card-item-description.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref, watch } from "vue";

const meta = {
  title: "Components/Form/Radio Card",
  component: RadioCardComponent,
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
    defaultValue: "sm",
    disabled: false,
    required: false,
    orientation: "horizontal",
  },
  render: (args) => ({
    components: {
      RadioCardComponent,
      RadioCardItemComponent,
      RadioCardItemLabelComponent,
      RadioCardItemDescriptionComponent,
    },
    setup() {
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      const value = ref(args.defaultValue ?? args.value ?? "sm");

      watch(
        () => args.defaultValue,
        (newValue) => {
          if (newValue !== undefined) {
            value.value = newValue;
          }
        }
      );

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

      return { args, sizes, value, handleValueChange };
    },
    template: `
      <div style="max-width: var(--spacing-md); width: 100%;">
        <RadioCardComponent
          v-model:value="value"
          :default-value="args.defaultValue"
          :disabled="args.disabled"
          :required="args.required"
          :name="args.name"
          :orientation="args.orientation"
          style="grid-template-columns: repeat(6, 1fr);"
        >
          <RadioCardItemComponent
            v-for="size in sizes"
            :key="size"
            :value="size"
            :id="'opt-' + size"
            :disabled="size === 'xs'"
          >
            <RadioCardItemLabelComponent :html-for="'opt-' + size">
              {{ size.toUpperCase() }}
            </RadioCardItemLabelComponent>
          </RadioCardItemComponent>
        </RadioCardComponent>
      </div>
    `,
  }),
} satisfies Meta<typeof RadioCardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  render: (args) => ({
    components: {
      RadioCardComponent,
      RadioCardItemComponent,
      RadioCardItemLabelComponent,
      RadioCardItemDescriptionComponent,
    },
    setup() {
      const deliveryMethods = ["Standard", "Next Day"];
      const value = ref(args.defaultValue ?? args.value ?? "Standard");

      watch(
        () => args.defaultValue,
        (newValue) => {
          if (newValue !== undefined) {
            value.value = newValue;
          }
        }
      );

      watch(
        () => args.value,
        (newValue) => {
          if (newValue !== undefined) {
            value.value = newValue;
          }
        }
      );

      return { args, deliveryMethods, value };
    },
    template: `
      <div style="max-width: var(--spacing-48);">
        <RadioCardComponent
          v-model:value="value"
          :default-value="args.defaultValue"
          :disabled="args.disabled"
          :required="args.required"
          :name="args.name"
          :orientation="args.orientation"
          style="grid-template-columns: repeat(2, 1fr);"
        >
          <RadioCardItemComponent
            v-for="method in deliveryMethods"
            :key="method"
            :value="method"
            :id="'opt-' + method"
            :disabled="method === 'Standard'"
            style="align-items: flex-start;"
          >
            <RadioCardItemLabelComponent :html-for="'opt-' + method">
              {{ method.toUpperCase() }}
            </RadioCardItemLabelComponent>
            <RadioCardItemDescriptionComponent>
              Get it in 3-5 business days
            </RadioCardItemDescriptionComponent>
          </RadioCardItemComponent>
        </RadioCardComponent>
      </div>
    `,
  }),
};
