import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { IconComponent } from '../../components/icon/icon.component';
import { StackComponent } from '../../components/stack/stack.component';
import { TextComponent } from '../../components/text/text.component';
const meta: Meta<TextComponent> = {
  title: 'Design System/Typography/Letter Spacing',
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
      text: 'The quick brown fox jumps over the lazy dog',
      letterSpacing: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
    },
    template: `
      <div pui-grid [columns]="2">
        <ng-container *ngFor="let letterSpacing of letterSpacing">
          <div pui-grid-item [colSpan]="1">
            <strong>{{ letterSpacing }}</strong>
          </div>
          <div pui-grid-item [colSpan]="2">
            <p [style.letterSpacing]="'var(--letter-spacing-' + letterSpacing + ')'">{{ text }}</p>
          </div>
        </ng-container>
      </div>
`,
  }),
};
