import { Component } from '@angular/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { StackComponent, StackVariants } from './stack.component';
import { StoryComponent } from '../../system/components/story/story.component';

@Component({
  selector: 'sb-box',
  standalone: true,
  styles: [
    `
      :host {
        background-color: var(--color-blue-500);
        color: var(--color-gray-50);
        width: var(--spacing-10);
        height: var(--spacing-10);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-1) var(--spacing-4);
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
})
class BoxComponent {}

type EnhancedStackComponent = StackComponent & {
  numberOfBoxes: number;
};

const meta: Meta<EnhancedStackComponent> = {
  title: 'Components/Layout/Stack',
  component: StackComponent,
  decorators: [
    moduleMetadata({
      imports: [BoxComponent, StoryComponent],
    }),
  ],
  argTypes: {
    gap: {
      control: 'select',
      options: Array<StackVariants['gap']>('sm', 'md', 'lg'),
    },
    direction: {
      control: 'select',
      options: Array<StackVariants['direction']>('row', 'column'),
    },
    numberOfBoxes: {
      control: 'number',
      defaultValue: 5,
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedStackComponent>;

export const Default: Story = {
  args: {
    gap: 'md',
    numberOfBoxes: 5,
    direction: 'row',
  },
  render: (args) => ({
    props: args,
    template: `
    <qui-story>
      <div qui-stack [gap]="gap" [direction]="direction" style="max-width: var(--breakpoint-xs);">
        <sb-box *ngFor="let i of [].constructor(numberOfBoxes); let i = index">
          {{ i + 1 }}
        </sb-box>
      </div>
    </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    props: {
      members: [
        { name: 'Ava Chen', role: 'Product Designer' },
        { name: 'Marcus Reyes', role: 'Frontend Engineer' },
        { name: 'Priya Nair', role: 'Engineering Manager' },
      ],
    },
    template: `
    <qui-story>
      <div qui-stack direction="column" gap="sm" style="width: 320px; box-sizing: border-box;">
        <div
          *ngFor="let member of members"
          style="display: flex; justify-content: space-between; width: 100%; box-sizing: border-box; padding: var(--spacing-2) 0; border-bottom: var(--border-width-default) solid var(--color-border);"
        >
          <span style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">{{ member.name }}</span>
          <span style="font-size: var(--font-size-sm); color: var(--color-muted-fg);">{{ member.role }}</span>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
