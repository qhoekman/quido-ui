import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";
import styled from "styled-components";

const StyledTabsRoot = styled(TabsPrimitive.Root)`
  display: flex;
  flex-direction: column-reverse;
`;

const StyledTabsListContainer = styled.div`
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

const StyledTabsList = styled(TabsPrimitive.List)`
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
`;

const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
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
  color: var(--color-gray-900);
  border: 0 none;
  outline: none;
  overflow: hidden;

  &:hover {
    background-color: var(--color-gray-50);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px hsl(from var(--color-ring) h s l / 50%),
      0 0 0 4px var(--color-background);
  }
`;

const StyledTabsContentContainer = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
`;

const StyledTabsContent = styled(TabsPrimitive.Content)`
  margin-top: var(--spacing-2);
`;

type TieredGalleryProps = TabsPrimitive.TabsProps;

export const TieredGallery = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TieredGalleryProps
>(({ className, children, ...props }, ref) => {
  return (
    <StyledTabsRoot ref={ref} className={className} {...props}>
      <StyledTabsListContainer>
        <StyledTabsList>
          {React.Children.map(children, (child, i) => {
            return (
              <StyledTabsTrigger key={`tab-${i}`} value={`${i}`}>
                {child}
              </StyledTabsTrigger>
            );
          })}
        </StyledTabsList>
      </StyledTabsListContainer>
      <StyledTabsContentContainer>
        {React.Children.map(children, (child, i) => {
          return (
            <StyledTabsContent key={`tabcontent-${i}`} value={`${i}`}>
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
    <StyledTieredGalleryImage ref={ref} className={className} {...props} />
  );
});

TieredGalleryImage.displayName = "TieredGalleryImage";
