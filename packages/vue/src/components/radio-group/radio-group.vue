<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { RadioGroupRoot } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const radioGroupVariants = cva("q-radio-group", {
  variants: {
    orientation: {
      horizontal: "orientation--horizontal",
      vertical: "orientation--vertical",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;

export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  orientation?: "horizontal" | "vertical";
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
  disabled: false,
  required: false,
  orientation: "vertical",
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
  return radioGroupVariants({
    orientation: props.orientation,
  });
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
.q-radio-group {
  display: grid;
  gap: var(--spacing-2);
}

.q-radio-group.orientation--horizontal {
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
}

.q-radio-group.orientation--vertical {
  grid-template-columns: 1fr;
}
</style>
