<script setup lang="ts">
import { ref, computed } from 'vue'
import ButtonComponent from '@/components/button/button.vue'
import { File, X } from 'lucide-vue-next'

export interface FileDropzoneProps {
  accept?: string[]
}

const props = withDefaults(defineProps<FileDropzoneProps>(), {
  accept: () => []
})

const emit = defineEmits<{
  filesSelected: [files: File[]]
}>()

const dragActive = ref(false)
const files = ref<File[]>([])
const inputRef = ref<HTMLInputElement | null>(null)

const dropzoneClasses = computed(() => {
  return [
    'q-file-dropzone',
    {
      'drag-active': dragActive.value
    }
  ]
})

const handleClick = () => {
  if (inputRef.value) {
    inputRef.value.accept = props.accept.join(',')
    inputRef.value.click()
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleClick()
  }
}

const handleDrag = (event: DragEvent) => {
  event.preventDefault()
  event.stopPropagation()
  dragActive.value = event.type === 'dragenter' || event.type === 'dragover'
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  event.stopPropagation()
  dragActive.value = false
  
  if (event.dataTransfer?.files) {
    const droppedFiles = Array.from(event.dataTransfer.files)
    const validFiles = droppedFiles.filter((file) => validate(file))
    files.value = [...files.value, ...validFiles]
    
    if (inputRef.value) {
      inputRef.value.files = createFileList(validFiles)
    }
    
    emit('filesSelected', validFiles)
  }
}

const handleChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    const selectedFiles = Array.from(input.files)
    const validFiles = selectedFiles.filter((file) => validate(file))
    files.value = [...files.value, ...validFiles]
    emit('filesSelected', validFiles)
  }
}

const validate = (file: File): boolean => {
  if (props.accept.length === 0) {
    return true
  }
  
  return props.accept.some((accept) => {
    if (accept === '*') {
      return true
    }

    const [type] = file.type.split('/')
    const [acceptType, acceptSubtype] = accept.split('/')

    if (acceptSubtype === '*') {
      return acceptType === type
    }

    return accept === file.type
  })
}

const removeFile = (fileToRemove: File) => {
  files.value = files.value.filter((file) => file !== fileToRemove)
}

const createFileList = (fileArray: File[]): FileList => {
  const dataTransfer = new DataTransfer()
  fileArray.forEach((file) => {
    dataTransfer.items.add(file)
  })
  return dataTransfer.files
}
</script>

<template>
  <div>
    <div
      :class="dropzoneClasses"
      data-testid="qui-file-dropzone"
      @click="handleClick"
      @keydown="handleKeyDown"
      tabindex="0"
      @dragenter="handleDrag"
      @dragleave="handleDrag"
      @dragover="handleDrag"
      @drop="handleDrop"
    >
      <input
        ref="inputRef"
        data-testid="qui-file-dropzone-input"
        type="file"
        class="hidden"
        multiple
        @change="handleChange"
      />
      <div class="content" data-testid="qui-file-dropzone-content">
        <slot />
      </div>
    </div>
    <ul
      v-if="files.length > 0"
      class="file-list"
      data-testid="qui-file-dropzone-file-list"
    >
      <li
        v-for="file in files"
        :key="file.name"
        class="file-item"
        data-testid="qui-file-dropzone-file-item"
      >
        <p class="file-item-content">
          <File :size="16" />
          <span>{{ file.name }}</span>
        </p>
        <ButtonComponent
          variant="ghost"
          size="icon"
          @click.stop="removeFile(file)"
        >
          <X :size="16" />
        </ButtonComponent>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.q-file-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--spacing-64);
  border: 2px dashed var(--color-border);
  border-radius: var(--border-radius-lg);
  cursor: pointer;
}

.q-file-dropzone.drag-active {
  border-color: var(--color-primary);
}

.q-file-dropzone:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.content {
  padding-top: var(--spacing-5);
  padding-bottom: var(--spacing-6);
  text-align: center;
}

.file-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.file-item {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-2);
  padding: var(--spacing-2);
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
}

.file-item-content {
  margin: auto 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 96%;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.hidden {
  display: none;
}
</style>
