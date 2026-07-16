<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import { ToggleGroupRoot } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const toggleGroupVariants = cva("q-toggle-group", {
  variants: {
    variant: {
      primary: "variant--primary",
      outline: "variant--outline",
      default: "variant--default",
    },
    size: {
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ToggleGroupVariants = VariantProps<typeof toggleGroupVariants>;

export interface ToggleGroupProps {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  variant?: ToggleGroupVariants["variant"];
  size?: ToggleGroupVariants["size"];
  disabled?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<ToggleGroupProps>(), {
  type: "single",
  variant: "primary",
  size: "md",
  disabled: false,
  asChild: false,
  as: "div",
});

const emit = defineEmits<{
  "update:value": [value: string | string[]];
}>();

// Internal state management
const isControlled = props.value !== undefined;
const internalValue = ref<string | string[]>(
  props.defaultValue ?? (props.type === "single" ? "" : [])
);
const selectedValue = computed(() =>
  isControlled ? props.value : internalValue.value
);

const handleValueChange = (value: string | string[]) => {
  if (!isControlled) {
    internalValue.value = value;
  }
  emit("update:value", value);
};

// Watch for external changes
watch(
  () => props.value,
  (newValue) => {
    if (isControlled && newValue !== undefined) {
      internalValue.value = newValue;
    }
  }
);

const classes = computed(() => {
  return toggleGroupVariants({
    variant: props.variant,
    size: props.size,
  });
});

// Provide context to child components
provide("toggleGroupContext", {
  variant: computed(() => props.variant),
  size: computed(() => props.size),
});
</script>

<template>
  <ToggleGroupRoot
    :type="type"
    :model-value="selectedValue"
    :default-value="defaultValue"
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="classes"
    @update:model-value="handleValueChange"
    v-bind="$attrs"
  >
    <slot />
  </ToggleGroupRoot>
</template>

<style scoped>
.q-toggle-group {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
}
</style>
