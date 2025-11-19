import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { TextComponent } from '../../components/text/text.component';

type StoryArgs = {
  colorFamilies: string[];
  shades: string[];
  singularColors: { color: string; value: string }[];
};

const meta: Meta<StoryArgs> = {
  title: 'Design System/Colors/System Colors',
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
  args: {
    colorFamilies: [
      'slate',
      'gray',
      'zinc',
      'neutral',
      'stone',
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
      'rose',
    ],
    shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    singularColors: [
      { color: 'white', value: 'var(--color-white)' },
      { color: 'black', value: 'var(--color-black)' },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      colorPallete: [
        ...args.colorFamilies.flatMap((color) =>
          args.shades
            .map((shade) => ({
              color,
              shade,
              value: `var(--color-${color}-${shade})`,
            }))
            .sort((a, b) => {
              if (a.color === b.color) {
                return parseInt(a.shade, 10) - parseInt(b.shade, 10);
              }
              return args.colorFamilies.indexOf(a.color) - args.colorFamilies.indexOf(b.color);
            }),
        ),
        ...args.singularColors,
      ],
    },
    template: `
    <div pui-grid [columns]="11">
      <div
        pui-grid-item
        *ngFor="let hex of colorPallete"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100px; height: 100px; background: {{ hex.value }}"
      >
        <span style="font-size: 12px; background: rgba(0, 0, 0, 0.5); color: white; padding: 4px; border-radius: 8px;">{{ hex.color }}{{ hex.shade ? '-' + hex.shade : '' }}</span>
      </div>
    </div>
`,
  }),
};
