<script setup lang="ts">
import { AccordionRoot } from 'reka-ui'

export interface AccordionProps {
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  value?: string | string[]
  collapsible?: boolean
  disabled?: boolean
  orientation?: 'vertical' | 'horizontal'
}

const props = withDefaults(defineProps<AccordionProps>(), {
  type: 'single',
  collapsible: false,
  disabled: false,
  orientation: 'vertical'
})

const emit = defineEmits<{
  'update:value': [value: string | string[] | undefined]
}>()

const handleValueChange = (value: string | string[] | undefined) => {
  emit('update:value', value)
}
</script>

<template>
  <AccordionRoot
    :type="type"
    :default-value="defaultValue"
    :value="value"
    :collapsible="collapsible"
    :disabled="disabled"
    :orientation="orientation"
    :class="['q-accordion']"
    @update:value="handleValueChange"
    v-bind="$attrs"
  >
    <slot />
  </AccordionRoot>
</template>

<style scoped>
.q-accordion {
  display: flex;
  flex-direction: column;
}
</style>
