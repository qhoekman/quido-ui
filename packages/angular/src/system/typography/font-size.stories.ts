import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { IconComponent } from '../../components/icon/icon.component';
import { StackComponent } from '../../components/stack/stack.component';
import { TextComponent } from '../../components/text/text.component';
const meta: Meta<TextComponent> = {
  title: 'Design System/Typography/Font Size',
  component: TextComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TextComponent,
        HeadingComponent,
        GridComponent,
        GridItemComponent,
        StackComponent,
      ],
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
      fontSizes: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    template: `
      <div qui-grid [columns]="2">
        <ng-container *ngFor="let fontSize of fontSizes">
          <div qui-grid-item [colSpan]="1">
            <strong>{{ fontSize }}</strong>
          </div>
          <div qui-grid-item [colSpan]="2">
            <h1 [style.fontSize]="'var(--font-size-' + fontSize + ')'" [style.lineHeight]="'var(--line-height-' + fontSize + ')'" [style.fontFamily]="'var(--font-family-' + fontFamily + ')'">{{ text }}</h1>
          </div>
        </ng-container>
      </div>
`,
  }),
};
