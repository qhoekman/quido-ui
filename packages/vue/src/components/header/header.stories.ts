import HeaderComponent from "@/components/header/header.vue";
import HeaderContentComponent from "@/components/header/header-content.vue";
import HeaderTaglineComponent from "@/components/header/header-tagline.vue";
import HeaderTitleComponent from "@/components/header/header-title.vue";
import HeaderBodyComponent from "@/components/header/header-body.vue";
import HeaderActionsComponent from "@/components/header/header-actions.vue";
import HeaderBackdropComponent from "@/components/header/header-backdrop.vue";
import HeaderBackdropImageComponent from "@/components/header/header-backdrop-image.vue";
import ButtonComponent from "@/components/button/button.vue";
import InputComponent from "@/components/input/input.vue";
import LabelComponent from "@/components/label/label.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Features/Website/Components/Header",
  component: HeaderComponent,
  render: () => ({
    components: {
      HeaderComponent,
      HeaderContentComponent,
      HeaderTaglineComponent,
      HeaderTitleComponent,
      HeaderBodyComponent,
      HeaderActionsComponent,
      HeaderBackdropComponent,
      HeaderBackdropImageComponent,
      ButtonComponent,
    },
    setup() {
      return {};
    },
    template: `
      <HeaderComponent>
        <HeaderContentComponent>
          <HeaderTaglineComponent>Tagline</HeaderTaglineComponent>
          <HeaderTitleComponent>Short heading goes here</HeaderTitleComponent>
          <HeaderBodyComponent>
            Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
          </HeaderBodyComponent>
          <HeaderActionsComponent>
            <ButtonComponent>Get started</ButtonComponent>
            <ButtonComponent variant="outline">Learn more</ButtonComponent>
          </HeaderActionsComponent>
        </HeaderContentComponent>
      </HeaderComponent>
    `,
  }),
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Composition: Story = {
  render: () => ({
    components: {
      HeaderComponent,
      HeaderContentComponent,
      HeaderTaglineComponent,
      HeaderTitleComponent,
      HeaderBodyComponent,
      HeaderActionsComponent,
      HeaderBackdropComponent,
      HeaderBackdropImageComponent,
      ButtonComponent
    },
    template: `
      <HeaderBackdropComponent>
        <HeaderBackdropImageComponent src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1280&q=80" />
        <HeaderComponent style="padding-top: var(--spacing-6); padding-bottom: var(--spacing-6);">
          <HeaderContentComponent style="text-align: center;">
            <HeaderTaglineComponent style="color: var(--color-muted-fg);">Now in public beta</HeaderTaglineComponent>
            <HeaderTitleComponent style="color: var(--color-white);">Introducing Pulse Analytics</HeaderTitleComponent>
            <HeaderBodyComponent style="color: var(--color-muted-fg);">
              Real-time insights for your team, wherever you work. Track performance, spot trends, and ship with confidence.
            </HeaderBodyComponent>
            <HeaderActionsComponent style="margin-left: auto; margin-right: auto;">
              <ButtonComponent>Start free trial</ButtonComponent>
              <ButtonComponent variant="outline" style="color: var(--color-white);">View pricing</ButtonComponent>
            </HeaderActionsComponent>
          </HeaderContentComponent>
        </HeaderComponent>
      </HeaderBackdropComponent>
    `
  })
}

export const WithCenteredContent: Story = {
  render: () => ({
    components: {
      HeaderComponent,
      HeaderContentComponent,
      HeaderTaglineComponent,
      HeaderTitleComponent,
      HeaderBodyComponent,
      HeaderActionsComponent,
      ButtonComponent
    },
    template: `
      <HeaderComponent>
        <HeaderContentComponent style="text-align: center;">
          <HeaderTaglineComponent>Tagline</HeaderTaglineComponent>
          <HeaderTitleComponent>Short heading goes here</HeaderTitleComponent>
          <HeaderBodyComponent>
            Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
          </HeaderBodyComponent>
          <HeaderActionsComponent style="margin-left: auto; margin-right: auto;">
            <ButtonComponent>Get started</ButtonComponent>
            <ButtonComponent variant="outline">Learn more</ButtonComponent>
          </HeaderActionsComponent>
        </HeaderContentComponent>
      </HeaderComponent>
    `
  })
}

