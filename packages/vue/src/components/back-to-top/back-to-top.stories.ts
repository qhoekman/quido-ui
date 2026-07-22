import BackToTopComponent from '@/components/back-to-top/back-to-top.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Actions/Back to Top',
  component: BackToTopComponent,
  argTypes: {
    asChild: {
      control: 'boolean',
      description: 'When true, merges props and event handlers with the child element'
    },
    as: {
      control: 'text',
      description: 'The HTML element to render'
    }
  },
  args: {
    asChild: false,
    as: 'div'
  },
  render: (args) => ({
    components: {
      BackToTopComponent,
      ButtonComponent
    },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 200vh; position: relative;">
        <BackToTopComponent v-bind="args">
          <ButtonComponent variant="primary" size="md">Back to Top</ButtonComponent>
        </BackToTopComponent>
      </div>
    `
  })
} satisfies Meta<typeof BackToTopComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: (args) => ({
    components: {
      BackToTopComponent,
      ButtonComponent
    },
    setup() {
      return { args }
    },
    template: `
      <article style="position: relative; padding: var(--spacing-6); max-width: 640px;">
        <h1>Release Notes — v2.4</h1>
        <p>A "Back to top" button appears once you've scrolled past the fold, so readers can return to the summary without hunting for it.</p>
        <section style="margin-top: var(--spacing-8);">
          <h2>New Components</h2>
          <p>Added the Combobox and Tag Input components, plus improved keyboard navigation across all form controls.</p>
        </section>
        <section style="margin-top: var(--spacing-8);">
          <h2>Bug Fixes</h2>
          <p>Fixed a focus-trap issue in Dialog and resolved incorrect color contrast in the dark theme for Badge.</p>
        </section>
        <section style="margin-top: var(--spacing-8);">
          <h2>Performance</h2>
          <p>Reduced bundle size by 18% by splitting chart components into separate entry points.</p>
        </section>
        <section style="margin-top: 100vh;">
          <h2>Deprecations</h2>
          <p>The legacy Modal component is deprecated in favor of Dialog and will be removed in the next major version.</p>
        </section>
        <BackToTopComponent v-bind="args">
          <ButtonComponent variant="primary" size="md">Back to Top</ButtonComponent>
        </BackToTopComponent>
      </article>
    `
  })
}
