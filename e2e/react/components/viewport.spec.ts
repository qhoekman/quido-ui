import { test, expect } from '@playwright/test'

test.describe('ViewportLayout', () => {
  test('Default story composes navbar, block, and toolbar', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-mobile-layouts-viewport--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('viewport')).toBeVisible()
    await expect(frame.getByTestId('navbar')).toBeVisible()
    await expect(frame.getByTestId('block')).toBeVisible()
    await expect(frame.getByTestId('toolbar')).toBeVisible()
    await expect(frame.getByTestId('toolbar__link')).toHaveCount(5)

    expect(errors).toEqual([])
  })
})
