<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const vstackVariants = cva('q-vstack', {
  variants: {
    gap: {
      none: 'gap--none',
      sm: 'gap--sm',
      md: 'gap--md',
      lg: 'gap--lg',
      xl: 'gap--xl',
      '2xl': 'gap--2xl'
    }
  },
  defaultVariants: {
    gap: 'md'
  }
})

export type VStackVariants = VariantProps<typeof vstackVariants>

export interface VStackProps {
  gap?: VStackVariants['gap']
  as?: string
  asChild?: boolean
}

const props = withDefaults(defineProps<VStackProps>(), {
  gap: 'md',
  asChild: false,
  as: 'div'
})

const classes = computed(() => {
  return vstackVariants({
    gap: props.gap
  })
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-vstack {
  display: flex;
  flex-direction: column;
}

.gap--none {
  gap: 0;
}

.gap--sm {
  gap: var(--spacing-2);
}

.gap--md {
  gap: var(--spacing-4);
}

.gap--lg {
  gap: var(--spacing-6);
}

.gap--xl {
  gap: var(--spacing-8);
}

.gap--2xl {
  gap: var(--spacing-12);
}
</style>
