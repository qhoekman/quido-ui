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
      <qui-story>
        <div qui-card style="width: 350px">
          <div qui-card-header>
            <h3 qui-card-title>Create project</h3>
            <p qui-card-description>Deploy your new project in one-click.</p>
        </div>
        <div qui-card-content>
          <div qui-stack direction="column" gap="md">
            <div qui-stack direction="column" gap="sm">
              <label qui-label>Name</label>
              <input qui-input placeholder="Name of your project" />
            </div>
            <div qui-stack direction="column" gap="sm">
              <label qui-label>Framework</label>
              <input qui-input placeholder="..." />
            </div>
            </div>
          </div>
          <div qui-card-footer style="display: flex; justify-content: space-between;">
            <button qui-button variant="outline">Cancel</button>
            <button qui-button>Deploy</button>
          </div>
          </div>
        </qui-story>
      `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div qui-card style="width: 350px">
          <div qui-card-header>
            <h3 qui-card-title>Team members</h3>
            <p qui-card-description>Invite your team to collaborate on this project.</p>
          </div>
          <div qui-card-content>
            <div qui-stack direction="column" gap="sm">
              <div style="display: flex; justify-content: space-between;">
                <span>Jane Doe</span>
                <span style="color: var(--color-muted-fg);">Owner</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>Marcus Lee</span>
                <span style="color: var(--color-muted-fg);">Editor</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>Priya Nair</span>
                <span style="color: var(--color-muted-fg);">Viewer</span>
              </div>
            </div>
          </div>
          <div qui-card-footer>
            <button qui-button variant="outline" style="width: 100%;">Invite member</button>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
