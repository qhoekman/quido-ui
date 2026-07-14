<script setup lang="ts">
import { computed, ref } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { Minus, Plus } from "lucide-vue-next";

const numberInputVariants = cva("q-number-input", {
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

const buttonVariants = cva("q-number-input-button", {
  variants: {
    direction: {
      increment: "direction--increment",
      decrement: "direction--decrement",
    },
  },
});

export type NumberInputVariants = VariantProps<typeof numberInputVariants>;

export interface NumberInputProps {
  size?: NumberInputVariants["size"];
  modelValue?: number | string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  [key: string]: any; // Allow other HTML input attributes
}

const props = withDefaults(defineProps<NumberInputProps>(), {
  size: "md",
  placeholder: "0",
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: number | string];
}>();

const inputRef = ref<HTMLInputElement | null>(null);

const classes = computed(() => {
  return numberInputVariants({
    size: props.size,
  });
});

const decrementButtonClasses = computed(() => {
  return buttonVariants({ direction: "decrement" });
});

const incrementButtonClasses = computed(() => {
  return buttonVariants({ direction: "increment" });
});

const handleIncrement = () => {
  if (inputRef.value && !props.disabled) {
    inputRef.value.stepUp();
    handleInputChange();
  }
};

const handleDecrement = () => {
  if (inputRef.value && !props.disabled) {
    inputRef.value.stepDown();
    handleInputChange();
  }
};

const handleInput = (event: Event) => {
  handleInputChange();
};

const handleInputChange = () => {
  if (inputRef.value) {
    const value = inputRef.value.value;
    emit("update:modelValue", value === "" ? "" : Number(value));
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "e" || event.key === "E") {
    event.preventDefault();
  }
};

const iconSize = computed(() => {
  switch (props.size) {
    case "sm":
      return 12;
    case "md":
      return 16;
    case "lg":
      return 20;
    default:
      return 16;
  }
});

const inputClasses = computed(() => {
  return ["q-number-input-field", `size--${props.size}`];
});
</script>

<template>
  <div :class="classes">
    <button
      type="button"
      :class="decrementButtonClasses"
      aria-label="Decrement"
      :disabled="disabled"
      @click="handleDecrement"
    >
      <Minus :size="iconSize" />
    </button>
    <input
      ref="inputRef"
      type="number"
      :class="inputClasses"
      :value="props.modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :min="min"
      :max="max"
      :step="step"
      @input="handleInput"
      @keydown="handleKeyDown"
      v-bind="$attrs"
    />
    <button
      type="button"
      :class="incrementButtonClasses"
      aria-label="Increment"
      :disabled="disabled"
      @click="handleIncrement"
    >
      <Plus :size="iconSize" />
    </button>
  </div>
</template>

<style scoped>
.q-number-input {
  position: relative;
  display: flex;
  align-items: stretch;
  max-width: var(--spacing-32);
}

.size--sm {
  height: var(--spacing-3);
  max-width: var(--spacing-24);
}

.size--md {
  height: var(--spacing-5);
  max-width: var(--spacing-32);
}

.size--lg {
  height: var(--spacing-7);
  max-width: var(--spacing-48);
}

.q-number-input-button {
  padding: var(--spacing-1);
  height: 100%;
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.q-number-input-button:hover:not(:disabled) {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
  color: hsl(from var(--color-background-fg) h s l / 90%);
}

.q-number-input-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.q-number-input-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.direction--increment {
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}

.direction--decrement {
  border-top-left-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
}

.q-number-input-field {
  display: flex;
  text-align: center;
  background-color: var(--color-input);
  border: var(--border-width-default) solid var(--color-border);
  color: var(--color-input-fg);
  border-radius: 0;
  width: 100%;
  height: 100%;
  appearance: textfield;
  box-sizing: border-box;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
}

.q-number-input-field::-webkit-inner-spin-button,
.q-number-input-field::-webkit-outer-spin-button {
  margin: 0;
  appearance: none;
}

.q-number-input-field:focus-visible {
  outline: none;
  border-color: var(--color-ring);
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-number-input-field:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.q-number-input-field.size--sm {
  padding: var(--spacing-2) var(--spacing-2);
}

.q-number-input-field.size--md {
  padding: var(--spacing-3) var(--spacing-2);
}

.q-number-input-field.size--lg {
  padding: var(--spacing-3) var(--spacing-3);
}
</style>
