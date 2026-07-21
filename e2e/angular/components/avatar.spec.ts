import { test, expect } from '@playwright/test'

test.describe('Avatar', () => {
  test('Default story renders the image without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-avatar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const avatar = frame.getByTestId('avatar')

    await expect(avatar).toBeVisible()
    await expect(frame.getByTestId('avatar__image')).toBeVisible()
    await expect(avatar).toHaveCSS('overflow', 'hidden')
    await expect(avatar).toHaveCSS('border-radius', /^\d/)

    expect(errors).toEqual([])
  })
})
