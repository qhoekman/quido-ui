import { test, expect } from '@playwright/test'

test.describe('Tag', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-display-tag--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('tag')).toBeVisible()
    await expect(frame.getByTestId('tag')).toHaveText('New')

    expect(errors).toEqual([])
  })

  test('Variants story renders all four variants', async ({ page }) => {
    await page.goto('?path=/story/components-data-display-tag--variants')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const tags = frame.getByTestId('tag')

    await expect(tags).toHaveCount(4)
    await expect(tags.nth(0)).toHaveText('Primary')
    await expect(tags.nth(1)).toHaveText('Secondary')
    await expect(tags.nth(2)).toHaveText('Destructive')
    await expect(tags.nth(3)).toHaveText('Outline')
  })
})
