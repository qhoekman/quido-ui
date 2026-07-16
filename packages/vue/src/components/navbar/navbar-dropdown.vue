<script setup lang="ts">
import DropdownMenu from "../dropdown-menu/dropdown-menu.vue";

export interface NavbarDropdownProps {
  defaultOpen?: boolean;
  open?: boolean;
  modal?: boolean;
  dir?: "ltr" | "rtl";
}

// `open`/`modal` must default to `undefined`, not Vue's automatic
// "absent Boolean prop resolves to false" coercion -- otherwise every
// consumer that doesn't explicitly pass them gets `open: false` (pins
// the underlying DropdownMenuRoot into controlled mode, breaking all
// click/toggle interaction) and `modal: false` (silently forces every
// navbar dropdown non-modal, overriding dropdown-menu.vue's own
// `modal: true` default).
const props = withDefaults(defineProps<NavbarDropdownProps>(), {
  defaultOpen: false,
  open: undefined,
  modal: undefined,
});
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
