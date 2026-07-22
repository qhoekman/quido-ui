import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import {
  Header,
  HeaderActions,
  HeaderBackdrop,
  HeaderBackdropImage,
  HeaderBody,
  HeaderContent,
  HeaderTagline,
  HeaderTitle,
} from "@/features/website/components/header/header";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Website/Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export const Default: StoryObj = {
  render: (args) => (
    <Header {...args}>
      <HeaderContent>
        <HeaderTagline>Tagline</HeaderTagline>
        <HeaderTitle>Short heading goes here</HeaderTitle>
        <HeaderBody>
          Pulse gives your team real-time visibility into performance, usage,
          and growth — all in one dashboard built for fast-moving companies.
        </HeaderBody>
        <HeaderActions>
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </HeaderActions>
      </HeaderContent>
    </Header>
  ),
};

export const Composition: StoryObj = {
  render: () => (
    <HeaderBackdrop>
      <HeaderBackdropImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1280&q=80" />
      <Header
        style={{
          paddingTop: "var(--spacing-6)",
          paddingBottom: "var(--spacing-6)",
        }}
      >
        <HeaderContent style={{ textAlign: "center" }}>
          <HeaderTagline style={{ color: "var(--color-muted-fg)" }}>
            Now in public beta
          </HeaderTagline>
          <HeaderTitle style={{ color: "var(--color-white)" }}>
            Introducing Pulse Analytics
          </HeaderTitle>
          <HeaderBody style={{ color: "var(--color-muted-fg)" }}>
            Real-time insights for your team, wherever you work. Track
            performance, spot trends, and ship with confidence.
          </HeaderBody>
          <HeaderActions style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Button>Start free trial</Button>
            <Button
              variant="outline"
              style={{ color: "var(--color-white)" }}
            >
              View pricing
            </Button>
          </HeaderActions>
        </HeaderContent>
      </Header>
    </HeaderBackdrop>
  ),
};

export const WithCenteredContent: StoryObj = {
  render: (args) => (
    <Header {...args}>
      <HeaderContent style={{ textAlign: "center" }}>
        <HeaderTagline>Tagline</HeaderTagline>
        <HeaderTitle>Short heading goes here</HeaderTitle>
        <HeaderBody>
          Pulse gives your team real-time visibility into performance, usage,
          and growth — all in one dashboard built for fast-moving companies.
        </HeaderBody>
        <HeaderActions style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </HeaderActions>
      </HeaderContent>
    </Header>
  ),
};

export const WithLeftContent: StoryObj = {
  render: (args) => (
    <Header {...args}>
      <HeaderContent>
        <HeaderTagline>Tagline</HeaderTagline>
        <HeaderTitle>Short heading goes here</HeaderTitle>
        <HeaderBody>
          Pulse gives your team real-time visibility into performance, usage,
          and growth — all in one dashboard built for fast-moving companies.
        </HeaderBody>
        <HeaderActions>
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </HeaderActions>
      </HeaderContent>
    </Header>
  ),
};

export const WithForm: StoryObj = {
  render: (args) => (
    <Header {...args}>
      <HeaderContent>
        <HeaderTagline>Tagline</HeaderTagline>
        <HeaderTitle>Short heading goes here</HeaderTitle>
        <HeaderBody>
          Pulse gives your team real-time visibility into performance, usage,
          and growth — all in one dashboard built for fast-moving companies.
        </HeaderBody>
        <HeaderActions style={{ flexDirection: "column", gap: "0" }}>
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
        </HeaderActions>
      </HeaderContent>
    </Header>
  ),
};

export const WithBackdrop: StoryObj = {
  render: (args) => (
    <HeaderBackdrop>
      <HeaderBackdropImage src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80" />
      <Header
        style={{
          paddingTop: "var(--spacing-6)",
          paddingBottom: "var(--spacing-6)",
        }}
        {...args}
      >
        <HeaderContent style={{ textAlign: "center" }}>
          <HeaderTagline style={{ color: "var(--color-muted-fg)" }}>
            Tagline
          </HeaderTagline>
          <HeaderTitle style={{ color: "var(--color-white)" }}>
            Short heading goes here
          </HeaderTitle>
          <HeaderBody style={{ color: "var(--color-muted-fg)" }}>
            Pulse gives your team real-time visibility into performance,
            usage, and growth — all in one dashboard built for fast-moving
            companies.
          </HeaderBody>
          <HeaderActions style={{ marginLeft: "auto" }}>
            <Button>Get started</Button>
            <Button
              variant="outline"
              style={{ color: "var(--color-white)" }}
            >
              Learn more
            </Button>
          </HeaderActions>
        </HeaderContent>
      </Header>
    </HeaderBackdrop>
  ),
};

export const WithHorizontalContent: StoryObj = {
  render: (args) => (
    <HeaderBackdrop>
      <HeaderBackdropImage src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1280&q=80" />
      <Header {...args}>
        <HeaderContent
          style={{
            maxWidth: "var(--columns-6xl)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "between",
            paddingTop: "var(--spacing-24)",
            paddingBottom: "var(--spacing-24)",
            "@media (min-width: 1024px)": {
              flexDirection: "row",
              alignItems: "center",
              gap: "var(--spacing-6)",
            },
          }}
        >
          <HeaderTitle style={{ color: "var(--color-white)" }}>
            Short heading goes here
          </HeaderTitle>
          <HeaderBody style={{ color: "var(--color-white)" }}>
            Pulse gives your team real-time visibility into performance,
            usage, and growth — all in one dashboard built for fast-moving
            companies.
          </HeaderBody>
        </HeaderContent>
      </Header>
    </HeaderBackdrop>
  ),
};
