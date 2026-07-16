<script setup lang="ts">
import { computed, ref } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { Eye, EyeOff } from "lucide-vue-next";

const passwordInputVariants = cva("q-password-input", {
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

export type PasswordInputVariants = VariantProps<typeof passwordInputVariants>;

export interface PasswordInputProps {
  size?: PasswordInputVariants["size"];
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
  [key: string]: any; // Allow other HTML input attributes
}

const props = withDefaults(defineProps<PasswordInputProps>(), {
  size: "md",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const isPasswordVisible = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);

const classes = computed(() => {
  return passwordInputVariants({
    size: props.size,
  });
});

const inputType = computed(() => {
  return isPasswordVisible.value ? "text" : "password";
});

const togglePasswordVisibility = () => {
  if (!props.disabled) {
    isPasswordVisible.value = !isPasswordVisible.value;
  }
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const iconSize = computed(() => {
  switch (props.size) {
    case "sm":
      return 20;
    case "md":
      return 24;
    case "lg":
      return 28;
    default:
      return 24;
  }
});

const inputClasses = computed(() => {
  return ["q-password-input-field", `size--${props.size}`];
});
</script>

<template>
  <div :class="classes">
    <input
      ref="inputRef"
      :type="inputType"
      v-bind="$attrs"
      :class="inputClasses"
      :value="props.modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :readonly="readOnly"
      :maxlength="maxLength"
      :minlength="minLength"
      @input="handleInput"
    />
    <button
      type="button"
      class="q-password-input-button"
      aria-label="Toggle password visibility"
      :disabled="disabled"
      @click="togglePasswordVisibility"
    >
      <EyeOff v-if="!isPasswordVisible" :size="iconSize" class="icon" />
      <Eye v-else :size="iconSize" class="icon" />
    </button>
  </div>
</template>

<style scoped>
.q-password-input {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  color: var(--color-input-fg);
}

.q-password-input-field {
  flex: 1 1 auto;
  min-width: 0;
  border: none;
  outline: none;
  padding: var(--spacing-2);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  background-color: transparent;
  color: var(--color-input-fg);
  box-sizing: border-box;
}

.q-password-input-field::placeholder {
  color: var(--color-muted-fg);
}

.q-password-input-field:focus-visible {
  outline: none;
}

.q-password-input-field:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.q-password-input-button {
  flex-shrink: 0;
  align-self: stretch;
  background: none;
  border: none;
  color: var(--color-input-fg);
  padding: 0 var(--spacing-2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.q-password-input-button:hover:not(:disabled) {
  color: hsl(from var(--color-input-fg) h s l / 80%);
}

.q-password-input-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.q-password-input-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.q-password-input-button .icon {
  flex-shrink: 0;
  max-width: none;
  display: block;
}

.q-password-input:focus-within {
  border-color: var(--color-ring);
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

/* Size modifiers — field heights match Input; icons sized for clear visibility */
.size--sm .q-password-input-field {
  height: var(--spacing-6);
  padding: var(--spacing-2) var(--spacing-2);
}

.size--sm .icon {
  width: var(--spacing-5);
  height: var(--spacing-5);
}

.size--md .q-password-input-field {
  height: var(--spacing-8);
  padding: var(--spacing-2) var(--spacing-3);
}

.size--md .icon {
  width: var(--spacing-6);
  height: var(--spacing-6);
}

.size--lg .q-password-input-field {
  height: var(--spacing-10);
  padding: var(--spacing-3) var(--spacing-3);
}

.size--lg .icon {
  width: var(--spacing-7);
  height: var(--spacing-7);
}
</style>
