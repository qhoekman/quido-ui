import { useReelButton } from "@/features/ecommerce/components/reel/useReelButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const reelStyles = css`
  display: flex;
`;

const StyledReel = styled.div`
  ${reelStyles}
`;

const reelItemsStyles = css`
  display: flex;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
`;

const StyledReelItems = styled.div`
  ${reelItemsStyles}
`;

const reelItemStyles = css`
  flex: 0 0 auto;
  width: var(--spacing-40);
  min-width: var(--spacing-40);
  height: var(--spacing-40);
  scroll-snap-align: start;
`;

const StyledReelItem = styled.div`
  ${reelItemStyles}
`;

const reelButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--spacing-4);
  min-width: var(--spacing-4);
  height: var(--spacing-40);
  flex-shrink: 0;
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  border-radius: var(--border-radius-md);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    width: var(--spacing-6);
    height: var(--spacing-6);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled,
  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  &:not(:disabled):hover {
    background-color: hsl(from var(--color-muted) h s l / 80%);
  }
`;

const StyledReelButton = styled.button`
  ${reelButtonStyles}
`;

type ReelProps = React.HTMLAttributes<HTMLDivElement>;

export const Reel = React.forwardRef<HTMLDivElement, ReelProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledReel
        ref={ref}
        data-testid="reel"
        className={cx("q-reel", className)}
        {...props}
      >
        {props.children}
      </StyledReel>
    );
  }
);
Reel.displayName = "Reel";

type ReelItemsProps = React.HTMLAttributes<HTMLDivElement>;

export const ReelItems = React.forwardRef<HTMLDivElement, ReelItemsProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledReelItems
        ref={ref}
        data-reel-items
        data-testid="reel__items"
        className={cx("q-reel-content", className)}
        {...props}
      >
        {props.children}
      </StyledReelItems>
    );
  }
);
ReelItems.displayName = "ReelItems";

type ReelItemProps = React.HTMLAttributes<HTMLDivElement>;

export const ReelItem = React.forwardRef<HTMLDivElement, ReelItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledReelItem
        ref={ref}
        data-testid="reel__item"
        className={cx("q-reel-item", className)}
        {...props}
      >
        {props.children}
      </StyledReelItem>
    );
  }
);
ReelItem.displayName = "ReelItem";

type ReelButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ReelButton = React.forwardRef<HTMLButtonElement, ReelButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledReelButton
        ref={ref}
        className={cx("q-reel-button", className)}
        {...props}
      >
        {props.children}
      </StyledReelButton>
    );
  }
);
ReelButton.displayName = "ReelButton";

export const ReelButtonNext: React.FC<ReelButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const { moveReel, canNext, containerRef } = useReelButton();

  const handleClick = () => {
    moveReel("next");
  };

  return (
    <ReelButton
      ref={containerRef}
      className={className}
      data-testid="reel__button-next"
      onClick={handleClick}
      disabled={canNext}
      {...props}
    >
      {children ?? <ChevronRight />}
    </ReelButton>
  );
};

export const ReelButtonPrevious: React.FC<ReelButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const { moveReel, canPrev, containerRef } = useReelButton();

  const handleClick = () => {
    moveReel("prev");
  };

  return (
    <ReelButton
      ref={containerRef}
      className={className}
      data-testid="reel__button-prev"
      onClick={handleClick}
      disabled={canPrev}
      {...props}
    >
      {children ?? <ChevronLeft />}
    </ReelButton>
  );
};
