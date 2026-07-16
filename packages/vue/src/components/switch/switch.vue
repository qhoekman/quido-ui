<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'

export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
}

const props = withDefaults(defineProps<SwitchProps>(), {
  checked: undefined,
  defaultChecked: false,
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()

const handleCheckedChange = (checked: boolean) => {
  emit('update:checked', checked)
}
</script>

<template>
  <SwitchRoot
    :model-value="checked"
    :default-value="defaultChecked"
    :disabled="disabled"
    :required="required"
    :name="name"
    :value="value"
    :class="['q-switch']"
    @update:model-value="handleCheckedChange"
    v-bind="$attrs"
  >
    <SwitchThumb :class="['q-switch-thumb']" />
  </SwitchRoot>
</template>

<style scoped>
.q-switch {
  display: inline-flex;
  height: var(--spacing-5);
  width: var(--spacing-9);
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  border-radius: var(--border-radius-full);
  border: var(--border-width-2) solid transparent;
  box-shadow: var(--box-shadow-sm);
  transition: background-color 0.3s;
}

.q-switch:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.q-switch:disabled,
.q-switch[data-disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

.q-switch[data-state='checked'] {
  background-color: var(--color-primary);
}

.q-switch[data-state='unchecked'] {
  background-color: var(--color-border);
}

.q-switch-thumb {
  pointer-events: none;
  display: block;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-lg);
  transition: transform 0.3s;
}

.q-switch-thumb[data-state='checked'] {
  transform: translateX(var(--spacing-4));
}

.q-switch-thumb[data-state='unchecked'] {
  transform: translateX(0);
}
</style>
