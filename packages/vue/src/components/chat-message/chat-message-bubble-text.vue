<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ChatMessageBubbleTextProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ChatMessageBubbleTextProps>(), {
  asChild: false,
  as: 'h5'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-chat-message-bubble-text']"
    data-testid="qui-chat-message-bubble-text"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-chat-message-bubble-text {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-snug);
  margin: 0;
}
</style>
