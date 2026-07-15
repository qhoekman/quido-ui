<script setup lang="ts">
import { computed } from "vue";
import { DropdownMenuContent as RekaDropdownMenuContent, DropdownMenuPortal } from "reka-ui";

export interface TabNavigationMenuProps {
  sideOffset?: number;
  forceMount?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabNavigationMenuProps>(), {
  sideOffset: 4,
  forceMount: false,
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-tab-navigation-menu"]);
</script>

<template>
  <DropdownMenuPortal>
    <RekaDropdownMenuContent
      :side-offset="sideOffset"
      :force-mount="forceMount"
      :as-child="asChild"
      :as="as"
      :class="classes"
      role="menu"
      data-testid="qui-tab-navigation-menu"
      aria-orientation="vertical"
      tabindex="-1"
      v-bind="$attrs"
    >
      <slot />
    </RekaDropdownMenuContent>
  </DropdownMenuPortal>
</template>

<style scoped>
div,
[role="menu"] {
  z-index: var(--z-index-50);
  min-width: var(--spacing-32);
  width: var(--spacing-48);
  overflow: hidden;
  border-radius: var(--border-radius-default);
  background: var(--color-popover);
  color: var(--color-background-fg);
  box-shadow: var(--box-shadow-lg);
}
</style>