export const WithLeftContent: Story = {
  render: () => ({
    components: {
      HeaderComponent,
      HeaderContentComponent,
      HeaderTaglineComponent,
      HeaderTitleComponent,
      HeaderBodyComponent,
      HeaderActionsComponent,
      ButtonComponent
    },
    template: `
      <HeaderComponent>
        <HeaderContentComponent>
          <HeaderTaglineComponent>Tagline</HeaderTaglineComponent>
          <HeaderTitleComponent>Short heading goes here</HeaderTitleComponent>
          <HeaderBodyComponent>
            Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
          </HeaderBodyComponent>
          <HeaderActionsComponent>
            <ButtonComponent>Get started</ButtonComponent>
            <ButtonComponent variant="outline">Learn more</ButtonComponent>
          </HeaderActionsComponent>
        </HeaderContentComponent>
      </HeaderComponent>
    `
  })
}

export const WithForm: Story = {
  render: () => ({
    components: {
      HeaderComponent,
      HeaderContentComponent,
      HeaderTaglineComponent,
      HeaderTitleComponent,
      HeaderBodyComponent,
      HeaderActionsComponent,
      ButtonComponent,
      InputComponent,
      LabelComponent
    },
    template: `
      <HeaderComponent>
        <HeaderContentComponent>
          <HeaderTaglineComponent>Tagline</HeaderTaglineComponent>
          <HeaderTitleComponent>Short heading goes here</HeaderTitleComponent>
          <HeaderBodyComponent>
            Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
          </HeaderBodyComponent>
          <HeaderActionsComponent style="flex-direction: column; gap: 0;">
            <div style="display: flex; align-items: flex-start; gap: var(--spacing-4);">
              <LabelComponent for="email-address" class="sr-only">Email address</LabelComponent>
              <InputComponent id="email-address" name="email" type="email" autocomplete="email" required placeholder="Enter your email" />
              <ButtonComponent type="submit">Subscribe</ButtonComponent>
            </div>
            <p style="margin-top: var(--spacing-4); font-size: var(--font-size-sm); color: var(--color-muted-fg);">
              By clicking Subscribe you're confirming that you agree with our
              <a href="#" style="text-decoration: underline;">Terms and Conditions</a>
            </p>
          </HeaderActionsComponent>
        </HeaderContentComponent>
      </HeaderComponent>
    `
  })
}

export const WithBackdrop: Story = {
  render: () => ({
    components: {
      HeaderComponent,
      HeaderContentComponent,
      HeaderTaglineComponent,
      HeaderTitleComponent,
      HeaderBodyComponent,
      HeaderActionsComponent,
      HeaderBackdropComponent,
      HeaderBackdropImageComponent,
      ButtonComponent
    },
    template: `
      <HeaderBackdropComponent>
        <HeaderBackdropImageComponent src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80" />
        <HeaderComponent style="padding-top: var(--spacing-6); padding-bottom: var(--spacing-6);">
          <HeaderContentComponent style="text-align: center;">
            <HeaderTaglineComponent style="color: var(--color-muted-fg);">Tagline</HeaderTaglineComponent>
            <HeaderTitleComponent style="color: var(--color-white);">Short heading goes here</HeaderTitleComponent>
            <HeaderBodyComponent style="color: var(--color-muted-fg);">
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeaderBodyComponent>
            <HeaderActionsComponent style="margin-left: auto;">
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline" style="color: var(--color-white);">Learn more</ButtonComponent>
            </HeaderActionsComponent>
          </HeaderContentComponent>
        </HeaderComponent>
      </HeaderBackdropComponent>
    `
  })
}

export const WithHorizontalContent: Story = {
  render: () => ({
    components: {
      HeaderComponent,
      HeaderContentComponent,
      HeaderTitleComponent,
      HeaderBodyComponent,
      HeaderBackdropComponent,
      HeaderBackdropImageComponent
    },
    template: `
      <HeaderBackdropComponent>
        <HeaderBackdropImageComponent src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80" />
        <HeaderComponent>
          <HeaderContentComponent style="max-width: var(--columns-6xl); display: flex; flex-direction: column; padding-top: var(--spacing-24); padding-bottom: var(--spacing-24);">
            <HeaderTitleComponent style="color: var(--color-white);">Short heading goes here</HeaderTitleComponent>
            <HeaderBodyComponent style="color: var(--color-white);">
              Pulse gives your team real-time visibility into performance, usage, and growth — all in one dashboard built for fast-moving companies.
            </HeaderBodyComponent>
          </HeaderContentComponent>
        </HeaderComponent>
      </HeaderBackdropComponent>
    `
  })
}
