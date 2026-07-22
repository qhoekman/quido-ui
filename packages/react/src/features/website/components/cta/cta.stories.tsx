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
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Website/Components/CTA",
  component: CTA,
} satisfies Meta<typeof CTA>;

export const Default: StoryObj<typeof CTA> = {
  render: (args) => (
    <CTA {...args}>
      <CTAContent>
        <CTATitle>Ready to dive in?</CTATitle>
        <CTASubtitle>
          Start your free trial today and experience the power of our
          platform.
        </CTASubtitle>
        <CTAActions>
          <Button asChild>
            <a href="#">Get started</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#">Learn more</a>
          </Button>
        </CTAActions>
      </CTAContent>
    </CTA>
  ),
};

export const Composition: StoryObj<typeof CTA> = {
  render: (args) => (
    <CTA {...args}>
      <CTABackdrop
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1280&q=80"
        alt="Team collaborating in a modern office"
        width={1920}
        height={1280}
      />
      <CTAContent
        style={{
          textAlign: "center",
        }}
      >
        <CTATitle
          style={{
            color: "var(--color-white)",
          }}
        >
          Introducing Pulse Analytics
        </CTATitle>
        <CTASubtitle
          style={{
            color: "var(--color-muted-fg)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Real-time insights for your team, wherever you work.
        </CTASubtitle>
        <CTAActions
          style={{
            justifyContent: "center",
          }}
        >
          <Button asChild>
            <a href="#">Start free trial</a>
          </Button>
          <Button
            variant="outline"
            style={{
              color: "var(--color-muted-fg)",
            }}
            asChild
          >
            <a href="#">View pricing</a>
          </Button>
        </CTAActions>
      </CTAContent>
    </CTA>
  ),
};

export const WithLeftContent: StoryObj<typeof CTA> = {
  render: (args) => (
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
  ),
};

export const WithCenteredContent: StoryObj<typeof CTA> = {
  render: (args) => (
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
  ),
};

export const WithBackdrop: StoryObj<typeof CTA> = {
  render: (args) => (
    <CTA {...args}>
      <CTABackdrop
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
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
  ),
};

export const WithFormVertical: StoryObj<typeof CTA> = {
  render: (args) => (
    <CTA {...args}>
      <CTABackdrop
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
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
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
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
              fontSize: "var(--font-size-sm)",
              color: "var(--color-muted-fg)",
            }}
          >
            By clicking Subscribe you&apos;re confirming that you agree with our{" "}
            <a href="#" style={{ textDecoration: "underline" }}>
              Terms and Conditions
            </a>
          </p>
        </CTASection>
      </CTAContent>
    </CTA>
  ),
};

export const WithFormHorizontal: StoryObj<typeof CTA> = {
  render: (args) => (
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
            Subscribe to our newsletter and be the first to know about our
            newest projects and resources.
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
            <a href="#" style={{ textDecoration: "underline" }}>
              Terms and Conditions
            </a>
          </p>
        </CTASection>
      </CTAContent>
    </CTA>
  ),
};

export const WithFormHorizontalBackdrop: StoryObj<typeof CTA> = {
  render: (args) => (
    <CTA {...args}>
      <CTABackdrop
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80"
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
            Subscribe to our newsletter and be the first to know about our
            newest projects and resources.
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
              alignItems: "flex-start",
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
              fontSize: "var(--font-size-sm)",
              color: "var(--color-muted-fg)",
            }}
          >
            By clicking Subscribe you&apos;re confirming that you agree with our{" "}
            <a href="#" style={{ textDecoration: "underline" }}>
              Terms and Conditions
            </a>
          </p>
        </CTASection>
      </CTAContent>
    </CTA>
  ),
};
