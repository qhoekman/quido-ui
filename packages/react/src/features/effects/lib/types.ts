import type React from "react";

export type BackgroundEffectProps = React.ComponentPropsWithoutRef<"canvas"> & {
  /** When true, uses position:fixed fullscreen. Default: false (absolute, fills parent). */
  fixed?: boolean;
};
