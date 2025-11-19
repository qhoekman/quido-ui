import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { TextComponent } from '../../components/text/text.component';

type StoryArgs = {
  borderWidth: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Effects/Border',
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
      borderWidth: ['0', '2', '4', '8'],
    },
    template: `
    <div pui-grid [columns]="borderWidth.length">
      <div
        pui-grid-item
        *ngFor="let borderWidth of borderWidth"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100px; height: 100px; background: var(--color-card); border-radius: var(--border-radius-default); border: var(--border-width-{{ borderWidth }}) solid var(--color-border);"
      >
        <span style="font-size: 12px; color: var(--color-card-fg); padding: 4px; border-radius: 8px;">{{ borderWidth }}</span>
      </div>
    </div>
`,
  }),
};
