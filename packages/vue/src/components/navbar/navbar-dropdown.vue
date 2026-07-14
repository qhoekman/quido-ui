<script setup lang="ts">
import DropdownMenu from "../dropdown-menu/dropdown-menu.vue";

export interface NavbarDropdownProps {
  defaultOpen?: boolean;
  open?: boolean;
  modal?: boolean;
  dir?: "ltr" | "rtl";
}

const props = defineProps<NavbarDropdownProps>();
</script>

<template>
  <DropdownMenu
    :default-open="defaultOpen"
    :open="open"
    :modal="modal"
    :dir="dir"
    data-testid="qui-navbar-dropdown"
    v-bind="$attrs"
  >
    <slot />
  </DropdownMenu>
</template>
