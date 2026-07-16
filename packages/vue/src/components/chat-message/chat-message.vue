<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const chatMessageVariants = cva('q-chat-message', {
  variants: {
    variant: {
      sender: 'variant--sender',
      receiver: 'variant--receiver'
    }
  },
  defaultVariants: {
    variant: 'sender'
  }
})

export type ChatMessageVariants = VariantProps<typeof chatMessageVariants>

export interface ChatMessageProps {
  variant?: ChatMessageVariants['variant']
  asChild?: boolean
}

const props = withDefaults(defineProps<ChatMessageProps>(), {
  variant: 'sender',
  asChild: false
})

const classes = computed(() => {
  return chatMessageVariants({
    variant: props.variant
  })
})
</script>

<template>
  <Primitive
    :as="'div'"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-chat-message"
    v-bind="$attrs"
  >
    <!-- Avatar slot - matches Angular's ng-content select="[qui-avatar], qui-avatar" -->
    <slot name="avatar" />
    <div class="q-chat-message__grid">
      <!-- User slot - matches Angular's ng-content select="[qui-chat-message-user]" -->
      <slot name="user" />
      <div class="q-chat-message__bubble">
        <!-- Bubble slot - matches Angular's ng-content select="[qui-chat-message-bubble]" -->
        <slot name="bubble" />
        <!-- Meta slot - matches Angular's ng-content select="[qui-chat-message-meta]" -->
        <slot name="meta" />
      </div>
    </div>
  </Primitive>
</template>

<style scoped>
.q-chat-message {
  display: flex;
  gap: var(--spacing-2-5);
  margin-bottom: var(--spacing-4);
}

.variant--sender {
  flex-direction: row-reverse;
}

.variant--receiver {
  flex-direction: row;
}

.variant--sender :deep([data-testid='qui-chat-message-bubble']) {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.variant--receiver :deep([data-testid='qui-chat-message-bubble']) {
  background-color: var(--color-secondary);
  color: var(--color-secondary-fg);
}

.variant--sender :deep([data-testid='qui-chat-message-user']) {
  text-align: right;
}

.variant--receiver :deep([data-testid='qui-chat-message-user']) {
  text-align: left;
}

.variant--sender :deep([data-testid='qui-chat-message-meta']) {
  text-align: left;
}

.variant--receiver :deep([data-testid='qui-chat-message-meta']) {
  text-align: right;
}

.q-chat-message__grid {
  display: grid;
}

.q-chat-message__bubble {
  display: grid;
  width: max-content;
}
</style>
