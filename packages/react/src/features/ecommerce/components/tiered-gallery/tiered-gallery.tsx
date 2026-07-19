import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const tieredGalleryStyles = css`
  display: flex;
  flex-direction: column-reverse;
`;

const StyledTabsRoot = styled(TabsPrimitive.Root)`
  ${tieredGalleryStyles}
`;

const tieredGalleryListContainerStyles = css`
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--spacing-6);
  display: none;
  width: 100%;
  max-width: var(--columns-2xl);

  @media (min-width: 640px) {
    display: block;
  }

  @media (min-width: 1024px) {
    max-width: none;
  }
`;

const StyledTabsListContainer = styled.div`
  ${tieredGalleryListContainerStyles}
`;

const tieredGalleryListStyles = css`
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
`;

const StyledTabsList = styled(TabsPrimitive.List)`
  ${tieredGalleryListStyles}
`;

const tieredGalleryTriggerStyles = css`
  position: relative;
  display: flex;
  aspect-ratio: 1 / 1;
  height: var(--spacing-24);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  color: var(--color-muted-fg);
  border: 0 none;
  outline: none;
  overflow: hidden;

  &:hover:not(:disabled) {
    background-color: var(--color-muted);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(from var(--color-ring) h s l / 50%),
      0 0 0 4px var(--color-background);
  }
`;

const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
  ${tieredGalleryTriggerStyles}
`;

const tieredGalleryContentContainerStyles = css`
  aspect-ratio: 1 / 1;
  width: 100%;
`;

const StyledTabsContentContainer = styled.div`
  ${tieredGalleryContentContainerStyles}
`;

const tieredGalleryContentStyles = css`
  margin-top: var(--spacing-2);
`;

const StyledTabsContent = styled(TabsPrimitive.Content)`
  ${tieredGalleryContentStyles}
`;

type TieredGalleryProps = TabsPrimitive.TabsProps;

export const TieredGallery = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TieredGalleryProps
>(({ className, children, ...props }, ref) => {
  return (
    <StyledTabsRoot
      ref={ref}
      data-testid="tiered-gallery"
      className={cx("q-tiered-gallery", className)}
      {...props}
    >
      <StyledTabsListContainer className="q-tiered-gallery__list-container">
        <StyledTabsList
          data-testid="tiered-gallery__list"
          className="q-tiered-gallery__list"
        >
          {React.Children.map(children, (child, i) => {
            return (
              <StyledTabsTrigger
                key={`tab-${i}`}
                value={`${i}`}
                data-testid={`tiered-gallery__trigger-${i}`}
                className="q-tiered-gallery__trigger"
              >
                {child}
              </StyledTabsTrigger>
            );
          })}
        </StyledTabsList>
      </StyledTabsListContainer>
      <StyledTabsContentContainer className="q-tiered-gallery__content-container">
        {React.Children.map(children, (child, i) => {
          return (
            <StyledTabsContent
              key={`tabcontent-${i}`}
              value={`${i}`}
              data-testid={`tiered-gallery__content-${i}`}
              className="q-tiered-gallery__content"
            >
              {child}
            </StyledTabsContent>
          );
        })}
      </StyledTabsContentContainer>
    </StyledTabsRoot>
  );
});

TieredGallery.displayName = "TieredGallery";

const StyledTieredGalleryImage = styled.img`
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const TieredGalleryImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  return (
    <StyledTieredGalleryImage
      ref={ref}
      data-testid="tiered-gallery__image"
      className={cx("q-tiered-gallery-image", className)}
      {...props}
    />
  );
});

TieredGalleryImage.displayName = "TieredGalleryImage";
