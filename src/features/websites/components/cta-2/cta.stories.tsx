import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import {
  CTA,
  CTABackdrop,
  CTAContent,
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
    <CTAContent>
      <CTASection className="text-center xl:text-left">
        <CTATitle>Get up-to-date</CTATitle>
        <CTASubtitle>
          Subscribe to our newsletter and be the first to know about our newest
          projects and resources.
        </CTASubtitle>
      </CTASection>

      <CTASection className="max-w-md">
        <div className="flex items-start gap-x-4">
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
    </CTAContent>
  </CTA>
);

export const WithBackdrop: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTABackdrop
      src="https://dummyimage.com/1920x1280/d4d4d4/171717"
      alt="cta"
      width={1920}
      height={1280}
    />

    <CTAContent className="bg-transparent">
      <CTASection className="text-center xl:text-left">
        <CTATitle className="text-white">Get up-to-date</CTATitle>
        <CTASubtitle className="text-neutral-200">
          Subscribe to our newsletter and be the first to know about our newest
          projects and resources.
        </CTASubtitle>
      </CTASection>

      <CTASection className="max-w-md">
        <div className="flex items-start gap-x-4">
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

        <p className="mt-4 text-sm text-neutral-200 md:mt-3">
          By clicking Subscribe you&apos;re confirming that you agree with our{" "}
          <a href="#" className="underline">
            Terms and Conditions
          </a>
        </p>
      </CTASection>
    </CTAContent>
  </CTA>
);
