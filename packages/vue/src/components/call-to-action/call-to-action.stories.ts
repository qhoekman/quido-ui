import CallToActionComponent from "@/components/call-to-action/call-to-action.vue";
import CallToActionContentComponent from "@/components/call-to-action/call-to-action-content.vue";
import CallToActionSectionComponent from "@/components/call-to-action/call-to-action-section.vue";
import CallToActionTitleComponent from "@/components/call-to-action/call-to-action-title.vue";
import CallToActionSubtitleComponent from "@/components/call-to-action/call-to-action-subtitle.vue";
import CallToActionActionsComponent from "@/components/call-to-action/call-to-action-actions.vue";
import CallToActionBackdropComponent from "@/components/call-to-action/call-to-action-backdrop.vue";
import ButtonComponent from "@/components/button/button.vue";
import InputComponent from "@/components/input/input.vue";
import LabelComponent from "@/components/label/label.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Features/Website/Components/CTA",
  component: CallToActionComponent,
  argTypes: {
    asChild: {
      control: "boolean",
    },
  },
  args: {
    asChild: false,
  },
  render: (args) => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionSectionComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      CallToActionActionsComponent,
      CallToActionBackdropComponent,
      ButtonComponent,
    },
    setup() {
      return { args };
    },
    template: `
      <CallToActionComponent v-bind="args">
        <CallToActionContentComponent>
          <CallToActionSectionComponent>
            <CallToActionTitleComponent>Ready to dive in?</CallToActionTitleComponent>
            <CallToActionSubtitleComponent>
              Start your free trial today and experience the power of our platform.
            </CallToActionSubtitleComponent>
            <CallToActionActionsComponent>
              <ButtonComponent>Get started</ButtonComponent>
              <ButtonComponent variant="outline">Learn more</ButtonComponent>
            </CallToActionActionsComponent>
          </CallToActionSectionComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
} satisfies Meta<typeof CallToActionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeftContent: Story = {
  render: () => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      CallToActionActionsComponent,
      ButtonComponent,
    },
    template: `
      <CallToActionComponent>
        <CallToActionContentComponent style="background-color: var(--color-muted);">
          <CallToActionTitleComponent>Get in touch</CallToActionTitleComponent>
          <CallToActionSubtitleComponent>
            We are here to help you with any questions you may have
          </CallToActionSubtitleComponent>
          <CallToActionActionsComponent>
            <ButtonComponent as-child><a href="#">Contact us</a></ButtonComponent>
            <ButtonComponent variant="outline" as-child><a href="#">Learn more</a></ButtonComponent>
          </CallToActionActionsComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
};

export const WithCenteredContent: Story = {
  render: () => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      CallToActionActionsComponent,
      ButtonComponent,
    },
    template: `
      <CallToActionComponent>
        <CallToActionContentComponent style="text-align: center; background-color: var(--color-muted);">
          <CallToActionTitleComponent>Get in touch</CallToActionTitleComponent>
          <CallToActionSubtitleComponent style="margin-left: auto; margin-right: auto;">
            We are here to help you with any questions you may have
          </CallToActionSubtitleComponent>
          <CallToActionActionsComponent style="justify-content: center;">
            <ButtonComponent as-child><a href="#">Contact us</a></ButtonComponent>
            <ButtonComponent variant="outline" as-child><a href="#">Learn more</a></ButtonComponent>
          </CallToActionActionsComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
};

export const WithBackdrop: Story = {
  render: () => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      CallToActionActionsComponent,
      CallToActionBackdropComponent,
      ButtonComponent,
    },
    template: `
      <CallToActionComponent>
        <CallToActionBackdropComponent
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
          alt="cta"
        />
        <CallToActionContentComponent>
          <CallToActionTitleComponent style="color: var(--color-white);">Get in touch</CallToActionTitleComponent>
          <CallToActionSubtitleComponent style="color: var(--color-muted-fg);">
            We are here to help you with any questions you may have
          </CallToActionSubtitleComponent>
          <CallToActionActionsComponent>
            <ButtonComponent as-child><a href="#">Contact us</a></ButtonComponent>
            <ButtonComponent variant="outline" style="color: var(--color-muted-fg);" as-child><a href="#">Learn more</a></ButtonComponent>
          </CallToActionActionsComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
};

