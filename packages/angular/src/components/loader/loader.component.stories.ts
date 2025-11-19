import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LoaderComponent } from './loader.component';
import { StackComponent } from '../stack/stack.component';
import { LabelComponent } from '../label/label.component';
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
      imports: [CommonModule, LoaderComponent, StackComponent, LabelComponent, StoryComponent],
    }),
  ],
  argTypes: {
    loading: {
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
    loading: true,
    variant: 'spinner',
    label: 'Loading...',
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <div pui-stack gap="sm">
        <div pui-loader [loading]="loading" [variant]="variant"></div>
        <label *ngIf="loading" pui-label>{{ label }}</label>
      </div>
    </pui-story>
    `,
  }),
};
