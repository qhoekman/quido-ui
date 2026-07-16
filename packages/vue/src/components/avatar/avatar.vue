<script setup lang="ts">
import { computed } from 'vue'
import { AvatarRoot } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const avatarVariants = cva('q-avatar', {
  variants: {
    variant: {
      primary: ''
    },
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export type AvatarVariants = VariantProps<typeof avatarVariants>

export interface AvatarProps {
  variant?: AvatarVariants['variant']
  size?: AvatarVariants['size']
  asChild?: boolean
}

const props = withDefaults(defineProps<AvatarProps>(), {
  variant: 'primary',
  size: 'md',
  asChild: false
})

const classes = computed(() => {
  return avatarVariants({
    variant: props.variant,
    size: props.size
  })
})
</script>

<template>
  <AvatarRoot
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </AvatarRoot>
</template>

<style scoped>
.q-avatar {
  position: relative;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: var(--border-radius-full);
}

.size--sm {
  height: var(--spacing-9);
  width: var(--spacing-9);
}

.size--md {
  height: var(--spacing-10);
  width: var(--spacing-10);
}

.size--lg {
  height: var(--spacing-11);
  width: var(--spacing-11);
}
</style>
