import { test, expect } from '@playwright/test'

test.describe('FileDropzone', () => {
  test('Default story renders the dropzone with slot content, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      '?path=/story/components-data-entry-file-dropzone--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const dropzone = frame.getByTestId('file-dropzone')

    await expect(dropzone).toBeVisible()
    await expect(dropzone).toContainText('Click to upload')

    expect(errors).toEqual([])
  })

  test('clicking the dropzone opens the native file chooser', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-file-dropzone--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const dropzone = frame.getByTestId('file-dropzone')

    const chooserPromise = page.waitForEvent('filechooser')
    await dropzone.click()
    const chooser = await chooserPromise
    expect(chooser).toBeTruthy()
  })

  test('selecting a file via the hidden input adds it to the file list and emits filesSelected', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-file-dropzone--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('file-dropzone__input')

    await input.setInputFiles({
      name: 'photo.png',
      mimeType: 'image/png',
      buffer: Buffer.from('fake-image-bytes')
    })

    const items = frame.getByTestId('file-dropzone__file-item')
    await expect(items).toHaveCount(1)
    await expect(items.first()).toContainText('photo.png')
  })

  test('regression: dropping files filters by the accept prop, only valid files are added', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-file-dropzone--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const dropzone = frame.getByTestId('file-dropzone')

    const dataTransfer = await dropzone.evaluateHandle(() => {
      const dt = new DataTransfer()
      dt.items.add(new File(['a'], 'photo.png', { type: 'image/png' }))
      dt.items.add(new File(['b'], 'notes.txt', { type: 'text/plain' }))
      return dt
    })

    await dropzone.dispatchEvent('dragenter', { dataTransfer })
    await expect(dropzone).toHaveClass(/drag-active/)

    await dropzone.dispatchEvent('drop', { dataTransfer })
    await expect(dropzone).not.toHaveClass(/drag-active/)

    const items = frame.getByTestId('file-dropzone__file-item')
    await expect(items).toHaveCount(1)
    await expect(items.first()).toContainText('photo.png')
  })

  test('removing a file clears the file list', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-file-dropzone--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('file-dropzone__input')

    await input.setInputFiles({
      name: 'photo.png',
      mimeType: 'image/png',
      buffer: Buffer.from('fake-image-bytes')
    })

    const item = frame.getByTestId('file-dropzone__file-item')
    await expect(item).toHaveCount(1)
    await item.getByRole('button').click()

    await expect(frame.getByTestId('file-dropzone__file-list')).toHaveCount(0)
  })
})
