import { test, expect } from '@playwright/test'

test.describe('Website Navbar', () => {
  test('WithMenuRight story renders brand, links, and opens dropdown', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-website-components-navbar--with-menu-right')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('navbar')).toBeVisible()
    await expect(frame.getByTestId('navbar__brand')).toBeVisible()
    await expect(frame.getByTestId('navbar__logo')).toBeVisible()
    await expect(frame.getByTestId('navbar__link')).toHaveCount(2)
    await expect(frame.getByTestId('navbar__actions')).toBeVisible()

    await frame.getByTestId('navbar__dropdown-trigger').click()
    await expect(frame.getByTestId('navbar__dropdown-content')).toBeVisible()
    await expect(frame.getByTestId('navbar__dropdown-link')).toHaveCount(3)

    expect(errors).toEqual([])
  })

  test('WithMegaMenu story composes the MegaMenu component', async ({ page }) => {
    await page.goto('?path=/story/features-website-components-navbar--with-mega-menu')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('navbar')).toBeVisible()
    await expect(frame.getByTestId('mega-menu')).toBeVisible()
    await expect(frame.getByTestId('mega-menu__trigger')).toBeVisible()
  })
})
