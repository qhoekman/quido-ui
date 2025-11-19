import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { TextComponent } from '../../components/text/text.component';

type StoryArgs = {
  borderRadius: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Effects/Radius',
  component: TextComponent,
  decorators: [
    moduleMetadata({
      imports: [GridComponent, GridItemComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: {
      ...args,
      borderRadius: ['none', 'sm', 'default', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
    template: `
    <div pui-grid [columns]="borderRadius.length">
      <div
        pui-grid-item
        *ngFor="let borderRadius of borderRadius"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100px; height: 100px; background: var(--color-card); border-radius: var(--border-radius-{{ borderRadius }}); border: 2px solid var(--color-border);"
      >
        <span style="font-size: 12px; color: var(--color-card-fg); padding: 4px; border-radius: 8px;">{{ borderRadius }}</span>
      </div>
    </div>
`,
  }),
};
