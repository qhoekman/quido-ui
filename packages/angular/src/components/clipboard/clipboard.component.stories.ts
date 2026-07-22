import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { IconCopyComponent } from '../../icons';
import { ButtonComponent } from '../button/button.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Actions/Clipboard',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent,
        ClipboardModule,
        IconCopyComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <button qui-button variant="outline" size="md" cdkCopyToClipboard="Hello World">
          <i qui-icon name="copy" size="md"></i>
        </button>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-4); padding: var(--spacing-3) var(--spacing-4); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-md); width: 420px;">
          <code style="font-family: var(--font-family-mono);">npm install @quido-ui/angular</code>
          <button qui-button variant="ghost" size="icon" cdkCopyToClipboard="npm install @quido-ui/angular">
            <i qui-icon name="copy" size="md"></i>
          </button>
        </div>
      </qui-story>
    `,
  }),
};

export const WithText: Story = {
  render: () => ({
    template: `
      <qui-story>
        <button qui-button variant="outline" size="md" cdkCopyToClipboard="Copy this text to clipboard">
          <i qui-icon name="copy" size="md"></i>
        </button>
      </qui-story>
    `,
  }),
};

export const Small: Story = {
  render: () => ({
    template: `
      <qui-story>
        <button qui-button variant="outline" size="sm" cdkCopyToClipboard="Small clipboard button">
          <i qui-icon name="copy" size="sm"></i>
        </button>
      </qui-story>
    `,
  }),
};

export const Large: Story = {
  render: () => ({
    template: `
      <qui-story>
        <button qui-button variant="outline" size="lg" cdkCopyToClipboard="Large clipboard button">
          <i qui-icon name="copy" size="lg"></i>
        </button>
      </qui-story>
    `,
  }),
};

export const IconOnly: Story = {
  render: () => ({
    template: `
      <qui-story>
        <button qui-button variant="outline" size="icon" cdkCopyToClipboard="Icon only clipboard">
          <i qui-icon name="copy" size="md"></i>
        </button>
      </qui-story>
    `,
  }),
};

export const Primary: Story = {
  render: () => ({
    template: `
      <qui-story>
        <button qui-button variant="primary" size="md" cdkCopyToClipboard="Primary variant">
          <i qui-icon name="copy" size="md"></i>
        </button>
      </qui-story>
    `,
  }),
};

export const Ghost: Story = {
  render: () => ({
    template: `
      <qui-story>
        <button qui-button variant="ghost" size="md" cdkCopyToClipboard="Ghost variant">
          <i qui-icon name="copy" size="md"></i>
        </button>
      </qui-story>
    `,
  }),
};
