import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { StackComponent } from '../../components/stack/stack.component';
import { TextComponent } from '../../components/text/text.component';

const meta: Meta<TextComponent> = {
  title: 'Design System/Typography/Text Styles',
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

type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: {
      ...args,
      text: 'The quick brown fox jumps over the lazy dog',
      variants: ['body', 'caption', 'label', 'title', 'subtitle'],
    },
    template: `
      <div qui-grid [columns]="2">
        <ng-container *ngFor="let variant of variants">
          <div qui-grid-item [colSpan]="1">
            <strong>{{ variant }}</strong>
          </div>
          <div qui-grid-item [colSpan]="2">
            <p qui-text [variant]="variant">{{ text }}</p>
          </div>
        </ng-container>
      </div>
`,
  }),
};
