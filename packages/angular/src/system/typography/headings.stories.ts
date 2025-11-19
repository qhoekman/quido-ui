import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { StackComponent } from '../../components/stack/stack.component';
import { TextComponent } from '../../components/text/text.component';

const meta: Meta<HeadingComponent> = {
  title: 'Design System/Typography/Headings',
  component: TextComponent,
  decorators: [
    moduleMetadata({
      imports: [TextComponent, HeadingComponent, GridComponent, GridItemComponent, StackComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<HeadingComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: {
      ...args,
      text: 'The quick brown fox jumps over the lazy dog',
      variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    template: `
      <div pui-grid [columns]="2">
        <ng-container *ngFor="let variant of variants">
          <div pui-grid-item [colSpan]="1">
            <strong>{{ variant }}</strong>
          </div>
          <div pui-grid-item [colSpan]="2">
            <h1 pui-heading [variant]="variant">{{ text }}</h1>
          </div>
        </ng-container>
      </div>
`,
  }),
};
