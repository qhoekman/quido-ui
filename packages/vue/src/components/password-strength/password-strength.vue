<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export type StrengthLevel = 'weak' | 'medium' | 'strong' | ''

export interface Requirement {
  regex: RegExp
  description: string
}

export interface PasswordStrengthProps {
  value?: string
  requirements?: Requirement[]
  thresholds?: [number, number]
  asChild?: boolean
  as?: 'div'
}

const props = withDefaults(defineProps<PasswordStrengthProps>(), {
  value: '',
  requirements: () => [
    { regex: /.{8,}/, description: 'At least 8 characters' },
    { regex: /[a-z]/, description: 'At least one lowercase letter' },
    { regex: /[A-Z]/, description: 'At least one uppercase letter' },
    { regex: /[0-9]/, description: 'At least one number' },
    { regex: /[^A-Za-z0-9]/, description: 'At least one special character' },
  ],
  thresholds: () => [2, 4],
  asChild: false,
  as: 'div',
})

const strength = computed<StrengthLevel>(() => {
  if (!props.value) {
    return ''
  }

  const metRequirements = props.requirements.filter((req) =>
    req.regex.test(props.value)
  )

  if (metRequirements.length <= props.thresholds[0]) {
    return 'weak'
  } else if (metRequirements.length <= props.thresholds[1]) {
    return 'medium'
  } else {
    return 'strong'
  }
})

const getBarStyle = (index: number): Record<string, string> => {
  if (strength.value === 'weak' && index === 0) {
    return { backgroundColor: 'var(--color-red-500)' }
  } else if (strength.value === 'medium' && index <= 1) {
    return { backgroundColor: 'var(--color-orange-400)' }
  } else if (strength.value === 'strong') {
    return { backgroundColor: 'var(--color-emerald-500)' }
  } else {
    return { backgroundColor: 'var(--color-muted)' }
  }
}

const bars = [0, 1, 2]
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-password-strength"
    data-testid="password-strength"
    v-bind="$attrs"
  >
    <div
      v-for="(bar, index) in bars"
      :key="index"
      class="bar"
      data-testid="password-strength-bar"
      :style="getBarStyle(index)"
    ></div>
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  gap: var(--spacing-2);
  height: var(--spacing-2);
  margin: var(--spacing-2) 0;
}

.bar {
  height: var(--spacing-2);
  width: var(--span-1-3);
  border-radius: var(--border-radius-full);
  transition: background-color 0.2s ease-in-out;
}
</style>
