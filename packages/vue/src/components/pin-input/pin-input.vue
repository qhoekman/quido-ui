<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import InputComponent from "../input/input.vue";
import type { InputVariants } from "../input/input.vue";

const pinInputVariants = cva("q-pin-input", {
  variants: {
    size: {
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type PinInputVariants = VariantProps<typeof pinInputVariants>;

export interface PinInputProps {
  size?: PinInputVariants["size"];
  name?: string;
  length?: number;
  modelValue?: string;
  disabled?: boolean;
  [key: string]: any; // Allow other HTML attributes
}

const props = withDefaults(defineProps<PinInputProps>(), {
  size: "md",
  name: "",
  length: 4,
  modelValue: "",
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  valueChange: [value: string];
  valueBlur: [value: string];
  valueComplete: [value: string];
}>();

const pins = ref<string[]>([]);
const inputRefs = ref<(HTMLInputElement | null)[]>([]);

onMounted(() => {
  pins.value = new Array(props.length).fill("");
  inputRefs.value = new Array(props.length).fill(null);
});

const classes = computed(() => {
  return pinInputVariants({
    size: props.size,
  });
});

const setInputRef = (el: any, index: number) => {
  if (el) {
    // Get the actual input element from the component
    const inputElement = el.$el as HTMLInputElement;
    inputRefs.value[index] = inputElement;
  }
};

const handleInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement;
  const value = input.value.slice(-1); // Only take the last character
  
  pins.value[index] = value;
  input.value = value; // Ensure only one character
  
  const currentValue = pins.value.join("");
  emit("update:modelValue", currentValue);
  emit("valueChange", value);
  emit("valueBlur", value);
  
  // Check if all pins are filled
  const allFilled = pins.value.every((pin) => pin.length === 1);
  if (allFilled) {
    emit("valueComplete", currentValue);
  }
  
  // Auto-focus next input if value entered and not last input
  if (value.length === 1 && index < props.length - 1) {
    nextTick(() => {
      focusNextInput(index);
    });
  }
};

const handleKeyDown = (event: KeyboardEvent, index: number) => {
  if (event.key === "Backspace" && !pins.value[index] && index > 0) {
    nextTick(() => {
      focusPreviousInput(index);
    });
  }
};

const focusNextInput = (index: number) => {
  const nextIndex = index + 1;
  if (nextIndex < inputRefs.value.length && inputRefs.value[nextIndex]) {
    inputRefs.value[nextIndex]?.focus();
  }
};

const focusPreviousInput = (index: number) => {
  const prevIndex = index - 1;
  if (prevIndex >= 0 && inputRefs.value[prevIndex]) {
    inputRefs.value[prevIndex]?.focus();
  }
};

const isInvalid = (_index: number): boolean => {
  return false;
};

const inputSize = computed(() => props.size as InputVariants["size"]);
</script>

<template>
  <div :class="classes" data-testid="qui-pin-input">
    <InputComponent
      v-for="(pin, i) in Array.from({ length: props.length })"
      :key="i"
      :ref="(el) => setInputRef(el, i)"
      :size="inputSize"
      :name="props.name ? `${props.name}-${i + 1}` : undefined"
      :maxlength="1"
      :disabled="props.disabled"
      :aria-label="`Digit ${i + 1} of ${props.length}`"
      :aria-invalid="isInvalid(i) ? 'true' : undefined"
      aria-required="true"
      data-testid="qui-pin-input-input"
      @input="(e) => handleInput(e, i)"
      @keydown="(e) => handleKeyDown(e, i)"
      v-bind="$attrs"
    />
  </div>
</template>

<style scoped>
.q-pin-input {
  display: inline-flex;
  align-items: center;
}

.q-pin-input :deep(.q-input.size--md) {
  margin-inline: var(--spacing-2);
  width: var(--spacing-8);
  height: var(--spacing-8);
}

.q-pin-input :deep(.q-input.size--sm) {
  margin-inline: var(--spacing-1);
  width: var(--spacing-6);
  height: var(--spacing-6);
}

.q-pin-input :deep(.q-input.size--lg) {
  margin-inline: var(--spacing-3);
  width: var(--spacing-10);
  height: var(--spacing-8);
}
</style>
