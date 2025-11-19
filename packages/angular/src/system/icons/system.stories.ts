import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GridItemComponent } from '../../components/grid/grid-item.component';
import { GridComponent } from '../../components/grid/grid.component';
import { IconComponent, IconVariants } from '../../components/icon/icon.component';
import * as Icons from '../../icons';

const meta: Meta<IconComponent> = {
  title: 'Design System/Icons/System Icons',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [...Object.values(Icons), GridComponent, GridItemComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: Array<IconVariants['size']>('xs', 'sm', 'md', 'lg', 'xl', '2xl'),
    },
  },
};
export default meta;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => ({
    props: {
      ...args,
      icons: Object.values(Icons),
    },
    template: `
       <div pui-grid [columns]="16">
        @for (icon of icons; track icon.name) {
          <div pui-grid-item [colSpan]="1">
            <ng-container *ngComponentOutlet="icon"></ng-container>
          </div>
        }
       </div>
    `,
  }),
};
