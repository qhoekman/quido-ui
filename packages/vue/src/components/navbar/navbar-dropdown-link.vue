<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import DropdownMenuItem from "../dropdown-menu/dropdown-menu-item.vue";

export interface NavbarDropdownLinkProps {
  href?: string;
  isActive?: boolean;
  as?: "a";
  asChild?: boolean;
}

const props = withDefaults(defineProps<NavbarDropdownLinkProps>(), {
  href: "#",
  isActive: false,
  as: "a",
  asChild: false,
});

const linkClasses = computed(() => {
  return [
    "q-navbar-dropdown-link",
    {
      "is-active": props.isActive,
    },
  ];
});
</script>

<template>
  <DropdownMenuItem style="padding-left: 0; padding-right: 0">
    <Primitive
      :as="as"
      :as-child="asChild"
      :href="href"
      :class="linkClasses"
      data-testid="qui-navbar-dropdown-link"
      v-bind="$attrs"
    >
      <slot />
    </Primitive>
  </DropdownMenuItem>
</template>

<style scoped>
.q-navbar-dropdown-link {
  display: block;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  width: 100%;
  background-color: transparent;
}

.q-navbar-dropdown-link.is-active {
  background-color: var(--color-primary);
}

.q-navbar-dropdown-link:hover {
  background-color: var(--color-muted);
}
</style>
