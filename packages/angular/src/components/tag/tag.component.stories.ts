import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TagComponent } from './tag.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedTagComponent = TagComponent & {
  content: string;
};

const meta: Meta<EnhancedTagComponent> = {
  title: 'Components/Data Display/Tag',
  component: TagComponent,
  decorators: [moduleMetadata({ imports: [StoryComponent] })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'outline'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['pill', 'plate'],
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedTagComponent>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    shape: 'plate',
    content: 'Tag Content',
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <div pui-tag [variant]="variant" [size]="size" [shape]="shape">{{content}}</div>
      </pui-story>
    `,
  }),
};
