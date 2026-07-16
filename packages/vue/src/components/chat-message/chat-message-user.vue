<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ChatMessageUserProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ChatMessageUserProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-chat-message-user']"
    data-testid="qui-chat-message-user"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-chat-message-user {
  color: hsl(from var(--color-background-fg) h s l / 80%);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  padding-bottom: var(--spacing-1);
}
</style>
