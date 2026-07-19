import { test, expect } from '@playwright/test'

test.describe('Badge', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-display-badge--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('badge')).toBeVisible()
    await expect(frame.getByTestId('badge')).toHaveText('3')

    expect(errors).toEqual([])
  })

  test('WithText story renders longer content', async ({ page }) => {
    await page.goto('?path=/story/components-data-display-badge--with-text')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('badge')).toHaveText('99+')
  })

  test('Sizes story renders all three size variants', async ({ page }) => {
    await page.goto('?path=/story/components-data-display-badge--sizes')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const badges = frame.getByTestId('badge')

    await expect(badges).toHaveCount(3)
    await expect(badges.nth(0)).toHaveText('5')
    await expect(badges.nth(1)).toHaveText('12')
    await expect(badges.nth(2)).toHaveText('42')
  })
})
