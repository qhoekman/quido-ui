<script setup lang="ts">
import { ref } from 'vue'
import ButtonComponent from '@/components/button/button.vue'
import { File, X } from 'lucide-vue-next'

export interface FileInputProps {
  multiple?: boolean
}

const props = withDefaults(defineProps<FileInputProps>(), {
  multiple: false
})

const emit = defineEmits<{
  filesSelected: [files: File[]]
}>()

const files = ref<File[]>([])
const inputRef = ref<HTMLInputElement | null>(null)

const handleClick = () => {
  if (inputRef.value) {
    inputRef.value.click()
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleClick()
  }
}

const handleChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    files.value = Array.from(input.files)
    emit('filesSelected', files.value)
  }
}

const handleClear = (event: Event) => {
  event.stopPropagation()
  files.value = []
  if (inputRef.value) {
    inputRef.value.value = ''
  }
  emit('filesSelected', files.value)
}
</script>

<template>
  <div
    class="q-file-input"
    @click="handleClick"
    tabindex="0"
    @keydown="handleKeyDown"
    data-testid="qui-file-input"
  >
    <input
      ref="inputRef"
      data-testid="qui-file-input-input"
      type="file"
      class="hidden"
      :multiple="multiple"
      @change="handleChange"
    />
    <File :size="16" />
    <span v-if="files.length > 0">{{ files.length }} file(s) selected</span>
    <span v-else class="placeholder">Choose a file...</span>
    <ButtonComponent
      v-if="files.length > 0"
      class="clear-button"
      variant="ghost"
      size="icon"
      @click="handleClear"
    >
      <X :size="16" />
    </ButtonComponent>
  </div>
</template>

<style scoped>
.q-file-input {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-2);
  cursor: pointer;
  gap: var(--spacing-1);
}

.q-file-input svg {
  margin-right: var(--spacing-1);
  width: var(--spacing-4);
  height: var(--spacing-4);
  flex-shrink: 0;
}

.q-file-input span {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
}

.q-file-input .placeholder {
  color: var(--color-muted-fg);
}

.q-file-input:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.hidden {
  display: none;
}

.clear-button {
  margin-left: var(--spacing-2);
}
</style>
