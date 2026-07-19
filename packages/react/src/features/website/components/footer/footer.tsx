import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const StyledFooter = styled.footer``;

const footerContainerStyles = css`
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

const StyledFooterContainer = styled.div`
  ${footerContainerStyles}
`;

const footerContentStyles = css`
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

const StyledFooterContent = styled.div`
  ${footerContentStyles}
`;

const footerColumnsStyles = css`
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--spacing-10);
  }

  @media (min-width: 1280px) {
    gap: var(--spacing-20);
  }
`;

const StyledFooterColumns = styled.div`
  ${footerColumnsStyles}
`;

const footerColumnStyles = css`
  margin-top: var(--spacing-10);

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

const StyledFooterColumn = styled.div`
  ${footerColumnStyles}
`;

const footerHeadingStyles = css`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
  margin: 0;
  padding: 0;
`;

const StyledFooterHeading = styled.h3`
  ${footerHeadingStyles}
`;

const footerColumnListStyles = css`
  margin-top: var(--spacing-2);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  padding: 0;

  @media (min-width: 1024px) {
    margin-top: var(--spacing-6);
  }
`;

const StyledFooterColumnList = styled.ul`
  ${footerColumnListStyles}
`;

const footerColumnListItemStyles = css`
  font-size: var(--font-size-sm);
  line-height: var(--line-height-6);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  list-style: none;
  margin: 0;
  padding: 0;

  &:hover {
    color: var(--color-background-fg);
  }
`;

const StyledFooterColumnListItem = styled.li`
  ${footerColumnListItemStyles}
`;

const footerSectionStyles = css`
  display: flex;
  max-width: var(--columns-xs);
  flex-direction: column;
  gap: var(--spacing-4);

  @media (min-width: 640px) {
    max-width: var(--columns-lg);
  }
`;

const StyledFooterSection = styled.div`
  ${footerSectionStyles}
`;

const footerBannerStyles = css`
  margin-top: var(--spacing-12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-background-fg);
  fill: currentColor;
  gap: var(--spacing-1);
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

const StyledFooterBanner = styled.div`
  ${footerBannerStyles}
`;

const footerCopyrightStyles = css`
  font-size: var(--font-size-xs);
  line-height: var(--line-height-5);
  color: hsl(from var(--color-background-fg) h s l / 55%);
  margin: 0;
`;

const StyledFooterCopyright = styled.p`
  ${footerCopyrightStyles}
`;

const footerLinkStyles = css`
  font-size: var(--font-size-xs);
  line-height: var(--line-height-5);
  color: hsl(from var(--color-background-fg) h s l / 55%);
  text-decoration: underline;

  &:hover {
    color: hsl(from var(--color-background-fg) h s l / 66%);
  }
`;

const StyledFooterLink = styled.a`
  ${footerLinkStyles}
`;

export const Footer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"footer">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledFooter
      ref={ref}
      data-testid="footer"
      className="q-footer"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <StyledFooterContainer
        data-testid="footer__container"
        className={cx("q-footer-container", className)}
        {...props}
      >
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
    <StyledFooterContent
      ref={ref}
      data-testid="footer__content"
      className={cx("q-footer-content", className)}
      {...props}
    >
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
    <StyledFooterColumns
      ref={ref}
      data-testid="footer__columns"
      className={cx("q-footer-columns", className)}
      {...props}
    >
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
    <StyledFooterColumn
      ref={ref}
      data-testid="footer__column"
      className={cx("q-footer-column", className)}
      {...props}
    >
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
    <StyledFooterHeading
      ref={ref}
      data-testid="footer__heading"
      className={cx("q-footer-heading", className)}
      {...props}
    >
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
      data-testid="footer__column-list"
      className={cx("q-footer-column-list", className)}
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
    <StyledFooterColumnListItem
      ref={ref}
      data-testid="footer__column-list-item"
      className={cx("q-footer-column-list-item", className)}
      {...props}
    >
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
    <StyledFooterSection
      ref={ref}
      data-testid="footer__section"
      className={cx("q-footer-section", className)}
      {...props}
    >
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
    <StyledFooterBanner
      ref={ref}
      data-testid="footer__banner"
      className={cx("q-footer-banner", className)}
      {...props}
    >
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
    <StyledFooterCopyright
      ref={ref}
      data-testid="footer__copyright"
      className={cx("q-footer-copyright", className)}
      {...props}
    >
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
    <StyledFooterLink
      ref={ref}
      data-testid="footer__link"
      className={cx("q-footer-link", className)}
      {...props}
    >
      {children}
    </StyledFooterLink>
  );
});
FooterLink.displayName = "FooterLink";
