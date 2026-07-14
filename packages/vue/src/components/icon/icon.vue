<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const iconVariants = cva('q-icon', {
  variants: {
    size: {
      xs: 'size--xs',
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg',
      xl: 'size--xl',
      '2xl': 'size--2xl',
      '3xl': 'size--3xl',
      '4xl': 'size--4xl',
      '5xl': 'size--5xl',
      auto: 'size--auto'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type IconVariants = VariantProps<typeof iconVariants>

export interface IconProps {
  size?: IconVariants['size']
  name?: string
  asChild?: boolean
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
  name: '',
  asChild: false
})

const classes = computed(() => {
  return iconVariants({
    size: props.size
  })
})
</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'span'"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-icon {
  display: inline-flex;
  flex-shrink: 0;
}

.q-icon svg {
  width: 100%;
  height: 100%;
}

.q-icon.size--xs {
  width: var(--spacing-2);
  height: var(--spacing-2);
}

.q-icon.size--sm {
  width: var(--spacing-3);
  height: var(--spacing-3);
}

.q-icon.size--md {
  width: var(--spacing-4);
  height: var(--spacing-4);
}

.q-icon.size--lg {
  width: var(--spacing-5);
  height: var(--spacing-5);
}

.q-icon.size--xl {
  width: var(--spacing-6);
  height: var(--spacing-6);
}

.q-icon.size--2xl {
  width: var(--spacing-8);
  height: var(--spacing-8);
}

.q-icon.size--3xl {
  width: var(--spacing-10);
  height: var(--spacing-10);
}

.q-icon.size--4xl {
  width: var(--spacing-12);
  height: var(--spacing-12);
}

.q-icon.size--5xl {
  width: var(--spacing-16);
  height: var(--spacing-16);
}

.q-icon.size--auto {
  width: 100%;
  height: 100%;
}
</style>
