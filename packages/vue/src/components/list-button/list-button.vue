<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface ListButtonProps {
  as?: "button" | "a";
  asChild?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<ListButtonProps>(), {
  as: "button",
  asChild: false,
  disabled: false,
  type: "button",
});

const isDisabled = computed(() => props.disabled);
const role = computed(() => (props.as === "a" ? "button" : undefined));
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="'q-list-button'"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :role="role"
    :type="as === 'button' ? type : undefined"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
button,
[role="button"] {
  position: relative;
  border-bottom: var(--border-width-default) solid var(--color-muted-fg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  gap: var(--spacing-1);
  width: 100%;
  transition-duration: 300ms;
  outline: none;
  overflow: hidden;
  user-select: none;
  height: var(--spacing-11);
  color: var(--color-primary);
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
}

button:active:not(:disabled),
[role="button"]:active:not([aria-disabled="true"]) {
  border: none;
  transition-duration: 0ms;
  background-color: hsl(from var(--color-primary) h s l / 15%);
  color: var(--color-primary-fg);
}

button:focus,
[role="button"]:focus {
  outline: none;
}

button:focus-visible,
[role="button"]:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

button:disabled,
[role="button"][aria-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
