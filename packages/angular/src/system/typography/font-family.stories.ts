import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { IconComponent } from '../../components/icon/icon.component';
import { StackComponent } from '../../components/stack/stack.component';
import { TextComponent } from '../../components/text/text.component';
const meta: Meta<TextComponent> = {
  title: 'Design System/Typography/Font Family',
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
      fontFamilies: ['sans', 'serif', 'mono'],
    },
    template: `
      <div qui-grid [columns]="2">
        <ng-container *ngFor="let fontFamily of fontFamilies">
          <div qui-grid-item [colSpan]="1">
            <strong>{{ fontFamily }}</strong>
          </div>
          <div qui-grid-item [colSpan]="2">
            <p [style.fontFamily]="'var(--font-family-' + fontFamily + ')'">{{ text }}</p>
          </div>
        </ng-container>
      </div>
`,
  }),
};
