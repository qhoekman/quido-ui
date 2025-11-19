import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ToastViewportComponent } from './toast-viewport.component';
import { ToastCloseComponent } from './toast-close.component';
import { StackComponent } from '../stack/stack.component';
import { IconCross1Component } from '../../icons';
import { ToastActionComponent } from './toast-action.component';
import { ToastDescriptionComponent } from './toast-description.component';
import { ToastTitleComponent } from './toast-title.component';
import { ToastComponent, ToastVariants } from './toast.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ToastComponent> = {
  title: 'Components/Feedback/Toast',
  component: ToastComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ToastViewportComponent,
        ToastComponent,
        ToastCloseComponent,
        ToastActionComponent,
        ToastDescriptionComponent,
        ToastTitleComponent,
        StackComponent,
        StoryComponent,
        IconCross1Component,
      ],
    }),
  ],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: Array<ToastVariants['variant']>('default', 'destructive'),
    },
  } as never,
};
export default meta;

type Story = StoryObj<ToastComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Toast Title',
    description: 'This is a toast description.',
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-toast-viewport>
        <qui-toast [variant]="variant">
          <div qui-stack direction="column" gap="none">
            <h3 qui-toast-title>Toast Title</h3>
            <p qui-toast-description>This is a toast description.</p>
          </div>
          <div qui-stack direction="row" gap="none">
            <button qui-toast-action size="sm">Action</button>
          </div>
          <button qui-toast-close>
            <i qui-icon-cross-1 size="sm"></i>
          </button>
        </qui-toast>
      </div>
    </qui-story>
    `,
  }),
};
