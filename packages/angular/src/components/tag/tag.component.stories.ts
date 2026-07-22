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
    content: 'New',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-tag [variant]="variant" [size]="size" [shape]="shape">{{content}}</div>
      </qui-story>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; gap: var(--spacing-4); flex-wrap: wrap; align-items: center;">
          <div qui-tag variant="primary">Primary</div>
          <div qui-tag variant="secondary">Secondary</div>
          <div qui-tag variant="destructive">Destructive</div>
          <div qui-tag variant="outline">Outline</div>
        </div>
      </qui-story>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; gap: var(--spacing-4); align-items: center; flex-wrap: wrap;">
          <div qui-tag size="xs">Extra Small</div>
          <div qui-tag size="sm">Small</div>
          <div qui-tag size="md">Medium</div>
          <div qui-tag size="lg">Large</div>
        </div>
      </qui-story>
    `,
  }),
};

export const Shapes: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; gap: var(--spacing-4); align-items: center; flex-wrap: wrap;">
          <div qui-tag shape="pill">Pill Shape</div>
          <div qui-tag shape="plate">Plate Shape</div>
        </div>
      </qui-story>
    `,
  }),
};

export const Combinations: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; flex-direction: column; gap: var(--spacing-6);">
          <div style="display: flex; gap: var(--spacing-4); flex-wrap: wrap; align-items: center;">
            <div qui-tag variant="primary" shape="pill" size="sm">Primary Pill</div>
            <div qui-tag variant="secondary" shape="pill" size="md">Secondary Pill</div>
            <div qui-tag variant="destructive" shape="pill" size="lg">Destructive Pill</div>
          </div>
          <div style="display: flex; gap: var(--spacing-4); flex-wrap: wrap; align-items: center;">
            <div qui-tag variant="primary" shape="plate" size="xs">Primary Plate</div>
            <div qui-tag variant="secondary" shape="plate" size="sm">Secondary Plate</div>
            <div qui-tag variant="outline" shape="plate" size="md">Outline Plate</div>
          </div>
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; flex-direction: column; gap: var(--spacing-2); max-width: 320px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: var(--font-weight-semibold);">Q3 Roadmap</span>
            <div qui-tag variant="secondary" shape="pill">In Progress</div>
          </div>
          <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap;">
            <div qui-tag variant="outline" size="sm">design</div>
            <div qui-tag variant="outline" size="sm">backend</div>
            <div qui-tag variant="outline" size="sm">q3</div>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
