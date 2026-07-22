import FileInputComponent from '@/components/file-input/file-input.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/File Input',
  component: FileInputComponent,
  argTypes: {
    multiple: {
      control: 'boolean'
    }
  },
  args: {
    multiple: false
  },
  render: (args: any) => ({
    components: { FileInputComponent },
    setup() {
      const files = ref<File[]>([])
      const handleFilesSelected = (selectedFiles: File[]) => {
        files.value = selectedFiles
      }
      return { args, files, handleFilesSelected }
    },
    template: `
      <FileInputComponent 
        v-bind="args" 
        @files-selected="handleFilesSelected"
      />
    `
  })
} satisfies Meta<typeof FileInputComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { FileInputComponent },
    setup() {
      const files = ref<File[]>([])
      const handleFilesSelected = (selectedFiles: File[]) => {
        files.value = selectedFiles
      }
      return { files, handleFilesSelected }
    },
    template: `
      <div style="max-width: 320px;">
        <label style="display: block; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-1-5);">Resume</label>
        <FileInputComponent @files-selected="handleFilesSelected" />
        <p style="margin: var(--spacing-1-5) 0 0; font-size: var(--font-size-sm); color: var(--color-muted-fg);">PDF or Word document, up to 5MB.</p>
      </div>
    `
  })
}
