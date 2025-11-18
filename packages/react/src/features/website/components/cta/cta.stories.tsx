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
} from "@/features/website/components/cta/cta";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Website/Components/CTA",
  component: CTA,
} satisfies Meta<typeof CTA>;

export const WithLeftContent: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTAContent
      style={{
        backgroundColor: "var(--color-muted)",
      }}
    >
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

export const WithCenteredContent: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTAContent
      style={{
        textAlign: "center",
        backgroundColor: "var(--color-muted)",
      }}
    >
      <CTATitle>Get in touch</CTATitle>
      <CTASubtitle
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        We are here to help you with any questions you may have
      </CTASubtitle>
      <CTAActions
        style={{
          justifyContent: "center",
        }}
      >
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
      <CTATitle
        style={{
          color: "var(--color-white)",
        }}
      >
        Get in touch
      </CTATitle>
      <CTASubtitle
        style={{
          color: "var(--color-muted-fg)",
        }}
      >
        We are here to help you with any questions you may have
      </CTASubtitle>
      <CTAActions>
        <Button asChild>
          <a href="#">Contact us</a>
        </Button>
        <Button
          variant="outline"
          style={{
            color: "var(--color-muted-fg)",
          }}
          asChild
        >
          <a href="#">Learn more</a>
        </Button>
      </CTAActions>
    </CTAContent>
  </CTA>
);

export const WithFormVertical: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTABackdrop
      src="https://dummyimage.com/1920x1280/d4d4d4/171717"
      alt="cta"
      width={1920}
      height={1280}
    />
    <CTAContent>
      <CTATitle
        style={{
          color: "var(--color-white)",
        }}
      >
        Get in touch
      </CTATitle>
      <CTASubtitle
        style={{
          color: "var(--color-muted)",
        }}
      >
        We are here to help you with any questions you may have
      </CTASubtitle>

      <CTASection
        style={{
          maxWidth: "28rem",
        }}
      >
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

        <p className="mt-4 text-sm text-muted-fg md:mt-3">
          By clicking Subscribe you&apos;re confirming that you agree with our{" "}
          <a href="#" className="underline">
            Terms and Conditions
          </a>
        </p>
      </CTASection>
    </CTAContent>
  </CTA>
);

export const WithFormHorizontal: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTAContent
      style={{
        backgroundColor: "hsl(from var(--color-muted) h s l / 10%)",
        gap: "var(--spacing-7)",
      }}
    >
      <CTASection
        style={{
          textAlign: "center",
        }}
      >
        <CTATitle>Get up-to-date</CTATitle>
        <CTASubtitle>
          Subscribe to our newsletter and be the first to know about our newest
          projects and resources.
        </CTASubtitle>
      </CTASection>

      <CTASection
        style={{
          maxWidth: "28rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "start",
            gap: "var(--spacing-4)",
          }}
        >
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

        <p
          style={{
            marginTop: "var(--spacing-4)",
            color: "var(--color-muted-fg)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          By clicking Subscribe you&apos;re confirming that you agree with our{" "}
          <a href="#" className="underline">
            Terms and Conditions
          </a>
        </p>
      </CTASection>
    </CTAContent>
  </CTA>
);

export const WithFormHorizontalBackdrop: StoryFn<typeof CTA> = (args) => (
  <CTA {...args}>
    <CTABackdrop
      src="https://dummyimage.com/1920x1280/d4d4d4/171717"
      alt="cta"
      width={1920}
      height={1280}
    />

    <CTAContent
      style={{
        gap: "var(--spacing-7)",
      }}
    >
      <CTASection
        style={{
          textAlign: "center",
        }}
      >
        <CTATitle
          style={{
            color: "var(--color-white)",
          }}
        >
          Get up-to-date
        </CTATitle>
        <CTASubtitle
          style={{
            color: "var(--color-muted-fg)",
          }}
        >
          Subscribe to our newsletter and be the first to know about our newest
          projects and resources.
        </CTASubtitle>
      </CTASection>

      <CTASection
        style={{
          maxWidth: "28rem",
        }}
      >
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

        <p className="mt-4 text-sm text-muted-fg md:mt-3">
          By clicking Subscribe you&apos;re confirming that you agree with our{" "}
          <a href="#" className="underline">
            Terms and Conditions
          </a>
        </p>
      </CTASection>
    </CTAContent>
  </CTA>
);
