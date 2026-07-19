import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const headerStyles = css`
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
`;

const StyledHeader = styled.div`
  ${headerStyles}
`;

const headerTaglineStyles = css`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: hsl(from var(--color-background-fg) h s l / 80%);
  margin: 0;
`;

const StyledHeaderTagline = styled.h3`
  ${headerTaglineStyles}
`;

const headerTitleStyles = css`
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

const StyledHeaderTitle = styled.h2`
  ${headerTitleStyles}
`;

const headerBodyStyles = css`
  font-size: var(--font-size-lg);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  margin: 0;
`;

const StyledHeaderBody = styled.p`
  ${headerBodyStyles}
`;

const headerContentStyles = css`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: var(--columns-4xl);
  flex-direction: column;
  gap: var(--spacing-7);
`;

const StyledHeaderContent = styled.div`
  ${headerContentStyles}
`;

const headerActionsStyles = css`
  margin-right: auto;
  display: flex;
  gap: var(--spacing-8);
`;

const StyledHeaderActions = styled.div`
  ${headerActionsStyles}
`;

const headerBackdropStyles = css`
  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledHeaderBackdrop = styled.div`
  ${headerBackdropStyles}
`;

const headerBackdropImageStyles = css`
  position: absolute;
  z-index: -10;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
`;

const StyledHeaderBackdropImage = styled.img`
  ${headerBackdropImageStyles}
`;

export const Header = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHeader
      ref={ref}
      data-testid="header"
      className={cx("q-header", className)}
      {...props}
    >
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
    <StyledHeaderTagline
      ref={ref}
      data-testid="header__tagline"
      className={cx("q-header-tagline", className)}
      {...props}
    >
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
    <StyledHeaderTitle
      ref={ref}
      data-testid="header__title"
      className={cx("q-header-title", className)}
      {...props}
    >
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
    <StyledHeaderBody
      ref={ref}
      data-testid="header__body"
      className={cx("q-header-body", className)}
      {...props}
    >
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
    <StyledHeaderContent
      ref={ref}
      data-testid="header__content"
      className={cx("q-header-content", className)}
      {...props}
    >
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
    <StyledHeaderActions
      ref={ref}
      data-testid="header__actions"
      className={cx("q-header-actions", className)}
      {...props}
    >
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
    <StyledHeaderBackdrop
      ref={ref}
      data-testid="header__backdrop"
      className={cx("q-header-backdrop", className)}
      {...props}
    >
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
      data-testid="header__backdrop-image"
      className={cx("q-header-backdrop-image", className)}
      {...props}
    />
  );
});
HeaderBackdropImage.displayName = "HeaderBackdropImage";
