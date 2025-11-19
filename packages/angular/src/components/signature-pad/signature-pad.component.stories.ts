import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { IconDownloadComponent, IconEraserComponent } from '../../icons';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { ButtonComponent } from '../button/button.component';
import { SignaturePadComponent } from './signature-pad.component';

const meta: Meta<SignaturePadComponent> = {
  title: 'Components/Data Entry/Signature Pad',
  component: SignaturePadComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, ButtonGroupComponent, IconEraserComponent, IconDownloadComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<SignaturePadComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
    <pui-signature-pad #signaturePad></pui-signature-pad>
    <div pui-button-group>
      <button pui-button pui-button-group-item (click)="signaturePad.clear()">
        <i pui-icon name="eraser"></i>
      </button>
      <button pui-button pui-button-group-item (click)="signaturePad.download()">
        <i pui-icon name="download"></i>
      </button>
    </div>
    `,
  }),
};
