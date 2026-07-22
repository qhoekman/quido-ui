import FooterComponent from "./footer.vue";
import FooterContentComponent from "./footer-content.vue";
import FooterColumnsComponent from "./footer-columns.vue";
import FooterColumnComponent from "./footer-column.vue";
import FooterHeadingComponent from "./footer-heading.vue";
import FooterColumnListComponent from "./footer-column-list.vue";
import FooterColumnListItemComponent from "./footer-column-list-item.vue";
import FooterSectionComponent from "./footer-section.vue";
import FooterBannerComponent from "./footer-banner.vue";
import FooterBannerListComponent from "./footer-banner-list.vue";
import FooterBannerListItemComponent from "./footer-banner-list-item.vue";
import FooterCopyrightComponent from "./footer-copyright.vue";
import FooterLinkComponent from "./footer-link.vue";
import ButtonComponent from "@/components/button/button.vue";
import InputComponent from "@/components/input/input.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Features/Website/Components/Footer",
  component: FooterComponent,
  argTypes: {
    asChild: {
      control: "boolean",
    },
  },
  args: {
    asChild: false,
  },
  render: (args) => ({
    components: {
      FooterComponent,
      FooterContentComponent,
      FooterColumnsComponent,
      FooterColumnComponent,
      FooterHeadingComponent,
      FooterColumnListComponent,
      FooterColumnListItemComponent,
      FooterSectionComponent,
      FooterBannerComponent,
      FooterBannerListComponent,
      FooterBannerListItemComponent,
      FooterCopyrightComponent,
      FooterLinkComponent,
      ButtonComponent,
      InputComponent,
    },
    setup() {
      return { args };
    },
    template: `
      <FooterComponent v-bind="args">
        <FooterContentComponent>
          <FooterColumnsComponent>
            <FooterColumnComponent class="mt-0">
              <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Company name</span>
              <svg viewBox="0 0 167 41" height="32px" aria-label="Company name"><path fill-rule="nonzero" d="M48.631 28.794h11.952v-3.6h-7.704v-13.56h-4.248v17.16zM67.664 26.394c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM81.094 33.042c1.824 0 3.432-.408 4.512-1.368.984-.888 1.632-2.232 1.632-4.08V16.506h-3.744v1.32h-.048c-.72-1.032-1.824-1.68-3.456-1.68-3.048 0-5.16 2.544-5.16 6.144 0 3.768 2.568 5.832 5.328 5.832 1.488 0 2.424-.6 3.144-1.416h.096v1.224c0 1.488-.696 2.352-2.352 2.352-1.296 0-1.944-.552-2.16-1.2h-3.792c.384 2.568 2.616 3.96 6 3.96zm-.024-7.824c-1.464 0-2.424-1.2-2.424-3.048 0-1.872.96-3.072 2.424-3.072 1.632 0 2.496 1.392 2.496 3.048 0 1.728-.792 3.072-2.496 3.072zM94.937 26.394c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM102.655 28.794h3.912V16.506h-3.912v12.288zm0-13.992h3.912v-3.168h-3.912v3.168zM108.264 32.85h3.912v-5.328h.048c.768 1.032 1.896 1.656 3.48 1.656 3.216 0 5.352-2.544 5.352-6.528 0-3.696-1.992-6.504-5.256-6.504-1.68 0-2.88.744-3.72 1.848h-.072v-1.488h-3.744V32.85zm6.432-6.696c-1.68 0-2.64-1.368-2.64-3.36 0-1.992.864-3.504 2.568-3.504 1.68 0 2.472 1.392 2.472 3.504 0 2.088-.912 3.36-2.4 3.36zM127.426 29.178c3.216 0 5.592-1.392 5.592-4.08 0-3.144-2.544-3.696-4.704-4.056-1.56-.288-2.952-.408-2.952-1.272 0-.768.744-1.128 1.704-1.128 1.08 0 1.824.336 1.968 1.44h3.6c-.192-2.424-2.064-3.936-5.544-3.936-2.904 0-5.304 1.344-5.304 3.936 0 2.88 2.28 3.456 4.416 3.816 1.632.288 3.12.408 3.12 1.512 0 .792-.744 1.224-1.92 1.224-1.296 0-2.112-.6-2.256-1.824h-3.696c.12 2.712 2.376 4.368 5.976 4.368zM138.331 29.154c1.704 0 2.784-.672 3.672-1.872h.072v1.512h3.744V16.506h-3.912v6.864c0 1.464-.816 2.472-2.16 2.472-1.248 0-1.848-.744-1.848-2.088v-7.248h-3.888v8.064c0 2.736 1.488 4.584 4.32 4.584zM147.521 28.794h3.912v-6.888c0-1.464.72-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-6.888c0-1.464.696-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-7.992c0-2.76-1.392-4.656-4.176-4.656-1.584 0-2.904.672-3.864 2.16h-.048c-.624-1.32-1.848-2.16-3.456-2.16-1.776 0-2.952.84-3.72 2.112h-.072v-1.752h-3.744v12.288z"></path><path d="M8.654 3.891a20.168 20.168 0 00-3.847 3.515c4.589-.426 10.42.27 17.189 3.654 7.228 3.614 13.049 3.737 17.1 2.955a19.842 19.842 0 00-1.378-3.199c-4.638.489-10.583-.158-17.511-3.622-4.4-2.2-8.278-3.106-11.553-3.303zM35.009 6.96A19.952 19.952 0 0020.101.294c-1.739 0-3.427.222-5.036.639 2.179.595 4.494 1.465 6.931 2.683 5.072 2.536 9.452 3.353 13.013 3.344zm4.953 10.962c-4.894.966-11.652.768-19.755-3.284-7.576-3.788-13.605-3.74-17.672-2.836-.21.046-.415.095-.615.146a19.9 19.9 0 00-1.262 3.64c.326-.087.662-.17 1.01-.247 4.933-1.096 11.903-1.049 20.328 3.164 7.575 3.787 13.605 3.74 17.672 2.836.139-.031.276-.063.411-.096a20.186 20.186 0 00-.117-3.323zm-.536 7.544c-4.846.847-11.408.522-19.219-3.384-7.576-3.787-13.605-3.74-17.672-2.836-.902.2-1.714.445-2.431.703-.002.114-.003.229-.003.345 0 11.045 8.955 20 20 20 9.258 0 17.046-6.289 19.325-14.828z"></path></svg>
            </FooterColumnComponent>
            <FooterColumnComponent>
              <FooterHeadingComponent>Company</FooterHeadingComponent>
              <FooterColumnListComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">About</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Blog</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Jobs</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Press</FooterLinkComponent>
                </FooterColumnListItemComponent>
              </FooterColumnListComponent>
            </FooterColumnComponent>
            <FooterColumnComponent>
              <FooterHeadingComponent>Support</FooterHeadingComponent>
              <FooterColumnListComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Pricing</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Documentation</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Guides</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">API Status</FooterLinkComponent>
                </FooterColumnListItemComponent>
              </FooterColumnListComponent>
            </FooterColumnComponent>
            <FooterColumnComponent>
              <FooterHeadingComponent>Product</FooterHeadingComponent>
              <FooterColumnListComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Features</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Integrations</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Pricing</FooterLinkComponent>
                </FooterColumnListItemComponent>
                <FooterColumnListItemComponent>
                  <FooterLinkComponent href="#" rel="noopener noreferrer" target="_blank">Examples</FooterLinkComponent>
                </FooterColumnListItemComponent>
              </FooterColumnListComponent>
            </FooterColumnComponent>
          </FooterColumnsComponent>
          <FooterSectionComponent>
            <FooterHeadingComponent>Newsletter</FooterHeadingComponent>
            <p style="font-size: var(--font-size-sm); color: hsl(from var(--color-background-fg) h s l / 66%); margin: 0;">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div style="display: flex; align-items: start; gap: var(--spacing-4);">
              <label for="email-address" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Email address</label>
              <InputComponent
                autocomplete="email"
                id="email-address"
                name="email"
                placeholder="Enter your email"
                required
                type="email"
              />
              <ButtonComponent type="submit">Subscribe</ButtonComponent>
            </div>
            <div style="max-width: var(--breakpoint-md);">
              <p style="font-size: var(--font-size-xs); color: hsl(from var(--color-background-fg) h s l / 55%); margin: 0;">
                By subscribing you agree to with our
                <a href="#" style="font-size: var(--font-size-xs); color: hsl(from var(--color-background-fg) h s l / 55%); text-decoration: underline;">Privacy Policy</a>
                and provide consent to receive updates from our company.
              </p>
            </div>
          </FooterSectionComponent>
        </FooterContentComponent>
        <FooterBannerComponent>
          <FooterBannerListComponent>
            <FooterCopyrightComponent>© 2020 Your Company, Inc. All rights reserved.</FooterCopyrightComponent>
            <FooterLinkComponent href="#">Privacy Policy</FooterLinkComponent>
            <FooterLinkComponent href="#">Terms of Service</FooterLinkComponent>
            <FooterLinkComponent href="#">Cookies</FooterLinkComponent>
          </FooterBannerListComponent>
          <FooterBannerListComponent as="ul">
            <FooterBannerListItemComponent>
              <FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);">
                <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Facebook</span>
                <svg style="height: var(--spacing-6); width: var(--spacing-6);" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/></svg>
              </FooterLinkComponent>
            </FooterBannerListItemComponent>
            <FooterBannerListItemComponent>
              <FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);">
                <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Instagram</span>
                <svg style="height: var(--spacing-6); width: var(--spacing-6);" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/></svg>
              </FooterLinkComponent>
            </FooterBannerListItemComponent>
            <FooterBannerListItemComponent>
              <FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);">
                <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">X</span>
                <svg style="height: var(--spacing-6); width: var(--spacing-6);" fill="currentColor" viewBox="0 0 300 271" aria-hidden="true"><path d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6L236 0zm-16.1 244h25.5L80.4 26H53l166.9 218z"/></svg>
              </FooterLinkComponent>
            </FooterBannerListItemComponent>
            <FooterBannerListItemComponent>
              <FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);">
                <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">LinkedIn</span>
                <svg style="height: var(--spacing-6); width: var(--spacing-6);" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="nonzero" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/></svg>
              </FooterLinkComponent>
            </FooterBannerListItemComponent>
            <FooterBannerListItemComponent>
              <FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);">
                <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">YouTube</span>
                <svg style="height: var(--spacing-6); width: var(--spacing-6);" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd"/></svg>
              </FooterLinkComponent>
            </FooterBannerListItemComponent>
          </FooterBannerListComponent>
        </FooterBannerComponent>
      </FooterComponent>
    `,
  }),
} satisfies Meta<typeof FooterComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithColumns: Story = {};

