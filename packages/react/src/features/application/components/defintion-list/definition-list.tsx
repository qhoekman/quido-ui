import React from "react";
import styled from "styled-components";

const StyledDefinitionList = styled.dl`
  > * + * {
    border-top: 1px solid var(--color-border);
  }
`;

const StyledDefintionListItem = styled.div`
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing-4);
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledDefinitionTerm = styled.dt`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
`;

const StyledDefinitionDescription = styled.dd`
  margin-top: var(--spacing-1);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-6);
  color: var(--color-muted-fg);

  @media (min-width: 640px) {
    grid-column: span 2 / span 2;
    margin-top: 0;
  }
`;

export const DefinitionList = React.forwardRef<
  HTMLDListElement,
  React.ComponentPropsWithoutRef<"dl">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledDefinitionList ref={ref} className={className} {...props}>
      {children}
    </StyledDefinitionList>
  );
});
DefinitionList.displayName = "DefinitionList";

export const DefintionListItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledDefintionListItem ref={ref} className={className} {...props}>
      {children}
    </StyledDefintionListItem>
  );
});
DefintionListItem.displayName = "DefintionListItem";

export const DefinitionTerm = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"dt">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledDefinitionTerm ref={ref} className={className} {...props}>
      {children}
    </StyledDefinitionTerm>
  );
});
DefinitionTerm.displayName = "DefinitionTerm";

export const DefinitionDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"dd">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledDefinitionDescription ref={ref} className={className} {...props}>
      {children}
    </StyledDefinitionDescription>
  );
});
DefinitionDescription.displayName = "DefinitionDescription";
