import React from "react";
import styled, { css } from "styled-components";
import { cva } from "class-variance-authority";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const blockVariants = cva("q-block");

const blockStyles = css`
  font-size: var(--font-size-sm);
  z-index: var(--z-index-10);
  position: relative;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-8);
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);

  &.inset {
    margin-left: var(--spacing-4);
    margin-right: var(--spacing-4);
  }

  &.outline {
    border: var(--border-width-default) solid var(--color-border);
  }
`;

const StyledBlock = styled.div`
  ${blockStyles}
`;

const blockTitleStyles = css`
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  margin-top: var(--spacing-8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: calc(var(--spacing-6) * -1);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
`;

const StyledBlockTitle = styled.h2`
  ${blockTitleStyles}
`;

export type BlockProps = React.ComponentPropsWithoutRef<"div"> & {
  inset?: boolean;
  outline?: boolean;
};

const Block = React.forwardRef<HTMLDivElement, BlockProps>(
  ({ children, className, inset, outline, ...props }, ref) => {
    const baseClasses = blockVariants();
    const variantClasses = [
      inset === true && "inset",
      outline === true && "outline",
    ]
      .filter(Boolean)
      .join(" ");
    const allClasses = [baseClasses, variantClasses, className]
      .filter(Boolean)
      .join(" ");
    return (
      <StyledBlock
        ref={ref}
        data-testid="block"
        className={allClasses}
        {...props}
      >
        {children}
      </StyledBlock>
    );
  }
);
Block.displayName = "Block";

const BlockTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledBlockTitle
      ref={ref}
      data-testid="block__title"
      className={cx("q-block-title", className)}
      {...props}
    >
      {children}
    </StyledBlockTitle>
  );
});
BlockTitle.displayName = "BlockTitle";

export { Block, BlockTitle };
