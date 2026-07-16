<script setup lang="ts">
import { TabsTrigger as RekaTabsTrigger } from "reka-ui";

export interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabsTriggerProps>(), {
  disabled: false,
  asChild: false,
  as: "button",
});
</script>

<template>
  <RekaTabsTrigger
    :value="value"
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="['q-tabs-trigger']"
    data-testid="qui-tabs-trigger"
    v-bind="$attrs"
  >
    <slot />
  </RekaTabsTrigger>
</template>

<style scoped>
button,
[role="tab"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  box-shadow: 0 0 0 0 var(--color-background);
  color: var(--color-muted-fg);
  transition: all 0.3s;
  width: 100%;
  outline: none;
}

button:focus-visible,
[role="tab"]:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

button:disabled,
[role="tab"][aria-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}

button[data-state="active"],
[role="tab"][data-state="active"] {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
  box-shadow: var(--box-shadow-sm);
}
</style>
