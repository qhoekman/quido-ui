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
      imports: [ButtonComponent, ClipboardModule, IconCopyComponent, StoryComponent],
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
      <pui-story>
        <button pui-button variant="outline" cdkCopyToClipboard="Hello World">
          <i pui-icon name="copy" size="lg"></i>
        </button>
      </pui-story>
    `,
  }),
};
