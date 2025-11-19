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
    Action
  </button>`,
})
export class StoryToastActionComponent {
  handleClick() {
    alert('Action clicked');
  }
}

@Component({
  selector: 'story-toast-button',
  standalone: true,
  imports: [ButtonComponent],
  template: `<button qui-button (click)="showToast()">Show Toast</button>`,
})
export class StoryToastButtonComponent {
  @Input() title = 'Sample Toast';
  @Input() description = 'This is a sample toast message.';
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
    title: 'Sample Toast',
    description: 'This is a sample toast message.',
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
    title: 'Sample Toast',
    description: 'This is a sample toast message.',
    variant: 'default',
  } as never,
};

type StoryToastAction = StoryObj<StoryToastActionComponent>;

export const ToastAction: StoryToastAction = {
  args: {},
};
