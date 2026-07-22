import LinkComponent from "@/components/link/link.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Navigation/Link",
  component: LinkComponent,
  argTypes: {
    href: {
      control: "text",
    },
    asChild: {
      control: "boolean",
    },
  },
  args: {
    href: "https://pulse.quido.online",
    asChild: false,
  },
  render: (args) => ({
    components: { LinkComponent },
    setup() {
      return { args };
    },
    template: '<LinkComponent v-bind="args">Default Link</LinkComponent>',
  }),
} satisfies Meta<typeof LinkComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const External: Story = {
  args: {
    href: "https://pulse.quido.online",
  },
  render: () => ({
    components: { LinkComponent },
    template: `
      <LinkComponent href="https://pulse.quido.online">
        Read the docs
      </LinkComponent>
    `,
  }),
};

export const Internal: Story = {
  args: {
    href: "/about",
  },
  render: () => ({
    components: { LinkComponent },
    template: `
      <LinkComponent href="/about">
        About us
      </LinkComponent>
    `,
  }),
};

export const MultipleLinks: Story = {
  render: () => ({
    components: { LinkComponent },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <LinkComponent href="https://pulse.quido.online">
          Documentation
        </LinkComponent>
        <LinkComponent href="/about">
          About us
        </LinkComponent>
        <LinkComponent href="/contact">
          Contact support
        </LinkComponent>
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    components: { LinkComponent },
    template: `
      <p style="max-width: 32rem; font-size: var(--font-size-sm);">
        By continuing, you agree to our <LinkComponent href="/terms">Terms of Service</LinkComponent> and
        <LinkComponent href="/privacy">Privacy Policy</LinkComponent>. Need help? Visit our
        <LinkComponent href="https://pulse.quido.online">documentation</LinkComponent>.
      </p>
    `,
  }),
};
