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
      imports: [
        ButtonComponent,
        ButtonGroupComponent,
        IconEraserComponent,
        IconDownloadComponent,
      ],
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
    <qui-signature-pad #signaturePad></qui-signature-pad>
    <div qui-button-group>
      <button qui-button qui-button-group-item (click)="signaturePad.clear()">
        <i qui-icon name="eraser"></i>
      </button>
      <button qui-button qui-button-group-item (click)="signaturePad.download()">
        <i qui-icon name="download"></i>
      </button>
    </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <div style="max-width: 420px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
      <h3 style="margin: 0 0 var(--spacing-1);">Sign the Agreement</h3>
      <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Draw your signature below to accept the terms.</p>
      <qui-signature-pad #signaturePad style="width: 100%; height: 200px;"></qui-signature-pad>
      <div qui-button-group style="margin-top: var(--spacing-4);">
        <button qui-button qui-button-group-item (click)="signaturePad.clear()">
          <i qui-icon name="eraser"></i>
        </button>
        <button qui-button qui-button-group-item (click)="signaturePad.download()">
          <i qui-icon name="download"></i>
        </button>
      </div>
    </div>
    `,
  }),
};
