import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LoaderComponent } from './loader.component';
import { StackComponent } from '../stack/stack.component';
import { LabelComponent } from '../label/label.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedLoaderComponent = LoaderComponent & {
  label: string;
};

const meta: Meta<EnhancedLoaderComponent> = {
  title: 'Components/Feedback/Loader',
  component: LoaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        LoaderComponent,
        StackComponent,
        LabelComponent,
        ButtonComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    active: {
      control: 'boolean',
    },
    variant: {
      control: 'text',
    },
  } as never,
};
export default meta;

type Story = StoryObj<EnhancedLoaderComponent>;

export const Default: Story = {
  args: {
    active: true,
    variant: 'spinner',
    label: 'Loading...',
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-stack gap="sm">
        <div qui-loader [active]="active" [variant]="variant"></div>
        <label *ngIf="active" qui-label>{{ label }}</label>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <button qui-button variant="primary" disabled style="display: inline-flex; align-items: center; gap: var(--spacing-2);">
        <div qui-loader active variant="spinner"></div>
        Saving changes...
      </button>
    </qui-story>
    `,
  }),
};
