import React from "react";
import styled, { css } from "styled-components";
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

const panelGroupStyles = css`
  display: flex;
  height: 100%;
  width: 100%;

  &[data-panel-group-direction="vertical"] {
    flex-direction: column;
  }
`;

const StyledPanelGroup = styled(ResizablePrimitive.PanelGroup)`
  ${panelGroupStyles}
`;

const handleStyles = css`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  width: 1px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  cursor: col-resize;
  user-select: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: var(--spacing-1);
    transform: translateX(-50%);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px var(--color-ring), 0 0 0 2px var(--color-background);
  }

  &[data-panel-group-direction="vertical"] {
    height: 1px;
    width: 100%;
    cursor: row-resize;

    &::after {
      top: 50%;
      left: 0;
      height: var(--spacing-1);
      width: 100%;
      transform: translateY(-50%);
    }

    & > div {
      transform: rotate(90deg);
    }
  }
`;

const StyledPanelResizeHandle = styled(ResizablePrimitive.PanelResizeHandle)`
  ${handleStyles}
`;

const handleGripStyles = css`
  z-index: var(--z-index-10);
  display: flex;
  height: var(--spacing-4);
  width: var(--spacing-3);
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-sm);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-border);
`;

const StyledHandle = styled.div`
  ${handleGripStyles}
`;

const StyledGripIcon = styled(GripVertical)`
  height: var(--spacing-2-5);
  width: var(--spacing-2-5);
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <StyledPanelGroup
    data-testid="resizable"
    className={cx("q-resizable-panel-group", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <StyledPanelResizeHandle
    data-testid="resizable__handle"
    className={cx("q-resizable-handle", className)}
    {...props}
  >
    {withHandle && (
      <StyledHandle className="q-resizable-handle-grip">
        <StyledGripIcon />
      </StyledHandle>
    )}
  </StyledPanelResizeHandle>
);

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
