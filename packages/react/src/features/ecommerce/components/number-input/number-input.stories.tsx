import { NumberInput } from "@/features/ecommerce/components/number-input/number-input";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Number Input",
  component: NumberInput,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    value: {
      control: "number",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
    placeholder: {
      control: "text",
    },
  },
  args: {
    disabled: false,
    placeholder: "0",
  },
} satisfies Meta<typeof NumberInput>;

export const Default: StoryObj<typeof NumberInput> = {
  render: (args) => (
    <form>
      <NumberInput {...args} />
    </form>
  ),

  args: {
    value: 1,
  },
};

export const Composition: StoryObj<typeof NumberInput> = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "20rem",
        padding: "var(--spacing-4)",
        border: "var(--border-width-default) solid var(--color-border)",
        borderRadius: "var(--border-radius-lg)",
      }}
    >
      <div>
        <h4 style={{ margin: "0 0 var(--spacing-1)", fontSize: "var(--font-size-sm)" }}>
          Classic Tee
        </h4>
        <p style={{ margin: 0, color: "var(--color-muted-fg)", fontSize: "var(--font-size-sm)" }}>
          $28.00
        </p>
      </div>
      <form>
        <NumberInput value={2} min={1} max={10} />
      </form>
    </div>
  ),
};
