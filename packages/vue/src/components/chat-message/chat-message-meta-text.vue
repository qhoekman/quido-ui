<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ChatMessageMetaTextProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ChatMessageMetaTextProps>(), {
  asChild: false,
  as: 'h6'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-chat-message-meta-text']"
    data-testid="qui-chat-message-meta-text"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-chat-message-meta-text {
  color: hsl(from var(--color-background-fg) h s l / 80%);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-4);
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  width: 100%;
  margin: 0;
}
</style>
