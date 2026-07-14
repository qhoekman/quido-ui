import type { Meta, StoryObj } from '@storybook/vue3'
import ScrollArea from './scroll-area.vue'

const meta = {
  title: 'Components/Layout/Scroll Area',
  component: ScrollArea,
  argTypes: {
    type: {
      control: 'select',
      options: ['auto', 'always', 'scroll', 'hover'],
      description: 'Controls when scrollbars appear'
    }
  },
  args: {
    type: 'auto'
  }
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'auto'
  },
  render: (args) => ({
    components: { ScrollArea },
    setup() {
      return { args }
    },
    template: `
      <ScrollArea
        v-bind="args"
        style="
          height: 200px;
          width: 350px;
          border-radius: var(--border-radius-md);
          border: var(--border-width-default) solid var(--color-border);
          padding: var(--spacing-4);
        "
      >
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup, even
        in the royal toilet. The king was furious, but he couldn't seem to stop
        Jokester. And then, one day, the people of the kingdom discovered that the
        jokes left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
      </ScrollArea>
    `
  })
}
