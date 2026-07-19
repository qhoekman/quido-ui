import React from "react";
import styled, { css } from "styled-components";

const definitionListStyles = css`
  display: block;

  > * + * {
    border-top: var(--border-width-default) solid var(--color-border);
  }
`;

const StyledDefinitionList = styled.dl`
  ${definitionListStyles}
`;

const definitionListItemStyles = css`
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

const StyledDefintionListItem = styled.div`
  ${definitionListItemStyles}
`;

const definitionTermStyles = css`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
`;

const StyledDefinitionTerm = styled.dt`
  ${definitionTermStyles}
`;

const definitionDescriptionStyles = css`
  margin-top: var(--spacing-1);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-6);
  color: var(--color-muted-fg);

  @media (min-width: 640px) {
    grid-column: span 2 / span 2;
    margin-top: 0;
  }
`;

const StyledDefinitionDescription = styled.dd`
  ${definitionDescriptionStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export const DefinitionList = React.forwardRef<
  HTMLDListElement,
  React.ComponentPropsWithoutRef<"dl">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledDefinitionList
      ref={ref}
      data-testid="definition-list"
      className={cx("q-definition-list", className)}
      {...props}
    >
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
    <StyledDefintionListItem
      ref={ref}
      data-testid="definition-list__item"
      className={cx("q-definition-list-item", className)}
      {...props}
    >
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
    <StyledDefinitionTerm
      ref={ref}
      data-testid="definition-list__term"
      className={cx("q-definition-term", className)}
      {...props}
    >
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
    <StyledDefinitionDescription
      ref={ref}
      data-testid="definition-list__description"
      className={cx("q-definition-description", className)}
      {...props}
    >
      {children}
    </StyledDefinitionDescription>
  );
});
DefinitionDescription.displayName = "DefinitionDescription";
