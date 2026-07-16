<script setup lang="ts">
import { computed } from "vue";
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
  <li class="q-mega-menu-list-item-wrap">
    <MegaMenuLink
      variant="plain"
      :href="href"
      :as-child="asChild"
      :as="as"
      :class="classes"
      v-bind="$attrs"
    >
      <div class="list-item-title">{{ title }}</div>
      <p class="list-item-description">
        <slot />
      </p>
    </MegaMenuLink>
  </li>
</template>

<style>
.q-mega-menu-list-item-wrap {
  list-style: none;
}

.q-mega-menu-list-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--spacing-1);
  width: 100%;
  text-align: left;
  user-select: none;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-3);
  line-height: var(--line-height-none);
  text-decoration: none;
  outline: none;
  transition: colors 0.3s;
  color: inherit;
}

.q-mega-menu-list-item:hover {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.q-mega-menu-list-item:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-mega-menu-list-item .list-item-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);
  text-align: left;
}

.q-mega-menu-list-item .list-item-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-snug);
  color: var(--color-muted-fg);
  margin: 0;
  text-align: left;
}
</style>
