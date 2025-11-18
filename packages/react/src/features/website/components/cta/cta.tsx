import React from "react";
import styled from "styled-components";

const StyledCTA = styled.div`
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

type CTAProps = {
  children: React.ReactNode;
};

const CTA: React.FC<CTAProps> = ({ children }) => {
  return <StyledCTA>{children}</StyledCTA>;
};
CTA.displayName = "CTA";

const StyledCTAContentOuter = styled.div`
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

const StyledCTAContentInner = styled.div`
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

const CTAContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTAContentOuter>
      <StyledCTAContentInner ref={ref} className={className} {...props}>
        {children}
      </StyledCTAContentInner>
    </StyledCTAContentOuter>
  );
});
CTAContent.displayName = "CTAContent";

const StyledCTASection = styled.div`
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

const CTASection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTASection ref={ref} className={className} {...props}>
      {children}
    </StyledCTASection>
  );
});
CTASection.displayName = "CTASection";

const StyledCTATitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-background-fg);

  @media (min-width: 768px) {
    font-size: var(--font-size-4xl);
  }

  @media (min-width: 1280px) {
    font-size: var(--font-size-5xl);
  }
`;

const CTATitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTATitle ref={ref} className={className} {...props}>
      {children}
    </StyledCTATitle>
  );
});
CTATitle.displayName = "CTATitle";

const StyledCTASubtitle = styled.p`
  max-width: 42rem;
  font-size: var(--font-size-base);
  color: var(--color-muted-fg);

  @media (min-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const CTASubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTASubtitle ref={ref} className={className} {...props}>
      {children}
    </StyledCTASubtitle>
  );
});
CTASubtitle.displayName = "CTASubtitle";

const StyledCTAActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  max-width: 28rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: var(--spacing-4);
  }
`;

const CTAActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledCTAActions ref={ref} className={className} {...props}>
      {children}
    </StyledCTAActions>
  );
});
CTAActions.displayName = "CTAActions";

const StyledCTABackdrop = styled.img`
  position: absolute;
  z-index: -50;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const CTABackdrop = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return <StyledCTABackdrop ref={ref} className={className} {...props} />;
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
