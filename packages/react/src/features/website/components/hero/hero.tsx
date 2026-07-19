import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const heroStyles = css`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  align-items: center;
  gap: var(--spacing-14);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const StyledHero = styled.div`
  ${heroStyles}
`;

const heroTaglineStyles = css`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: hsl(from var(--color-background-fg) h s l / 80%);
  margin: 0;
`;

const StyledHeroTagline = styled.span`
  ${heroTaglineStyles}
`;

const heroTitleStyles = css`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-background-fg);
  margin: 0;

  @media (min-width: 1280px) {
    font-size: var(--font-size-5xl);
  }
`;

const StyledHeroTitle = styled.h1`
  ${heroTitleStyles}
`;

const heroBodyStyles = css`
  font-size: var(--font-size-lg);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  margin: 0;
`;

const StyledHeroBody = styled.p`
  ${heroBodyStyles}
`;

const heroActionsStyles = css`
  display: flex;
  gap: var(--spacing-8);
`;

const StyledHeroActions = styled.div`
  ${heroActionsStyles}
`;

const heroSectionStyles = css`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--columns-2xl);
`;

const StyledHeroSection = styled.div`
  ${heroSectionStyles}
`;

const heroBackdropStyles = css`
  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledHeroBackdrop = styled.div`
  ${heroBackdropStyles}
`;

const heroBackdropImageStyles = css`
  position: absolute;
  z-index: -10;
  height: 100%;
  max-height: 90vh;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const StyledHeroBackdropImage = styled.img`
  ${heroBackdropImageStyles}
`;

const heroCoverImageStyles = css`
  height: 100%;
  max-height: 30vh;
  width: 100%;
  object-fit: cover;
`;

const StyledHeroCoverImage = styled.img`
  ${heroCoverImageStyles}
`;

const heroDiagonalShapeStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(-1 * var(--spacing-10));
  display: none;
  height: 100%;
  width: var(--spacing-44);
  transform: translateZ(0);
  fill: var(--color-white);

  @media (min-width: 1024px) {
    display: block;
  }
`;

const StyledHeroDiagonalShape = styled.svg`
  ${heroDiagonalShapeStyles}
`;

export const Hero = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHero
      ref={ref}
      data-testid="hero"
      className={cx("q-hero", className)}
      {...props}
    >
      {children}
    </StyledHero>
  );
});
Hero.displayName = "Hero";

export const HeroTagline = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeroTagline
      ref={ref}
      data-testid="hero__tagline"
      className={cx("q-hero-tagline", className)}
      {...props}
    >
      {children}
    </StyledHeroTagline>
  );
});
HeroTagline.displayName = "HeroTagline";

export const HeroTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeroTitle
      ref={ref}
      data-testid="hero__title"
      className={cx("q-hero-title", className)}
      {...props}
    >
      {children}
    </StyledHeroTitle>
  );
});
HeroTitle.displayName = "HeroTitle";

export const HeroBody = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeroBody
      ref={ref}
      data-testid="hero__body"
      className={cx("q-hero-body", className)}
      {...props}
    >
      {children}
    </StyledHeroBody>
  );
});
HeroBody.displayName = "HeroBody";

export const HeroActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeroActions
      ref={ref}
      data-testid="hero__actions"
      className={cx("q-hero-actions", className)}
      {...props}
    >
      {children}
    </StyledHeroActions>
  );
});
HeroActions.displayName = "HeroActions";

export const HeroSection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeroSection
      ref={ref}
      data-testid="hero__section"
      className={cx("q-hero-section", className)}
      {...props}
    >
      {children}
    </StyledHeroSection>
  );
});
HeroSection.displayName = "HeroSection";

export const HeroBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <StyledHeroBackdrop
      ref={ref}
      data-testid="hero__backdrop"
      className={cx("q-hero-backdrop", className)}
      {...props}
    />
  );
});
HeroBackdrop.displayName = "HeroBackdrop";

export const HeroBackdropImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return (
    <StyledHeroBackdropImage
      ref={ref}
      data-testid="hero__backdrop-image"
      className={cx("q-hero-backdrop-image", className)}
      aria-hidden="true"
      {...props}
    />
  );
});
HeroBackdropImage.displayName = "HeroBackdropImage";

export const HeroCoverImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return (
    <StyledHeroCoverImage
      ref={ref}
      data-testid="hero__cover-image"
      className={cx("q-hero-cover-image", className)}
      loading="lazy"
      aria-hidden="true"
      {...props}
    />
  );
});
HeroCoverImage.displayName = "HeroCoverImage";

export const HeroDiagonalShape = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => {
  return (
    <StyledHeroDiagonalShape
      ref={ref}
      data-testid="hero__diagonal-shape"
      className={cx("q-hero-diagonal-shape", className)}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <polygon points="0,0 90,0 50,100 0,100" />
    </StyledHeroDiagonalShape>
  );
});
HeroDiagonalShape.displayName = "HeroDiagonalShape";
