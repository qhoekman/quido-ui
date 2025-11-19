import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { IconComponent } from '../../components/icon/icon.component';
import { StackComponent } from '../../components/stack/stack.component';
import { TextComponent } from '../../components/text/text.component';

const meta: Meta<TextComponent> = {
  title: 'Design System/Typography/Line Height',
  component: TextComponent,
  decorators: [
    moduleMetadata({
      imports: [TextComponent, HeadingComponent, GridComponent, GridItemComponent, StackComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: {
      ...args,
      text: `The quick brown fox jumps over the lazy dog.`.repeat(6),
      lineHeights: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    template: `
      <div pui-grid [columns]="2">
        <ng-container *ngFor="let lineHeight of lineHeights">
          <div pui-grid-item [colSpan]="1">
            <strong>{{ lineHeight }}</strong>
          </div>
          <div pui-grid-item [colSpan]="2">
            <p [style.lineHeight]="'var(--line-height-' + lineHeight + ')'">{{ text }}</p>
          </div>
        </ng-container>
      </div>
`,
  }),
};
