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
    template: `<pui-story><pui-file-input [multiple]="multiple"></pui-file-input></pui-story>`,
  }),
};
