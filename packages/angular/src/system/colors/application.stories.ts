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
  title: 'Design System/Colors/Application Colors',
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
    colorFamilies: [],
    shades: [],
    singularColors: [
      { color: 'primary', value: 'var(--color-primary)' },
      { color: 'secondary', value: 'var(--color-secondary)' },
      { color: 'danger', value: 'var(--color-danger)' },
      { color: 'background', value: 'var(--color-background)' },
      { color: 'border', value: 'var(--color-border)' },
      { color: 'input', value: 'var(--color-input)' },
      { color: 'muted', value: 'var(--color-muted)' },
      { color: 'card', value: 'var(--color-card)' },
      { color: 'popover', value: 'var(--color-popover)' },
      { color: 'ring', value: 'var(--color-ring)' },
      { color: 'sidebar', value: 'var(--color-sidebar)' },
      { color: 'sidebar-primary', value: 'var(--color-sidebar-primary)' },
      { color: 'sidebar-accent', value: 'var(--color-sidebar-accent)' },
      { color: 'sidebar-border', value: 'var(--color-sidebar-border)' },
      { color: 'sidebar-ring', value: 'var(--color-sidebar-ring)' },
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
              return (
                args.colorFamilies.indexOf(a.color) -
                args.colorFamilies.indexOf(b.color)
              );
            })
        ),
        ...args.singularColors,
      ],
    },
    template: `
    <div qui-grid [columns]="11">
      <div
        qui-grid-item
        *ngFor="let hex of colorPallete"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100px; height: 100px; background: {{ hex.value }}"
      >
        <span style="font-size: 12px; color: var(--color-{{ hex.color }}-fg); padding: 4px; border-radius: 8px;">{{ hex.color }}{{ hex.shade ? '-' + hex.shade : '' }}</span>
      </div>
    </div>
`,
  }),
};
