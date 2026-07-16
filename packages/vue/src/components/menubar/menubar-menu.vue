<script setup lang="ts">
import { computed } from "vue";
import { MenubarContent as RekaMenubarContent, MenubarPortal } from "reka-ui";

export interface MenubarMenuProps {
  sideOffset?: number;
  forceMount?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MenubarMenuProps>(), {
  sideOffset: 4,
  forceMount: false,
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-menubar-menu"]);
</script>

<template>
  <MenubarPortal>
    <RekaMenubarContent
      :side-offset="sideOffset"
      :force-mount="forceMount"
      :as-child="asChild"
      :as="as"
      :class="classes"
      role="menu"
      data-testid="qui-menubar-menu"
      aria-orientation="vertical"
      tabindex="-1"
      v-bind="$attrs"
    >
      <slot />
    </RekaMenubarContent>
  </MenubarPortal>
</template>

<style>
/*
 * reka-ui's MenubarContent is rendered via MenubarPortal -> Teleport,
 * which severs any connection to this component's own scoped-CSS
 * data-v-* attribute -- neither the content element nor any of its
 * (post-teleport) ancestors carry it, so scoped selectors (even with
 * :deep()) can never match (confirmed empirically: the rendered content
 * had no data-v-* attribute at all, and its background stayed
 * transparent instead of using the rule below). This must be global CSS,
 * scoped only by the q-menubar-menu class instead of a bare tag selector.
 */
.q-menubar-menu {
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
