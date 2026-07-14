<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ChatMessageMetaProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ChatMessageMetaProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-chat-message-meta']"
    data-testid="qui-chat-message-meta"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-chat-message-meta {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: var(--spacing-2-5);
}
</style>
