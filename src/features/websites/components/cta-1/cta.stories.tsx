import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import {
  CTA,
  CTAActions,
  CTABackdrop,
  CTAContent,
  CTASection,
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
    <CTAContent className="bg-neutral-100">
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
    </CTAContent>
  </CTA>
);

export const Centered: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTAContent className="text-center bg-neutral-100">
      <CTATitle>Get in touch</CTATitle>
      <CTASubtitle className="mx-auto">
        We are here to help you with any questions you may have
      </CTASubtitle>
      <CTAActions className="justify-center sm:mx-auto">
        <Button asChild>
          <a href="#">Contact us</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#">Learn more</a>
        </Button>
      </CTAActions>
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
    <CTAContent>
      <CTATitle className="text-white">Get in touch</CTATitle>
      <CTASubtitle className="text-neutral-100">
        We are here to help you with any questions you may have
      </CTASubtitle>
      <CTAActions>
        <Button asChild>
          <a href="#">Contact us</a>
        </Button>
        <Button variant="outline" className="text-neutral-100" asChild>
          <a href="#">Learn more</a>
        </Button>
      </CTAActions>
    </CTAContent>
  </CTA>
);

export const WithForm: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTABackdrop
      src="https://dummyimage.com/1920x1280/d4d4d4/171717"
      alt="cta"
      width={1920}
      height={1280}
    />
    <CTAContent>
      <CTATitle className="text-white">Get in touch</CTATitle>
      <CTASubtitle className="text-neutral-100">
        We are here to help you with any questions you may have
      </CTASubtitle>

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
