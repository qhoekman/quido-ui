import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import {
  CTA,
  CTASection,
  CTASubtitle,
  CTATitle,
} from "@/features/websites/components/cta-2/cta";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Website/Components/CTA 2",
  component: CTA,
} satisfies Meta<typeof CTA>;

export const Default: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTASection className="text-center xl:text-left">
      <CTATitle>Get up-to-date</CTATitle>
      <CTASubtitle>
        Subscribe to our newsletter and be the first to know about our newest
        projects and resources.
      </CTASubtitle>
    </CTASection>

    <CTASection>
      <div className="flex max-w-md items-start gap-x-4">
        <Label htmlFor="email-address" className="sr-only">
          Email address
        </Label>

        <Input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Enter your email"
        />

        <Button type="submit">Subscribe</Button>
      </div>

      <p className="mt-4 text-sm text-neutral-500 md:mt-3">
        By clicking Subscribe you&apos;re confirming that you agree with our{" "}
        <a href="#" className="underline">
          Terms and Conditions
        </a>
      </p>
    </CTASection>
  </CTA>
);
