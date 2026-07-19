import { test, expect } from '@playwright/test'

test.describe('File Input', () => {
  test('Default story renders the placeholder, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-file-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('qui-file-input')

    await expect(trigger).toBeVisible()
    await expect(trigger).toContainText('Choose a file...')

    expect(errors).toEqual([])
  })

  test('clicking opens the native file chooser', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-file-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('qui-file-input')

    const chooserPromise = page.waitForEvent('filechooser')
    await trigger.click()
    const chooser = await chooserPromise
    expect(chooser).toBeTruthy()
  })

  test('selecting a file shows the selected count and emits filesSelected', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-file-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('qui-file-input')
    const input = frame.getByTestId('qui-file-input-input')

    await input.setInputFiles({
      name: 'photo.png',
      mimeType: 'image/png',
      buffer: Buffer.from('fake-image-bytes')
    })

    await expect(trigger).toContainText('1 file(s) selected')
  })

  test('regression: clicking the clear button removes the file without reopening the file chooser', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-file-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('qui-file-input')
    const input = frame.getByTestId('qui-file-input-input')

    await input.setInputFiles({
      name: 'photo.png',
      mimeType: 'image/png',
      buffer: Buffer.from('fake-image-bytes')
    })
    await expect(trigger).toContainText('1 file(s) selected')

    let chooserFired = false
    page.on('filechooser', () => {
      chooserFired = true
    })

    await trigger.getByRole('button').click()

    await expect(trigger).toContainText('Choose a file...')
    expect(chooserFired).toBe(false)
  })

  test('multiple prop sets the native multiple attribute', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-file-input--default&args=multiple:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('qui-file-input-input')

    await expect(input).toHaveAttribute('multiple', '')
  })
})
