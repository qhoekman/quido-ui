<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ChatMessageBubbleProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ChatMessageBubbleProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-chat-message-bubble']"
    data-testid="qui-chat-message-bubble"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-chat-message-bubble {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3-5) var(--spacing-2);
  border-radius: var(--border-radius-default);
}
</style>
