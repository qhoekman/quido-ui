import FileDropzoneComponent from '@/components/file-dropzone/file-dropzone.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Upload } from 'lucide-vue-next'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/File Dropzone',
  component: FileDropzoneComponent,
  argTypes: {
    accept: {
      control: 'object'
    }
  },
  args: {
    accept: ['image/*', 'application/pdf']
  },
  render: (args: any) => ({
    components: { FileDropzoneComponent, Upload },
    setup() {
      const files = ref<File[]>([])
      const handleFilesSelected = (selectedFiles: File[]) => {
        files.value = [...files.value, ...selectedFiles]
      }
      return { args, files, handleFilesSelected }
    },
    template: `
      <FileDropzoneComponent 
        v-bind="args" 
        @files-selected="handleFilesSelected"
      >
        <Upload :size="48" />
        <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--color-muted-fg);">
          <span style="font-weight: 600;">Click to upload</span> or drag and drop
        </p>
        <p style="font-size: 0.75rem; color: var(--color-muted-fg); margin: 0;">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </FileDropzoneComponent>
    `
  })
} satisfies Meta<typeof FileDropzoneComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Composition: Story = {
  render: () => ({
    components: { FileDropzoneComponent, Upload },
    setup() {
      const files = ref<File[]>([])
      const handleFilesSelected = (selectedFiles: File[]) => {
        files.value = [...files.value, ...selectedFiles]
      }
      return { files, handleFilesSelected }
    },
    template: `
      <div style="max-width: 360px; padding: var(--spacing-6); border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg);">
        <h3 style="margin: 0 0 var(--spacing-1);">Attachments</h3>
        <p style="margin: 0 0 var(--spacing-4); color: var(--color-muted-fg);">Attach receipts or supporting documents to this expense.</p>
        <FileDropzoneComponent :accept="['image/*', 'application/pdf']" @files-selected="handleFilesSelected">
          <Upload :size="40" />
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--color-muted-fg);">
            <span style="font-weight: 600;">Click to upload</span> or drag and drop
          </p>
          <p style="font-size: 0.75rem; color: var(--color-muted-fg); margin: 0;">
            PDF, PNG, or JPG (MAX. 10MB)
          </p>
        </FileDropzoneComponent>
      </div>
    `
  })
}
