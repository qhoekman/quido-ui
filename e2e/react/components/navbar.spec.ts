import { test, expect } from '@playwright/test'

test.describe('Navbar', () => {
  test('Default story renders back link, title/subtitle, and link', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-mobile-components-navbar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('navbar')).toBeVisible()
    await expect(frame.getByTestId('navbar__content')).toBeVisible()
    await expect(frame.getByTestId('navbar__back')).toContainText('Back')
    await expect(frame.getByTestId('navbar__title')).toContainText('Navbar')
    await expect(frame.getByTestId('navbar__subtitle')).toHaveText('Subtitle')
    await expect(frame.getByTestId('navbar__link')).toHaveText('Link')

    expect(errors).toEqual([])
  })
})
