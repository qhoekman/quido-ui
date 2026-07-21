import { test, expect } from '@playwright/test'

test.describe('Icon', () => {
  test('Default story renders the icon at the md size, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-icon--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const icon = frame.getByTestId('icon')

    await expect(icon).toBeVisible()
    await expect(icon).toHaveClass(/size--md/)
    await expect(icon.locator('svg')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: size arg applies the corresponding size class', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-icon--default&args=size:2xl'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('icon')).toHaveClass(/size--2xl/)
  })
})
