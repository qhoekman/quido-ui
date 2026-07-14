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
      <div style="width: 100%; height: 120vh; background: var(--color-muted);"></div>
      <AffixComponent :offset-top="0" v-bind="args">
        <ButtonComponent>Affix top</ButtonComponent>
      </AffixComponent>
      <AffixComponent :offset-bottom="0" v-bind="args">
        <ButtonComponent>Affix bottom</ButtonComponent>
      </AffixComponent>
      <div style="width: 100%; height: 120vh; background: var(--color-muted);"></div>
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
      <div style="width: 100%; height: 120vh; background: var(--color-muted);"></div>
      <AffixComponent :offset-top="0" v-bind="args">
        <ButtonComponent>Affix top</ButtonComponent>
      </AffixComponent>
      <div style="width: 100%; height: 120vh; background: var(--color-muted);"></div>
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
      <div style="width: 100%; height: 120vh; background: var(--color-muted);"></div>
      <AffixComponent :offset-bottom="0" v-bind="args">
        <ButtonComponent>Affix bottom</ButtonComponent>
      </AffixComponent>
      <div style="width: 100%; height: 120vh; background: var(--color-muted);"></div>
    `
  })
}
