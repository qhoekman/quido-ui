<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import MegaMenuLink from "./mega-menu-link.vue";

export interface MegaMenuListItemProps {
  title: string;
  href?: string;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MegaMenuListItemProps>(), {
  asChild: false,
  as: "a",
});

const classes = computed(() => ["q-mega-menu-list-item"]);
</script>

<template>
  <li>
    <MegaMenuLink :href="href" :as-child="asChild" :as="as" :class="classes" v-bind="$attrs">
      <div class="list-item-title">{{ title }}</div>
      <p class="list-item-description">
        <slot />
      </p>
    </MegaMenuLink>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}

a,
[role="link"] {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  user-select: none;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-3);
  line-height: var(--line-height-none);
  text-decoration: none;
  outline: none;
  transition: colors 0.3s;
}

a:hover:not(:disabled),
[role="link"]:hover:not([aria-disabled="true"]) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

a:focus:not(:disabled),
[role="link"]:focus:not([aria-disabled="true"]) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

a:focus-visible:not(:disabled),
[role="link"]:focus-visible:not([aria-disabled="true"]) {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.list-item-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);
}

.list-item-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-snug);
  color: var(--color-muted-fg);
  margin: 0;
}
</style>
