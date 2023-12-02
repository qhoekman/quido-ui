import { Button } from "@/components/button/button";
import {
  CTA,
  CTAActions,
  CTASubtitle,
  CTATitle,
} from "@/features/websites/components/cta-1/cta";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Website/Components/CTA 1",
  component: CTA,
} satisfies Meta<typeof CTA>;

export const Default: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTATitle>Get in touch</CTATitle>
    <CTASubtitle>
      We are here to help you with any questions you may have
    </CTASubtitle>
    <CTAActions>
      <Button asChild>
        <a href="#">Contact us</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#">Learn more</a>
      </Button>
    </CTAActions>
  </CTA>
);
