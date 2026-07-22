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
    tags: ['design', 'frontend'],
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

export const Empty: Story = {
  args: {
    tags: [],
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

export const WithManyTags: Story = {
  args: {
    tags: ['react', 'vue', 'angular', 'typescript', 'javascript', 'css', 'html'],
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

export const Composition: Story = {
  args: {
    tags: ['bug', 'urgent'],
  },
  render: (args) => ({
    props: args,
    template: `
    <div style="max-width: 320px;">
      <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Labels</label>
      <div qui-tag-input [tags]="tags" (tagsChange)="tags = $event"></div>
      <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">Press Enter or comma to add a label.</p>
    </div>`,
  }),
};
