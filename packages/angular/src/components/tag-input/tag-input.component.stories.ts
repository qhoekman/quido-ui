import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TagInputComponent } from './tag-input.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedTagInputComponent = TagInputComponent & {
  tags: string[];
};

const meta: Meta<EnhancedTagInputComponent> = {
  title: 'Components/Data Entry/Tag Input',
  component: TagInputComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    tags: {
      control: 'multi-select',
      options: ['example', 'tags'],
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedTagInputComponent>;

export const Default: Story = {
  args: {
    tags: ['example', 'tags'],
  },
  render: (args) => ({
    props: args,
    template: `
    <div qui-story style="width: 300px;">
      <div qui-tag-input [tags]="tags" (tagsChange)="tags = $event" [name]="name" [id]="id">
      </div>
    </div>`,
  }),
};
