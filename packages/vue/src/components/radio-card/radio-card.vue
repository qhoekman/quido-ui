<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { RadioGroupRoot } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const radioCardVariants = cva("q-radio-card", {
  variants: {},
  defaultVariants: {},
});

export type RadioCardVariants = VariantProps<typeof radioCardVariants>;

export interface RadioCardProps {
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  orientation?: "horizontal" | "vertical";
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<RadioCardProps>(), {
  disabled: false,
  required: false,
  orientation: "horizontal",
  asChild: false,
  as: "div",
});

const emit = defineEmits<{
  "update:value": [value: string];
}>();

// Internal state management
const internalValue = ref(props.defaultValue ?? "");
const isControlled = props.value !== undefined;
const selectedValue = computed(() =>
  isControlled ? props.value : internalValue.value
);

const handleValueChange = (value: string) => {
  if (!isControlled) {
    internalValue.value = value;
  }
  if (value) {
    emit("update:value", value);
  }
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
  return radioCardVariants({});
});
</script>

<template>
  <RadioGroupRoot
    :value="selectedValue || undefined"
    :default-value="defaultValue"
    :disabled="disabled"
    :required="required"
    :name="name"
    :orientation="orientation"
    :as-child="asChild"
    :as="as"
    :class="classes"
    @update:value="handleValueChange"
    v-bind="$attrs"
  >
    <slot />
  </RadioGroupRoot>
</template>

<style scoped>
.q-radio-card {
  display: grid;
  gap: var(--spacing-3);
}
</style>
