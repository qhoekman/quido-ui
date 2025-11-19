import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { CardContentComponent } from '../card/card-content.component';
import { CardDescriptionComponent } from '../card/card-description.component';
import { CardFooterComponent } from '../card/card-footer.component';
import { CardHeaderComponent } from '../card/card-header.component';
import { CardTitleComponent } from '../card/card-title.component';
import { CardComponent } from '../card/card.component';
import { InputComponent } from '../input/input.component';
import { LabelComponent } from '../label/label.component';
import { StackComponent } from '../stack/stack.component';
import { TabsContentComponent } from './tabs-content.component';
import { TabsListComponent } from './tabs-list.component';
import { TabsTriggerComponent } from './tabs-trigger.component';
import { TabsComponent } from './tabs.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<TabsComponent> = {
  title: 'Components/Navigation/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TabsComponent,
        TabsListComponent,
        TabsTriggerComponent,
        TabsContentComponent,
        CardComponent,
        CardContentComponent,
        CardTitleComponent,
        CardDescriptionComponent,
        CardHeaderComponent,
        CardFooterComponent,
        CardContentComponent,
        StackComponent,
        InputComponent,
        LabelComponent,
        ButtonComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-tabs>
          <div qui-tabs-list>
            <button qui-tabs-trigger [tabContentFor]="tabContentAccount">Account</button>
            <button qui-tabs-trigger [tabContentFor]="tabContentPassword">Password</button>
            <button qui-tabs-trigger disabled [tabContentFor]="tabContentDisabled">Disabled</button>
          </div>
          <ng-template #tabContentAccount>
            <div qui-tabs-content>
              <div qui-card>
                <div qui-card-header>
                  <h3 qui-card-title>Account</h3>
                  <p qui-card-description>Make changes to your account here. Click save when you're done.</p>
                </div>
                <div qui-card-content>
                  <div qui-stack>
                    <label qui-label for="name">Name</label>
                    <input qui-input id="name" defaultValue="Pedro Duarte" />
                  </div>
                </div>
                <div qui-card-footer>
                  <button qui-button>Save changes</button>
                </div>
              </div>
            </div>
          </ng-template>
          <ng-template #tabContentPassword>
            <div qui-tabs-content>
              <div qui-card>
                <div qui-card-header>
                  <h3 qui-card-title>Password</h3>
                  <p qui-card-description>Change your password here. After saving, you'll be logged out.</p>
                </div>
                <div qui-card-content>
                  <div qui-stack>
                    <label qui-label for="new">New password</label>
                    <input qui-input id="new" type="password" />
                  </div>
                </div>
                <div qui-card-footer>
                  <button qui-button>Save password</button>
                </div>
              </div>
            </div>
          </ng-template>
          <ng-template #tabContentDisabled>
            <div qui-tabs-content>
              <p>Disabled</p>
            </div>
          </ng-template>
        </div>
      </qui-story>
    `,
  }),
};
