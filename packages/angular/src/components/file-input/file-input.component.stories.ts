import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { FileInputComponent } from './file-input.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedFileInputComponent = FileInputComponent & {
  multiple: boolean;
};

const meta: Meta<EnhancedFileInputComponent> = {
  title: 'Components/Data Entry/File Input',
  component: FileInputComponent,
  decorators: [
    moduleMetadata({
      imports: [FileInputComponent, StoryComponent],
    }),
  ],
  argTypes: {
    multiple: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedFileInputComponent>;

export const Default: Story = {
  args: {
    multiple: false,
  },
  render: (args) => ({
    props: args,
    template: `<qui-story><qui-file-input [multiple]="multiple"></qui-file-input></qui-story>`,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="max-width: 320px;">
          <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Resume</label>
          <qui-file-input></qui-file-input>
          <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">PDF or Word document, up to 5MB.</p>
        </div>
      </qui-story>
    `,
  }),
};