export const WithFormVertical: Story = {
  render: () => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionSectionComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      CallToActionBackdropComponent,
      ButtonComponent,
      InputComponent,
      LabelComponent,
    },
    template: `
      <CallToActionComponent>
        <CallToActionBackdropComponent
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
          alt="cta"
        />
        <CallToActionContentComponent>
          <CallToActionTitleComponent style="color: var(--color-white);">Get in touch</CallToActionTitleComponent>
          <CallToActionSubtitleComponent style="color: var(--color-muted);">
            We are here to help you with any questions you may have
          </CallToActionSubtitleComponent>
          <CallToActionSectionComponent style="max-width: 28rem;">
            <div style="display: flex; align-items: flex-start; gap: var(--spacing-4);">
              <LabelComponent for="email-address" class="sr-only">Email address</LabelComponent>
              <InputComponent id="email-address" name="email" type="email" autocomplete="email" required placeholder="Enter your email" />
              <ButtonComponent type="submit">Subscribe</ButtonComponent>
            </div>
            <p style="margin-top: var(--spacing-4); font-size: var(--font-size-sm); color: var(--color-muted-fg);">
              By clicking Subscribe you're confirming that you agree with our
              <a href="#" style="text-decoration: underline;">Terms and Conditions</a>
            </p>
          </CallToActionSectionComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
};

export const WithFormHorizontal: Story = {
  render: () => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionSectionComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      ButtonComponent,
      InputComponent,
      LabelComponent,
    },
    template: `
      <CallToActionComponent>
        <CallToActionContentComponent style="background-color: hsl(from var(--color-muted) h s l / 10%); gap: var(--spacing-7);">
          <CallToActionSectionComponent style="text-align: center;">
            <CallToActionTitleComponent>Get up-to-date</CallToActionTitleComponent>
            <CallToActionSubtitleComponent>
              Subscribe to our newsletter and be the first to know about our newest projects and resources.
            </CallToActionSubtitleComponent>
          </CallToActionSectionComponent>
          <CallToActionSectionComponent style="max-width: 28rem;">
            <div style="display: flex; align-items: flex-start; gap: var(--spacing-4);">
              <LabelComponent for="email-address-h" class="sr-only">Email address</LabelComponent>
              <InputComponent id="email-address-h" name="email" type="email" autocomplete="email" required placeholder="Enter your email" />
              <ButtonComponent type="submit">Subscribe</ButtonComponent>
            </div>
            <p style="margin-top: var(--spacing-4); color: var(--color-muted-fg); font-size: var(--font-size-sm);">
              By clicking Subscribe you're confirming that you agree with our
              <a href="#" style="text-decoration: underline;">Terms and Conditions</a>
            </p>
          </CallToActionSectionComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
};

export const WithFormHorizontalBackdrop: Story = {
  render: () => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionSectionComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      CallToActionBackdropComponent,
      ButtonComponent,
      InputComponent,
      LabelComponent,
    },
    template: `
      <CallToActionComponent>
        <CallToActionBackdropComponent
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
          alt="cta"
        />
        <CallToActionContentComponent style="gap: var(--spacing-7);">
          <CallToActionSectionComponent style="text-align: center;">
            <CallToActionTitleComponent style="color: var(--color-white);">Get up-to-date</CallToActionTitleComponent>
            <CallToActionSubtitleComponent style="color: var(--color-muted-fg);">
              Subscribe to our newsletter and be the first to know about our newest projects and resources.
            </CallToActionSubtitleComponent>
          </CallToActionSectionComponent>
          <CallToActionSectionComponent style="max-width: 28rem;">
            <div style="display: flex; align-items: flex-start; gap: var(--spacing-4);">
              <LabelComponent for="email-address-hb" class="sr-only">Email address</LabelComponent>
              <InputComponent id="email-address-hb" name="email" type="email" autocomplete="email" required placeholder="Enter your email" />
              <ButtonComponent type="submit">Subscribe</ButtonComponent>
            </div>
            <p style="margin-top: var(--spacing-4); font-size: var(--font-size-sm); color: var(--color-muted-fg);">
              By clicking Subscribe you're confirming that you agree with our
              <a href="#" style="text-decoration: underline;">Terms and Conditions</a>
            </p>
          </CallToActionSectionComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    components: {
      CallToActionComponent,
      CallToActionContentComponent,
      CallToActionTitleComponent,
      CallToActionSubtitleComponent,
      CallToActionActionsComponent,
      CallToActionBackdropComponent,
      ButtonComponent,
    },
    template: `
      <CallToActionComponent>
        <CallToActionBackdropComponent
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1280&q=80"
          alt="Team collaborating in a modern office"
        />
        <CallToActionContentComponent style="text-align: center;">
          <CallToActionTitleComponent style="color: var(--color-white);">Introducing Pulse Analytics</CallToActionTitleComponent>
          <CallToActionSubtitleComponent style="color: var(--color-muted-fg); margin-left: auto; margin-right: auto;">
            Real-time insights for your team, wherever you work.
          </CallToActionSubtitleComponent>
          <CallToActionActionsComponent style="justify-content: center;">
            <ButtonComponent as-child><a href="#">Start free trial</a></ButtonComponent>
            <ButtonComponent variant="outline" style="color: var(--color-muted-fg);" as-child><a href="#">View pricing</a></ButtonComponent>
          </CallToActionActionsComponent>
        </CallToActionContentComponent>
      </CallToActionComponent>
    `,
  }),
};
