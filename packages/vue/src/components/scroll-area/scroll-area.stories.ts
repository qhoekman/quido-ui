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
        "
      >
        <div style="padding: var(--spacing-4);">
          <h4 style="margin-bottom: var(--spacing-4); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">Tags</h4>
          <div v-for="i in 50" :key="i" style="font-size: var(--font-size-sm);">
            Tag {{ i }}
          </div>
        </div>
      </ScrollArea>
    `
  })
}

export const Composition: Story = {
  render: () => ({
    components: { ScrollArea },
    data() {
      return {
        entries: [
          { version: 'v2.4.0', date: '2026-06-12', note: 'Added dark mode support across all components.' },
          { version: 'v2.3.1', date: '2026-05-28', note: 'Fixed a focus-trap bug in the dialog component.' },
          { version: 'v2.3.0', date: '2026-05-10', note: 'Introduced the new data table with sorting and filtering.' },
          { version: 'v2.2.0', date: '2026-04-22', note: 'Improved keyboard navigation in the combobox.' },
          { version: 'v2.1.0', date: '2026-04-01', note: 'Added the toast and toaster components.' }
        ]
      }
    },
    template: `
      <div style="width: 350px; border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <div style="padding: var(--spacing-4); border-bottom: var(--border-width-default) solid var(--color-border); font-weight: var(--font-weight-semibold);">
          Release notes
        </div>
        <ScrollArea style="height: 200px;">
          <div style="padding: var(--spacing-4); display: flex; flex-direction: column; gap: var(--spacing-4);">
            <div v-for="entry in entries" :key="entry.version">
              <div style="display: flex; justify-content: space-between; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
                <span>{{ entry.version }}</span>
                <span style="color: var(--color-muted-fg);">{{ entry.date }}</span>
              </div>
              <p style="margin: var(--spacing-1) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">{{ entry.note }}</p>
            </div>
          </div>
        </ScrollArea>
      </div>
    `
  })
}
