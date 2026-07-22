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
    title: 'Event created',
    description: 'Your event has been added to the calendar.',
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-toast-viewport>
        <qui-toast [variant]="variant">
          <div qui-stack direction="column" gap="none">
            <h3 qui-toast-title>{{ title }}</h3>
            <p qui-toast-description>{{ description }}</p>
          </div>
          <div qui-stack direction="row" gap="none">
            <button qui-toast-action size="sm">Undo</button>
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

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Failed to save',
    description: 'There was a problem saving your changes.',
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-toast-viewport>
        <qui-toast [variant]="variant">
          <div qui-stack direction="column" gap="none">
            <h3 qui-toast-title>{{ title }}</h3>
            <p qui-toast-description>{{ description }}</p>
          </div>
          <div qui-stack direction="row" gap="none">
            <button qui-toast-action size="sm">Retry</button>
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

export const WithoutDescription: Story = {
  args: {
    variant: 'default',
    title: 'Message sent',
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-toast-viewport>
        <qui-toast [variant]="variant">
          <h3 qui-toast-title>{{ title }}</h3>
          <button qui-toast-close>
            <i qui-icon-cross-1 size="sm"></i>
          </button>
        </qui-toast>
      </div>
    </qui-story>
    `,
  }),
};

export const WithoutAction: Story = {
  args: {
    variant: 'default',
    title: 'Copied to clipboard',
    description: 'The link has been copied to your clipboard.',
  } as never,
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-toast-viewport>
        <qui-toast [variant]="variant">
          <div qui-stack direction="column" gap="none">
            <h3 qui-toast-title>{{ title }}</h3>
            <p qui-toast-description>{{ description }}</p>
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

export const Composition: Story = {
  render: () => ({
    template: `
    <qui-story>
      <div style="width: 400px; height: 320px; position: relative; background-color: var(--color-muted); border-radius: var(--border-radius-lg); box-sizing: border-box;">
        <div style="padding: var(--spacing-4);">
          <h3 style="margin: 0 0 var(--spacing-1);">Calendar</h3>
          <p style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Your events for this week will appear here.</p>
        </div>
        <div qui-toast-viewport style="position: absolute; top: auto; bottom: 0; right: 0; left: auto;">
          <qui-toast variant="default">
            <div qui-stack direction="column" gap="none">
              <h3 qui-toast-title>Event created</h3>
              <p qui-toast-description>Your event has been added to the calendar.</p>
            </div>
            <div qui-stack direction="row" gap="none">
              <button qui-toast-action size="sm">Undo</button>
            </div>
            <button qui-toast-close>
              <i qui-icon-cross-1 size="sm"></i>
            </button>
          </qui-toast>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
