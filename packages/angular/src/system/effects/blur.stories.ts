import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { TextComponent } from '../../components/text/text.component';

type StoryArgs = {
  blurs: string[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Effects/Blur',
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
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    props: {
      ...args,
      blurs: ['none', 'sm', 'default', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    template: `
    <div qui-grid [columns]="blurs.length" style="background:url(https://w.wallhaven.cc/full/n6/wallhaven-n62jd6.jpg); padding: 2rem; width:  100%; height: 100%; object-fit: cover;">
      <div
        qui-grid-item
        *ngFor="let blur of blurs"
        [title]="'var(--blur-{{ blur }})'"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100px; height: 100px; border: 4px solid var(--color-border); backdrop-filter: blur(var(--blur-{{ blur }}));"
      >
      </div>
      <div
        qui-grid-item
        *ngFor="let blur of blurs"
        [title]="'var(--blur-{{ blur }})'"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100px; height: 100px; background: var(--color-card); filter: blur(var(--blur-{{ blur }}));"
      >
      </div>
    </div>
`,
  }),
};
