import { test, expect } from '@playwright/test'

test.describe('Hover Card', () => {
  test('Default story renders trigger with content hidden, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-hover-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('hover-card__trigger')).toBeVisible()
    await expect(frame.getByTestId('hover-card__content')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: hovering the trigger shows the card content after a delay', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-hover-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('hover-card__trigger').hover()
    await expect(frame.getByTestId('hover-card__content')).toBeVisible()

    await page.mouse.move(10, 10)
    await expect(frame.getByTestId('hover-card__content')).toHaveCount(0)
  })

  test('regression: a quick hover-in-then-out never shows the card', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-hover-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('hover-card__trigger').hover()
    await page.mouse.move(10, 10)

    await page.waitForTimeout(500)
    await expect(frame.getByTestId('hover-card__content')).toHaveCount(0)
  })
})
