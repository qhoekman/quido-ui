import { test, expect } from '@playwright/test'

test.describe('MegaMenu', () => {
  test('Default story renders triggers and opens content on click', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-website-components-mega-menu--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('mega-menu')).toBeVisible()
    await expect(frame.getByTestId('mega-menu__list')).toBeVisible()
    await expect(frame.getByTestId('mega-menu__trigger')).toHaveCount(2)

    await frame.getByTestId('mega-menu__trigger').filter({ hasText: 'Getting started' }).click()
    await expect(frame.getByTestId('mega-menu__content')).toBeVisible()
    await expect(frame.getByTestId('mega-menu__list-item')).toHaveCount(3)

    expect(errors).toEqual([])
  })
})
