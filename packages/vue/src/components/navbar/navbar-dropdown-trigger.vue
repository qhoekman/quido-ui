<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import Button from "../button/button.vue";
import DropdownMenuTrigger from "../dropdown-menu/dropdown-menu-trigger.vue";

export interface NavbarDropdownTriggerProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<NavbarDropdownTriggerProps>(), {
  asChild: false,
});
</script>

<template>
  <DropdownMenuTrigger as-child>
    <Button variant="ghost" :as-child="asChild">
      <slot />
      <ChevronDown :size="20" class="q-navbar-dropdown-chevron" />
    </Button>
  </DropdownMenuTrigger>
</template>

<style scoped>
.q-navbar-dropdown-chevron {
  margin-left: var(--spacing-2);
  height: var(--spacing-5);
  width: var(--spacing-5);
  stroke: var(--color-muted-fg);
}
</style>
