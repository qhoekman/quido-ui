import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer``;

const StyledFooterSrOnly = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const StyledFooterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--columns-7xl);
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
  padding-bottom: var(--spacing-8);
  padding-top: var(--spacing-16);

  @media (min-width: 640px) {
    padding-top: var(--spacing-24);
  }

  @media (min-width: 1024px) {
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
    padding-top: var(--spacing-32);
  }
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-10);

  @media (min-width: 768px) {
    gap: var(--spacing-14);
  }

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const StyledFooterColumns = styled.div`
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--spacing-10);
  }

  @media (min-width: 1280px) {
    gap: var(--spacing-20);
  }
`;

const StyledFooterColumn = styled.div`
  margin-top: var(--spacing-10);

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

const StyledFooterHeading = styled.h3`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-6);
  color: var(--color-muted-fg);
`;

const StyledFooterColumnList = styled.ul`
  margin-top: var(--spacing-2);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);

  @media (min-width: 1024px) {
    margin-top: var(--spacing-6);
  }
`;

const StyledFooterColumnListItem = styled.li`
  font-size: var(--font-size-sm);
  line-height: var(--line-height-6);
  color: var(--color-muted-fg);

  &:hover {
    color: var(--color-primary);
  }
`;

const StyledFooterSection = styled.div`
  display: flex;
  max-width: var(--columns-xs);
  flex-direction: column;
  gap: var(--spacing-4);

  @media (min-width: 640px) {
    max-width: var(--columns-lg);
  }
`;

const StyledFooterBanner = styled.div`
  margin-top: var(--spacing-12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-6);
  border-top: var(--border-width-default) solid
    hsl(from var(--color-border) h s l / 10%);
  padding-top: var(--spacing-4);

  @media (min-width: 640px) {
    margin-top: var(--spacing-20);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }

  @media (min-width: 1024px) {
    margin-top: var(--spacing-16);
  }
`;

const StyledFooterCopyright = styled.p`
  font-size: var(--font-size-xs);
  line-height: var(--line-height-5);
  color: var(--color-muted-fg);
`;

const StyledFooterLink = styled.a`
  font-size: var(--font-size-xs);
  line-height: var(--line-height-5);
  color: var(--color-muted-fg);
  text-decoration: underline;

  &:hover {
    color: var(--color-primary);
  }
`;

export const Footer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"footer">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooter ref={ref} aria-labelledby="footer-heading">
      <StyledFooterSrOnly id="footer-heading">Footer</StyledFooterSrOnly>

      <StyledFooterContainer className={className} {...props}>
        {children}
      </StyledFooterContainer>
    </StyledFooter>
  );
});
Footer.displayName = "Footer";

export const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterContent ref={ref} className={className} {...props}>
      {children}
    </StyledFooterContent>
  );
});
FooterContent.displayName = "FooterContent";

export const FooterColumns = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterColumns ref={ref} className={className} {...props}>
      {children}
    </StyledFooterColumns>
  );
});
FooterColumns.displayName = "FooterColumns";

export const FooterColumn = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterColumn ref={ref} className={className} {...props}>
      {children}
    </StyledFooterColumn>
  );
});
FooterColumn.displayName = "FooterColumn";

export const FooterHeading = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterHeading ref={ref} className={className} {...props}>
      {children}
    </StyledFooterHeading>
  );
});
FooterHeading.displayName = "FooterHeading";

export const FooterColumnList = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterColumnList
      ref={ref}
      role="list"
      className={className}
      {...props}
    >
      {children}
    </StyledFooterColumnList>
  );
});
FooterColumnList.displayName = "FooterColumnList";

export const FooterColumnListItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterColumnListItem ref={ref} className={className} {...props}>
      {children}
    </StyledFooterColumnListItem>
  );
});
FooterColumnListItem.displayName = "FooterColumnListItem";

export const FooterSection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterSection ref={ref} className={className} {...props}>
      {children}
    </StyledFooterSection>
  );
});
FooterSection.displayName = "FooterSection";

export const FooterBanner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterBanner ref={ref} className={className} {...props}>
      {children}
    </StyledFooterBanner>
  );
});
FooterBanner.displayName = "FooterBanner";

export const FooterCopyright = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterCopyright ref={ref} className={className} {...props}>
      {children}
    </StyledFooterCopyright>
  );
});
FooterCopyright.displayName = "FooterCopyright";

export const FooterLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooterLink ref={ref} className={className} {...props}>
      {children}
    </StyledFooterLink>
  );
});
FooterLink.displayName = "FooterLink";
