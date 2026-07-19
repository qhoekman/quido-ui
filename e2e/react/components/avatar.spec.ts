import { test, expect } from '@playwright/test'

test.describe('Avatar', () => {
  test('Default story renders the image without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-display-avatar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('avatar')).toBeVisible()
    await expect(frame.getByTestId('avatar__image')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('Fallback story shows the fallback initials when the image fails to load', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-display-avatar--fallback')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('avatar__fallback')).toBeVisible()
    await expect(frame.getByTestId('avatar__fallback')).toHaveText('JD')
  })
})
