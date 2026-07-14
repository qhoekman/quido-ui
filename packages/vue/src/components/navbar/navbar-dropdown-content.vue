<script setup lang="ts">
import DropdownMenuContent from "../dropdown-menu/dropdown-menu-content.vue";

export interface NavbarDropdownContentProps {
  sideOffset?: number;
  forceMount?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<NavbarDropdownContentProps>(), {
  sideOffset: 4,
  forceMount: false,
  asChild: false,
  as: "div",
});
</script>

<template>
  <DropdownMenuContent
    :side-offset="sideOffset"
    :force-mount="forceMount"
    :as-child="asChild"
    :as="as"
    :class="['q-navbar-dropdown-content']"
    data-testid="qui-navbar-dropdown-content"
    v-bind="$attrs"
  >
    <slot />
  </DropdownMenuContent>
</template>

<style scoped>
:deep(.q-dropdown-menu-content) {
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  padding-left: 0;
  padding-right: 0;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--border-radius-lg);
  width: 16rem;
  margin-top: var(--spacing-2);
}
</style>
