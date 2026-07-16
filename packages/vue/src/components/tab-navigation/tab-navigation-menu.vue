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

<style>
/*
 * reka-ui's DropdownMenuContent is rendered via DropdownMenuPortal ->
 * Teleport (into document.body), which severs any connection to this
 * component's own scoped-CSS data-v-* attribute -- neither the content
 * element nor any of its (post-teleport) ancestors carry it, so scoped
 * selectors can never match (confirmed empirically: the rendered content
 * had no data-v-* attribute at all, and its background stayed
 * transparent instead of using the rule below). This must be global CSS,
 * scoped only by the q-tab-navigation-menu class.
 */
.q-tab-navigation-menu {
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
