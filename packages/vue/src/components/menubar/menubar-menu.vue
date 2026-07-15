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
