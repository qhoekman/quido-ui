import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { TextComponent } from '../../components/text/text.component';

type StoryArgs = {
  shadows: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Effects/Shadows',
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
      shadows: ['sm', 'default', 'md', 'lg', 'xl', '2xl', 'inner', 'none'],
    },
    template: `
    <div qui-grid [columns]="shadows.length">
      <div
        qui-grid-item
        *ngFor="let shadow of shadows"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100px; height: 100px; background: var(--color-card); box-shadow: var(--box-shadow-{{ shadow }});"
      >
        <span style="font-size: 12px; color: var(--color-card-fg); padding: 4px; border-radius: 8px;">{{ shadow }}</span>
      </div>
    </div>
`,
  }),
};
