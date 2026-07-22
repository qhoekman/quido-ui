import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconUploadComponent } from '../../icons';
import { FileDropzoneComponent } from './file-dropzone.component';

type EnhancedFileDropzoneComponent = FileDropzoneComponent & {
  files: File[];
};

const meta: Meta<EnhancedFileDropzoneComponent> = {
  title: 'Components/Data Entry/File Dropzone',
  component: FileDropzoneComponent,
  decorators: [
    moduleMetadata({
      imports: [IconUploadComponent],
    }),
  ],
  argTypes: {
    files: {
      control: 'object',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedFileDropzoneComponent>;

export const Default: Story = {
  args: {
    files: [],
  },
  render: (args) => ({
    props: args,
    template: `<qui-file-dropzone (filesSelected)="files = $event" [accept]="['image/*', 'application/pdf']">
      <i qui-icon name="upload" size="4xl"></i>
      <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--color-muted-fg);">
        <span style="font-weight: 600;">Click to upload</span> or drag and drop
      </p>
      <p style="font-size: 0.75rem; color: var(--color-muted-fg); margin: 0;">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </qui-file-dropzone>
    `,
  }),
};

export const Composition: Story = {
  args: {
    files: [],
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 360px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Attachments</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Attach receipts or supporting documents to this expense.</p>
        <qui-file-dropzone (filesSelected)="files = $event" [accept]="['image/*', 'application/pdf']">
          <i qui-icon name="upload" size="3xl"></i>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--color-muted-fg);">
            <span style="font-weight: 600;">Click to upload</span> or drag and drop
          </p>
          <p style="font-size: 0.75rem; color: var(--color-muted-fg); margin: 0;">
            PDF, PNG, or JPG (MAX. 10MB)
          </p>
        </qui-file-dropzone>
      </div>
    `,
  }),
};