export const Composition: Story = {
  render: () => ({
    components: {
      FooterComponent,
      FooterContentComponent,
      FooterBannerComponent,
      FooterCopyrightComponent,
      FooterLinkComponent
    },
    template: `
      <FooterComponent>
        <FooterContentComponent>
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--spacing-4);">
            <div style="display: flex; align-items: center; gap: var(--spacing-3);">
              <svg viewBox="0 0 167 41" height="24px" fill="var(--color-primary)" aria-label="Pulse Analytics"><path fill-rule="nonzero" d="M48.631 28.794h11.952v-3.6h-7.704v-13.56h-4.248v17.16zM67.664 26.394c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM81.094 33.042c1.824 0 3.432-.408 4.512-1.368.984-.888 1.632-2.232 1.632-4.08V16.506h-3.744v1.32h-.048c-.72-1.032-1.824-1.68-3.456-1.68-3.048 0-5.16 2.544-5.16 6.144 0 3.768 2.568 5.832 5.328 5.832 1.488 0 2.424-.6 3.144-1.416h.096v1.224c0 1.488-.696 2.352-2.352 2.352-1.296 0-1.944-.552-2.16-1.2h-3.792c.384 2.568 2.616 3.96 6 3.96zm-.024-7.824c-1.464 0-2.424-1.2-2.424-3.048 0-1.872.96-3.072 2.424-3.072 1.632 0 2.496 1.392 2.496 3.048 0 1.728-.792 3.072-2.496 3.072zM94.937 26.394c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM102.655 28.794h3.912V16.506h-3.912v12.288zm0-13.992h3.912v-3.168h-3.912v3.168zM108.264 32.85h3.912v-5.328h.048c.768 1.032 1.896 1.656 3.48 1.656 3.216 0 5.352-2.544 5.352-6.528 0-3.696-1.992-6.504-5.256-6.504-1.68 0-2.88.744-3.72 1.848h-.072v-1.488h-3.744V32.85zm6.432-6.696c-1.68 0-2.64-1.368-2.64-3.36 0-1.992.864-3.504 2.568-3.504 1.68 0 2.472 1.392 2.472 3.504 0 2.088-.912 3.36-2.4 3.36zM127.426 29.178c3.216 0 5.592-1.392 5.592-4.08 0-3.144-2.544-3.696-4.704-4.056-1.56-.288-2.952-.408-2.952-1.272 0-.768.744-1.128 1.704-1.128 1.08 0 1.824.336 1.968 1.44h3.6c-.192-2.424-2.064-3.936-5.544-3.936-2.904 0-5.304 1.344-5.304 3.936 0 2.88 2.28 3.456 4.416 3.816 1.632.288 3.12.408 3.12 1.512 0 .792-.744 1.224-1.92 1.224-1.296 0-2.112-.6-2.256-1.824h-3.696c.12 2.712 2.376 4.368 5.976 4.368zM138.331 29.154c1.704 0 2.784-.672 3.672-1.872h.072v1.512h3.744V16.506h-3.912v6.864c0 1.464-.816 2.472-2.16 2.472-1.248 0-1.848-.744-1.848-2.088v-7.248h-3.888v8.064c0 2.736 1.488 4.584 4.32 4.584zM147.521 28.794h3.912v-6.888c0-1.464.72-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-6.888c0-1.464.696-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-7.992c0-2.76-1.392-4.656-4.176-4.656-1.584 0-2.904.672-3.864 2.16h-.048c-.624-1.32-1.848-2.16-3.456-2.16-1.776 0-2.952.84-3.72 2.112h-.072v-1.752h-3.744v12.288z"></path><path d="M8.654 3.891a20.168 20.168 0 00-3.847 3.515c4.589-.426 10.42.27 17.189 3.654 7.228 3.614 13.049 3.737 17.1 2.955a19.842 19.842 0 00-1.378-3.199c-4.638.489-10.583-.158-17.511-3.622-4.4-2.2-8.278-3.106-11.553-3.303zM35.009 6.96A19.952 19.952 0 0020.101.294c-1.739 0-3.427.222-5.036.639 2.179.595 4.494 1.465 6.931 2.683 5.072 2.536 9.452 3.353 13.013 3.344zm4.953 10.962c-4.894.966-11.652.768-19.755-3.284-7.576-3.788-13.605-3.74-17.672-2.836-.21.046-.415.095-.615.146a19.9 19.9 0 00-1.262 3.64c.326-.087.662-.17 1.01-.247 4.933-1.096 11.903-1.049 20.328 3.164 7.575 3.787 13.605 3.74 17.672 2.836.139-.031.276-.063.411-.096a20.186 20.186 0 00-.117-3.323zm-.536 7.544c-4.846.847-11.408.522-19.219-3.384-7.576-3.787-13.605-3.74-17.672-2.836-.902.2-1.714.445-2.431.703-.002.114-.003.229-.003.345 0 11.045 8.955 20 20 20 9.258 0 17.046-6.289 19.325-14.828z"></path></svg>
              <span style="font-size: var(--font-size-sm); color: var(--color-muted-fg);">Real-time analytics for modern teams.</span>
            </div>
            <ul role="list" style="display: flex; gap: var(--spacing-4); list-style: none; margin: 0; padding: 0;">
              <li><FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);"><span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Facebook</span><svg style="height: var(--spacing-5); width: var(--spacing-5);" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/></svg></FooterLinkComponent></li>
              <li><FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);"><span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Instagram</span><svg style="height: var(--spacing-5); width: var(--spacing-5);" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/></svg></FooterLinkComponent></li>
              <li><FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);"><span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">X</span><svg style="height: var(--spacing-5); width: var(--spacing-5);" fill="currentColor" viewBox="0 0 300 271" aria-hidden="true"><path d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6L236 0zm-16.1 244h25.5L80.4 26H53l166.9 218z"/></svg></FooterLinkComponent></li>
              <li><FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);"><span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">LinkedIn</span><svg style="height: var(--spacing-5); width: var(--spacing-5);" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="nonzero" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/></svg></FooterLinkComponent></li>
              <li><FooterLinkComponent href="#" style="display: flex; align-items: center; color: var(--color-muted-fg);"><span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">YouTube</span><svg style="height: var(--spacing-5); width: var(--spacing-5);" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd"/></svg></FooterLinkComponent></li>
            </ul>
          </div>
        </FooterContentComponent>
        <FooterBannerComponent>
          <FooterCopyrightComponent>© 2020 Pulse Analytics, Inc. All rights reserved.</FooterCopyrightComponent>
        </FooterBannerComponent>
      </FooterComponent>
    `
  })
}
