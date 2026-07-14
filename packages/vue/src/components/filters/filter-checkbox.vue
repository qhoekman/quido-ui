<script setup lang="ts">
import { computed } from 'vue'
import { useFilterStore, type FilterItemKey } from './useFilterStore'
import Checkbox from '../checkbox/checkbox.vue'
import { Primitive } from 'reka-ui'
import type { CheckboxProps } from '../checkbox/checkbox.vue'

export interface FilterCheckboxProps extends Omit<CheckboxProps, 'checked' | 'onCheckedChange'> {
  name: FilterItemKey
}

const props = defineProps<FilterCheckboxProps>()

const { filters, setFilter } = useFilterStore()

const checked = computed(() => filters[props.name] === 'true')

const handleChange = (value: boolean) => {
  setFilter(props.name, `${value}`)
}
</script>

<template>
  <div class="q-filter-checkbox-container">
    <Checkbox
      :id="props.name ?? ($attrs.id as string)"
      :name="props.name"
      :checked="checked"
      :disabled="props.disabled"
      :required="props.required"
      @update:checked="handleChange"
      v-bind="$attrs"
    />
    <Primitive
      as="label"
      :for="props.name ?? ($attrs.id as string)"
      :class="['q-filter-checkbox-label']"
    >
      <slot />
    </Primitive>
  </div>
</template>

<style scoped>
.q-filter-checkbox-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.q-filter-checkbox-label {
  font-size: var(--font-size-sm);
  cursor: pointer;
  user-select: none;
}
</style>
