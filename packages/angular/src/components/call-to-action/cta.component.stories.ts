import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CTAComponent } from './cta.component';
import { CTAContentComponent } from './cta-content.component';
import { CTASectionComponent } from './cta-section.component';
import { CTATitleComponent } from './cta-title.component';
import { CTASubtitleComponent } from './cta-subtitle.component';
import { CTAActionsComponent } from './cta-actions.component';
import { CTABackdropComponent } from './cta-backdrop.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<CTAComponent> = {
  title: 'Components/Layout/Call To Action',
  component: CTAComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CTAComponent,
        CTAContentComponent,
        CTASectionComponent,
        CTATitleComponent,
        CTASubtitleComponent,
        CTAActionsComponent,
        CTABackdropComponent,
        ButtonComponent,
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<CTAComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div pui-cta>
        <div pui-cta-content>
          <div pui-cta-section>
            <h2 pui-cta-title>Ready to dive in?</h2>
            <p pui-cta-subtitle>
              Start your free trial today and experience the power of our platform.
            </p>
            <div pui-cta-actions>
              <button pui-button>Get started</button>
              <button pui-button variant="outline">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
