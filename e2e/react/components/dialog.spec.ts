import { test, expect } from '@playwright/test'

test.describe('Dialog', () => {
  test('Default story renders trigger and dialog is closed initially', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-overlay-dialog--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(
      frame.getByRole('button', { name: 'Edit Profile' })
    ).toBeVisible()
    await expect(frame.getByTestId('dialog__content')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('opens on trigger click and closes via close button', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-dialog--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Edit Profile' }).click()
    await expect(frame.getByTestId('dialog__content')).toBeVisible()
    await expect(frame.getByTestId('dialog__title')).toHaveText(
      'Edit profile'
    )
    await expect(frame.getByTestId('dialog__description')).toBeVisible()

    await frame.getByTestId('dialog__close').click()
    await expect(frame.getByTestId('dialog__content')).not.toBeVisible()
  })

  test('closes with Escape key', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-dialog--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Edit Profile' }).click()
    await expect(frame.getByTestId('dialog__content')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('dialog__content')).not.toBeVisible()
  })
})
