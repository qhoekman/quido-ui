import { test, expect } from '@playwright/test'

test.describe('Dialog', () => {
  test('Default story renders closed, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-dialog--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('dialog')).toHaveCount(1)
    await expect(frame.getByTestId('dialog')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: clicking Open Dialog shows the modal with title, content, and footer', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-dialog--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open Dialog' }).click()

    const dialog = frame.getByTestId('dialog')
    await expect(dialog).toBeVisible()
    await expect(frame.getByTestId('dialog__title')).toHaveText('Dialog Title')
    await expect(frame.getByTestId('dialog__content')).toBeVisible()
    await expect(frame.getByTestId('dialog__footer')).toBeVisible()
  })

  test('regression: the close button closes the dialog', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-dialog--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open Dialog' }).click()
    await expect(frame.getByTestId('dialog')).toBeVisible()

    await frame.getByTestId('dialog__close').click()
    await expect(frame.getByTestId('dialog')).not.toBeVisible()
  })

  test('regression: Cancel and Confirm buttons close the dialog', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-dialog--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open Dialog' }).click()
    await frame.getByRole('button', { name: 'Cancel' }).click()
    await expect(frame.getByTestId('dialog')).not.toBeVisible()

    await frame.getByRole('button', { name: 'Open Dialog' }).click()
    await frame.getByRole('button', { name: 'Confirm' }).click()
    await expect(frame.getByTestId('dialog')).not.toBeVisible()
  })

  test('regression: pressing Escape closes the dialog', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-dialog--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open Dialog' }).click()
    await expect(frame.getByTestId('dialog')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('dialog')).not.toBeVisible()
  })

  test('Confirm story renders closed and opens correctly, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-dialog--confirm')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('dialog')).not.toBeVisible()
    await frame.getByRole('button', { name: 'Open Dialog' }).click()
    await expect(frame.getByTestId('dialog__title')).toHaveText('Are you absolutely sure?')

    expect(errors).toEqual([])
  })
})
