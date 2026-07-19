import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const ctaStyles = css`
  position: relative;
  margin-top: var(--spacing-24);
  width: 100%;

  @media (min-width: 640px) {
    margin-top: var(--spacing-32);
  }

  @media (min-width: 1024px) {
    margin-top: var(--spacing-40);
  }
`;

const StyledCTA = styled.div`
  ${ctaStyles}
`;

type CTAProps = React.ComponentPropsWithoutRef<"div">;

const CTA = React.forwardRef<HTMLDivElement, CTAProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <StyledCTA
        ref={ref}
        data-testid="cta"
        className={cx("q-cta", className)}
        {...props}
      >
        {children}
      </StyledCTA>
    );
  }
);
CTA.displayName = "CTA";

const ctaContentOuterStyles = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);

  @media (min-width: 640px) {
    padding-left: var(--spacing-6);
    padding-right: var(--spacing-6);
  }

  @media (min-width: 1024px) {
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
`;

const StyledCTAContentOuter = styled.div`
  ${ctaContentOuterStyles}
`;

const ctaContentInnerStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-14) var(--spacing-4);
  box-shadow: var(--box-shadow-sm);

  @media (min-width: 640px) {
    padding-left: var(--spacing-6);
    padding-right: var(--spacing-6);
  }

  @media (min-width: 1024px) {
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
`;

const StyledCTAContentInner = styled.div`
  ${ctaContentInnerStyles}
`;

const CTAContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTAContentOuter className="q-cta-content-outer">
      <StyledCTAContentInner
        ref={ref}
        data-testid="cta__content"
        className={cx("q-cta-content", className)}
        {...props}
      >
        {children}
      </StyledCTAContentInner>
    </StyledCTAContentOuter>
  );
});
CTAContent.displayName = "CTAContent";

const ctaSectionStyles = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  text-align: center;

  @media (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
    text-align: left;
  }
`;

const StyledCTASection = styled.div`
  ${ctaSectionStyles}
`;

const CTASection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTASection
      ref={ref}
      data-testid="cta__section"
      className={cx("q-cta-section", className)}
      {...props}
    >
      {children}
    </StyledCTASection>
  );
});
CTASection.displayName = "CTASection";

const ctaTitleStyles = css`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-background-fg);
  margin: 0;

  @media (min-width: 768px) {
    font-size: var(--font-size-4xl);
  }

  @media (min-width: 1280px) {
    font-size: var(--font-size-5xl);
  }
`;

const StyledCTATitle = styled.h2`
  ${ctaTitleStyles}
`;

const CTATitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTATitle
      ref={ref}
      data-testid="cta__title"
      className={cx("q-cta-title", className)}
      {...props}
    >
      {children}
    </StyledCTATitle>
  );
});
CTATitle.displayName = "CTATitle";

const ctaSubtitleStyles = css`
  max-width: 42rem;
  font-size: var(--font-size-base);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  margin: 0;

  @media (min-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const StyledCTASubtitle = styled.p`
  ${ctaSubtitleStyles}
`;

const CTASubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTASubtitle
      ref={ref}
      data-testid="cta__subtitle"
      className={cx("q-cta-subtitle", className)}
      {...props}
    >
      {children}
    </StyledCTASubtitle>
  );
});
CTASubtitle.displayName = "CTASubtitle";

const ctaActionsStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  max-width: 28rem;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: var(--spacing-4);
  }
`;

const StyledCTAActions = styled.div`
  ${ctaActionsStyles}
`;

const CTAActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTAActions
      ref={ref}
      data-testid="cta__actions"
      className={cx("q-cta-actions", className)}
      {...props}
    >
      {children}
    </StyledCTAActions>
  );
});
CTAActions.displayName = "CTAActions";

const ctaBackdropStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -50;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const StyledCTABackdrop = styled.img`
  ${ctaBackdropStyles}
`;

const CTABackdrop = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return (
    <StyledCTABackdrop
      ref={ref}
      data-testid="cta__backdrop"
      className={cx("q-cta-backdrop", className)}
      {...props}
    />
  );
});
CTABackdrop.displayName = "CTABackdrop";

export {
  CTA,
  CTAActions,
  CTABackdrop,
  CTAContent,
  CTASection,
  CTASubtitle,
  CTATitle,
};
