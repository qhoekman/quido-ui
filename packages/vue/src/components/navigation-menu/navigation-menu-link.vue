<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface NavigationMenuLinkProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<NavigationMenuLinkProps>(), {
  asChild: false,
  as: "a",
});

const classes = computed(() => ["q-navigation-menu-link"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-navigation-menu-link"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-navigation-menu-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
}

.q-navigation-menu-link:visited {
  color: var(--color-background-fg);
}

.q-navigation-menu-link:link {
  color: var(--color-background-fg);
}

.q-navigation-menu-link:hover {
  background-color: var(--color-muted);
}
</style>
