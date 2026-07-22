import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { ToastService } from './toast.service';
import { ToasterComponent } from './toaster.component';
import { ToastVariants } from './toast.component';
import { ToastActionComponent } from './toast-action.component';
import { StoryComponent } from '../../system/components/story/story.component';

@Component({
  selector: 'story-toast-action',
  standalone: true,
  imports: [ToastActionComponent],
  template: `<button qui-toast-action size="sm" (click)="handleClick()">
    Undo
  </button>`,
})
export class StoryToastActionComponent {
  handleClick() {
    console.log('Undo clicked');
  }
}

@Component({
  selector: 'story-toast-button',
  standalone: true,
  imports: [ButtonComponent],
  template: `<button qui-button (click)="showToast()">Upload file</button>`,
})
export class StoryToastButtonComponent {
  @Input() title = 'File uploaded';
  @Input() description = 'invoice.pdf has been uploaded successfully.';
  @Input() variant: ToastVariants['variant'] = 'default';
  constructor(private toastService: ToastService) {}

  showToast() {
    this.toastService.showToast({
      title: this.title,
      description: this.description,
      variant: this.variant,
      action: StoryToastActionComponent,
    });
  }
}

const meta: Meta<ToasterComponent> = {
  title: 'Components/Feedback/Toaster',
  component: ToasterComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ToasterComponent,
        StoryToastButtonComponent,
        StoryComponent,
      ],
      providers: [ToastService],
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
      options: ['default', 'destructive'],
    },
  } as never,
};
export default meta;

type StoryDefault = StoryObj<ToasterComponent>;

export const Default: StoryDefault = {
  args: {
    title: 'File uploaded',
    description: 'invoice.pdf has been uploaded successfully.',
    variant: 'default',
  } as never,
  render: (args) => {
    return {
      props: args,
      template: `
        <qui-story>
          <story-toast-button [title]="title" [description]="description" [variant]="variant"></story-toast-button>
          <qui-toaster></qui-toaster>
        </qui-story>
      `,
    };
  },
};

type StoryToastButton = StoryObj<StoryToastButtonComponent>;

export const ToastButton: StoryToastButton = {
  args: {
    title: 'File uploaded',
    description: 'invoice.pdf has been uploaded successfully.',
    variant: 'default',
  } as never,
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <story-toast-button [title]="title" [description]="description" [variant]="variant"></story-toast-button>
        <qui-toaster></qui-toaster>
      </qui-story>
    `,
  }),
};

type StoryToastAction = StoryObj<StoryToastActionComponent>;

export const ToastAction: StoryToastAction = {
  args: {},
  decorators: [moduleMetadata({ imports: [StoryToastActionComponent] })],
  render: () => ({
    template: `
      <qui-story>
        <story-toast-action></story-toast-action>
      </qui-story>
    `,
  }),
};

export const Composition: StoryDefault = {
  render: () => ({
    template: `
    <qui-story>
      <div style="width: 400px; padding: var(--spacing-6); background-color: var(--color-muted); border-radius: var(--border-radius-lg); box-sizing: border-box;">
        <h3 style="margin: 0 0 var(--spacing-1);">Documents</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg); font-size: var(--font-size-sm);">Upload a file to attach it to this record.</p>
        <story-toast-button title="File uploaded" description="invoice.pdf has been uploaded successfully." variant="default"></story-toast-button>
      </div>
      <qui-toaster></qui-toaster>
    </qui-story>
    `,
  }),
};
