import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { LabelComponent } from '../label/label.component';
import { StackComponent } from '../stack/stack.component';
import { CardContentComponent } from './card-content.component';
import { CardDescriptionComponent } from './card-description.component';
import { CardFooterComponent } from './card-footer.component';
import { CardHeaderComponent } from './card-header.component';
import { CardTitleComponent } from './card-title.component';
import { CardComponent } from './card.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Data Display/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CardComponent,
        CardHeaderComponent,
        CardTitleComponent,
        CardDescriptionComponent,
        CardContentComponent,
        CardFooterComponent,
        ButtonComponent,
        LabelComponent,
        InputComponent,
        StackComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <pui-story>
        <div pui-card style="width: var(--breakpoint-xs)">
          <div pui-card-header>
            <h3 pui-card-title>Add item</h3>
            <p pui-card-description>You can add items to your recipe.</p>
        </div>
        <div pui-card-content>
          <div pui-stack direction="column" gap="sm">
            <label pui-label>Name</label>
            <input pui-input />
            </div>
          </div>
          <div pui-card-footer>
            <button pui-button>Add</button>
          </div>
          </div>
        </pui-story>
      `,
  }),
};
