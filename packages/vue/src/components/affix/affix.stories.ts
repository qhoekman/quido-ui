import AffixComponent from '@/components/affix/affix.vue'
import ButtonComponent from '@/components/button/button.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Layout/Affix',
  component: AffixComponent,
  argTypes: {
    offsetTop: {
      control: 'number'
    },
    offsetBottom: {
      control: 'number'
    },
    asChild: {
      control: 'boolean'
    },
    as: {
      control: 'text'
    }
  },
  args: {
    offsetTop: null,
    offsetBottom: null,
    asChild: false,
    as: 'div'
  },
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof AffixComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { AffixComponent, ButtonComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: var(--spacing-4);">
        <p style="margin-bottom: var(--spacing-4);">Scroll the page to see the affix stick.</p>
        <div style="height: 40vh; background: var(--color-muted); border-radius: var(--border-radius-md);"></div>
        <AffixComponent v-bind="args" :offset-top="16" style="display: inline-block; margin: var(--spacing-4) 0;">
          <ButtonComponent>Affix top</ButtonComponent>
        </AffixComponent>
        <div style="height: 120vh; background: var(--color-muted); border-radius: var(--border-radius-md);"></div>
        <AffixComponent v-bind="args" :offset-bottom="16" style="display: inline-block; margin: var(--spacing-4) 0;">
          <ButtonComponent>Affix bottom</ButtonComponent>
        </AffixComponent>
        <div style="height: 40vh; background: var(--color-muted); border-radius: var(--border-radius-md);"></div>
      </div>
    `
  })
}

export const Top: Story = {
  render: (args) => ({
    components: { AffixComponent, ButtonComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: var(--spacing-4);">
        <div style="height: 40vh; background: var(--color-muted); border-radius: var(--border-radius-md);"></div>
        <AffixComponent v-bind="args" :offset-top="0" style="display: inline-block; margin: var(--spacing-4) 0;">
          <ButtonComponent>Affix top</ButtonComponent>
        </AffixComponent>
        <div style="height: 120vh; background: var(--color-muted); border-radius: var(--border-radius-md);"></div>
      </div>
    `
  })
}

export const Bottom: Story = {
  render: (args) => ({
    components: { AffixComponent, ButtonComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: var(--spacing-4);">
        <div style="height: 120vh; background: var(--color-muted); border-radius: var(--border-radius-md);"></div>
        <AffixComponent v-bind="args" :offset-bottom="0" style="display: inline-block; margin: var(--spacing-4) 0;">
          <ButtonComponent>Affix bottom</ButtonComponent>
        </AffixComponent>
        <div style="height: 40vh; background: var(--color-muted); border-radius: var(--border-radius-md);"></div>
      </div>
    `
  })
}
