import { test, expect } from '@playwright/test'

test.describe('Dropdown', () => {
  test('Default story renders trigger, menu closed initially', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-overlay-drop-down--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByRole('button', { name: 'Open' })).toBeVisible()
    await expect(frame.getByTestId('dropdown__content')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('opens on trigger click and shows items', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-drop-down--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    await expect(frame.getByTestId('dropdown__content')).toBeVisible()
    await expect(frame.getByText('My Account', { exact: true })).toBeVisible()

    const items = frame.getByTestId('dropdown__item')
    await expect(items.filter({ hasText: 'Profile' })).toBeVisible()
    await expect(items.filter({ hasText: 'API' })).toHaveAttribute(
      'data-disabled'
    )
  })

  test('closes with Escape key', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-drop-down--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    await expect(frame.getByTestId('dropdown__content')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('dropdown__content')).not.toBeVisible()
  })
})
