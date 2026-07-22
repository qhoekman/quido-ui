import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { HeadingComponent, HeadingVariants } from './heading.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<HeadingComponent> = {
  title: 'Components/Typography/Heading',
  component: HeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: Array<HeadingVariants['variant']>(
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'unset'
      ),
    },
    size: {
      control: 'select',
      options: Array<HeadingVariants['size']>(
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        'unset'
      ),
    },
    weight: {
      control: 'select',
      options: Array<HeadingVariants['weight']>(
        'normal',
        'medium',
        'bold',
        'unset'
      ),
    },
    color: {
      control: 'select',
      options: Array<HeadingVariants['color']>(
        'neutral',
        'primary',
        'secondary',
        'unset'
      ),
    },
  },
};
export default meta;

type Story = StoryObj<HeadingComponent>;

export const Default: Story = {
  args: {
    variant: 'unset',
    size: 'unset',
    weight: 'unset',
    color: 'unset',
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <span qui-heading [variant]="variant" [size]="size" [weight]="weight" [color]="color">Sample Heading</span>
    </qui-story>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <span qui-heading variant="h1">Heading 1</span>
        <span qui-heading variant="h2">Heading 2</span>
        <span qui-heading variant="h3">Heading 3</span>
        <span qui-heading variant="h4">Heading 4</span>
        <span qui-heading variant="h5">Heading 5</span>
        <span qui-heading variant="h6">Heading 6</span>
      </div>
    </qui-story>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <span qui-heading size="sm">Small Heading</span>
        <span qui-heading size="md">Medium Heading</span>
        <span qui-heading size="lg">Large Heading</span>
        <span qui-heading size="xl">Extra Large Heading</span>
        <span qui-heading size="2xl">2XL Heading</span>
        <span qui-heading size="3xl">3XL Heading</span>
      </div>
    </qui-story>
    `,
  }),
};

export const Weights: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <span qui-heading weight="normal">Normal Weight</span>
        <span qui-heading weight="medium">Medium Weight</span>
        <span qui-heading weight="bold">Bold Weight</span>
      </div>
    </qui-story>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <span qui-heading color="neutral">Neutral Color</span>
        <span qui-heading color="primary">Primary Color</span>
        <span qui-heading color="secondary">Secondary Color</span>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <article style="max-width: 32rem;">
        <span qui-heading variant="h1" style="display: block; margin-bottom: var(--spacing-2);">Getting started with Pulse</span>
        <span qui-heading variant="h2" color="secondary" style="display: block; margin-bottom: var(--spacing-4); font-weight: var(--font-weight-normal);">A quick tour of the component library</span>
        <span qui-heading variant="h3" style="display: block; margin-bottom: var(--spacing-1);">Installation</span>
      </article>
    </qui-story>
    `,
  }),
};
