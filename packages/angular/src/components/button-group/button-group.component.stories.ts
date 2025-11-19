import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import { ButtonGroupComponent } from './button-group.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<ButtonGroupComponent> = {
  title: 'Components/Actions/Button Group',
  component: ButtonGroupComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, StoryComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<ButtonGroupComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <div pui-button-group>
          <button pui-button variant="outline">Button 1</button>
          <button pui-button variant="outline">Button 2</button>
          <button pui-button variant="outline">Button 3</button>
        </div>
      </pui-story>
    `,
  }),
};
