import React from "react";
import styled from "styled-components";
import { cn } from "@/lib/utils";

const StyledHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--spacing-24);
  max-width: var(--columns-7xl);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);

  @media (min-width: 640px) {
    margin-top: var(--spacing-32);
    padding-left: var(--spacing-6);
    padding-right: var(--spacing-6);
  }

  @media (min-width: 1024px) {
    margin-top: var(--spacing-40);
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }

  &.py-6 {
    padding-top: var(--spacing-6) !important;
    padding-bottom: var(--spacing-6) !important;
  }
`;

const StyledHeaderTagline = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-muted-fg);
`;

const StyledHeaderTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-background-fg);

  @media (min-width: 1280px) {
    font-size: var(--font-size-5xl);
  }
`;

const StyledHeaderBody = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-muted-fg);
`;

const StyledHeaderContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: var(--columns-4xl);
  flex-direction: column;
  gap: var(--spacing-7);

  &.text-center {
    text-align: center !important;
  }
  &.max-w-6xl {
    max-width: var(--columns-6xl) !important;
  }
  &.py-24 {
    padding-top: var(--spacing-24) !important;
    padding-bottom: var(--spacing-24) !important;
  }
  &.justify-between {
    justify-content: space-between !important;
  }
  &.gap-x-6 {
    gap: var(--spacing-6) !important;
  }

  @media (min-width: 1280px) {
    &[class*="xl:flex-row"] {
      flex-direction: row !important;
    }
    &[class*="xl:items-center"] {
      align-items: center !important;
    }
  }
`;

const StyledHeaderActions = styled.div`
  margin-right: auto;
  display: flex;
  gap: var(--spacing-8);

  &.mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  &.flex-col {
    flex-direction: column !important;
  }
  &.space-x-0 > * + * {
    margin-left: 0 !important;
  }
`;

const StyledHeaderBackdrop = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledHeaderBackdropImage = styled.img`
  position: absolute;
  z-index: -10;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

export const Header = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeader ref={ref} className={className} {...props}>
      {children}
    </StyledHeader>
  );
});
Header.displayName = "Header";

export const HeaderTagline = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeaderTagline ref={ref} className={className} {...props}>
      {children}
    </StyledHeaderTagline>
  );
});
HeaderTagline.displayName = "HeaderTagline";

export const HeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeaderTitle ref={ref} className={className} {...props}>
      {children}
    </StyledHeaderTitle>
  );
});
HeaderTitle.displayName = "HeaderTitle";

export const HeaderBody = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeaderBody ref={ref} className={className} {...props}>
      {children}
    </StyledHeaderBody>
  );
});
HeaderBody.displayName = "HeaderBody";

export const HeaderContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeaderContent ref={ref} className={className} {...props}>
      {children}
    </StyledHeaderContent>
  );
});
HeaderContent.displayName = "HeaderContent";

export const HeaderActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeaderActions ref={ref} className={className} {...props}>
      {children}
    </StyledHeaderActions>
  );
});
HeaderActions.displayName = "HeaderActions";

export const HeaderBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeaderBackdrop ref={ref} className={className} {...props}>
      {children}
    </StyledHeaderBackdrop>
  );
});
HeaderBackdrop.displayName = "HeaderBackdrop";

export const HeaderBackdropImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return (
    <StyledHeaderBackdropImage
      ref={ref}
      loading="lazy"
      src="https://dummyimage.com/1920x1200/d4d4d4/171717"
      alt="hero image"
      aria-hidden="true"
      className={className}
      {...props}
    />
  );
});
HeaderBackdropImage.displayName = "HeaderBackdropImage";
