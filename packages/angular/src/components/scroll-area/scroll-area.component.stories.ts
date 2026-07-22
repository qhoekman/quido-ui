import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ScrollAreaComponent } from './scroll-area.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ScrollAreaComponent> = {
  title: 'Components/Layout/Scroll Area',
  component: ScrollAreaComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
    },
  },
};
export default meta;

type Story = StoryObj<ScrollAreaComponent>;

export const Default: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div style="width: 300px; height: 200px; border: 1px solid var(--color-border); border-radius: var(--border-radius-sm);">
        <qui-scroll-area [orientation]="orientation" style="height: 100%;">
          <div style="padding: 16px">
            <h4 style="margin-bottom: 16px; font-size: 14px; font-weight: 500;">Tags</h4>
            <div *ngFor="let item of [].constructor(50); let i = index" style="font-size: 14px;">
              Item {{ i + 1 }}
            </div>
          </div>
        </qui-scroll-area>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    props: {
      entries: [
        { version: 'v2.4.0', date: '2026-06-12', note: 'Added dark mode support across all components.' },
        { version: 'v2.3.1', date: '2026-05-28', note: 'Fixed a focus-trap bug in the dialog component.' },
        { version: 'v2.3.0', date: '2026-05-10', note: 'Introduced the new data table with sorting and filtering.' },
        { version: 'v2.2.0', date: '2026-04-22', note: 'Improved keyboard navigation in the combobox.' },
        { version: 'v2.1.0', date: '2026-04-01', note: 'Added the toast and toaster components.' },
      ],
    },
    template: `
    <qui-story>
      <div style="width: 350px; border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <div style="padding: var(--spacing-4); border-bottom: var(--border-width-default) solid var(--color-border); font-weight: var(--font-weight-semibold);">
          Release notes
        </div>
        <div style="height: 200px;">
          <qui-scroll-area orientation="vertical" style="height: 100%;">
            <div style="padding: var(--spacing-4); display: flex; flex-direction: column; gap: var(--spacing-4);">
              <div *ngFor="let entry of entries">
                <div style="display: flex; justify-content: space-between; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
                  <span>{{ entry.version }}</span>
                  <span style="color: var(--color-muted-fg);">{{ entry.date }}</span>
                </div>
                <p style="margin: var(--spacing-1) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">{{ entry.note }}</p>
              </div>
            </div>
          </qui-scroll-area>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
