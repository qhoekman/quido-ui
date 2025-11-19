import React from "react";
import styled from "styled-components";
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

const StyledPanelGroup = styled(ResizablePrimitive.PanelGroup)`
  display: flex;
  height: 100%;
  width: 100%;

  &[data-panel-group-direction="vertical"] {
    flex-direction: column;
  }
`;

const StyledPanelResizeHandle = styled(ResizablePrimitive.PanelResizeHandle)`
  position: relative;
  display: flex;
  width: 1px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-muted);
  color: var(--color-muted-fg);

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

const StyledHandle = styled.div`
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

const StyledGripIcon = styled(GripVertical)`
  height: var(--spacing-2-5);
  width: var(--spacing-2-5);
`;

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <StyledPanelGroup className={className} {...props} />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <StyledPanelResizeHandle className={className} {...props}>
    {withHandle && (
      <StyledHandle>
        <StyledGripIcon />
      </StyledHandle>
    )}
  </StyledPanelResizeHandle>
);

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
