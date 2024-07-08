import { ButtonDirective, ButtonProps } from '@/app/button/button.directive';
import { TooltipDirective } from '@/app/tooltip/tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

type Story = StoryObj<any>;

const meta: Meta<any> = {
  title: 'Components/Overlay/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        OverlayModule,
        PortalModule,
        TooltipDirective,
        ButtonDirective,
      ],
    }),
  ],
  args: {
    tooltip: 'Are you sure?',
  },
  render: (args: ButtonProps) => ({
    props: args,
    template: `<button quiButton variant="destructive" [quiTooltip]="tooltip">Button</button>`,
  }),
};

export const Default: Story = {};

export default meta;
