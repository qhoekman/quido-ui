import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  align-items: center;
  gap: var(--spacing-14);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const StyledHeroTagline = styled.span`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-muted-fg);
`;

const StyledHeroTitle = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-background-fg);

  @media (min-width: 1280px) {
    font-size: var(--font-size-5xl);
  }
`;

const StyledHeroBody = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-muted-fg);
`;

const StyledHeroActions = styled.div`
  display: flex;
  gap: var(--spacing-8);
`;

const StyledHeroSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--columns-2xl);
`;

const StyledHeroBackdrop = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledHeroBackdropImage = styled.img`
  position: absolute;
  z-index: -10;
  height: 100%;
  max-height: 90vh;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const StyledHeroCoverImage = styled.img`
  height: 100%;
  max-height: 30vh;
  width: 100%;
  object-fit: cover;
`;

const StyledHeroDiagonalShape = styled.svg`
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

export const Hero = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHero ref={ref} className={className} {...props}>
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
    <StyledHeroTagline ref={ref} className={className} {...props}>
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
    <StyledHeroTitle ref={ref} className={className} {...props}>
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
    <StyledHeroBody ref={ref} className={className} {...props}>
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
    <StyledHeroActions ref={ref} className={className} {...props}>
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
    <StyledHeroSection ref={ref} className={className} {...props}>
      {children}
    </StyledHeroSection>
  );
});
HeroSection.displayName = "HeroSection";

export const HeroBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return <StyledHeroBackdrop ref={ref} className={className} {...props} />;
});
HeroBackdrop.displayName = "HeroBackdrop";

export const HeroBackdropImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return (
    <StyledHeroBackdropImage
      ref={ref}
      className={className}
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
      className={className}
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
      className={className}
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
