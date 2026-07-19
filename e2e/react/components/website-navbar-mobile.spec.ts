import { test, expect } from '@playwright/test'

test.describe('Website NavbarMobile', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('WithMobileMenu story opens and closes the mobile drawer', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-website-components-navbar--with-mobile-menu')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('navbar-mobile')).toBeVisible()
    await expect(frame.getByTestId('navbar-mobile__content')).not.toBeVisible()

    await frame.getByTestId('navbar-mobile__trigger').click()
    await expect(frame.getByTestId('navbar-mobile__content')).toBeVisible()
    await expect(frame.getByTestId('navbar-mobile__header')).toBeVisible()
    await expect(frame.getByTestId('navbar-mobile__logo')).toBeVisible()
    await expect(frame.getByTestId('navbar-mobile__link')).toHaveCount(2)
    await expect(frame.getByTestId('navbar-mobile__dropdown-label')).toBeVisible()
    await expect(frame.getByTestId('navbar-mobile__dropdown-link')).toHaveCount(3)

    await frame.getByTestId('navbar-mobile__close').click()
    await expect(frame.getByTestId('navbar-mobile__content')).not.toBeVisible()

    expect(errors).toEqual([])
  })
})
