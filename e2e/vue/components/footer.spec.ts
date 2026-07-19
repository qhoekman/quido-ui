import { test, expect } from '@playwright/test'

test.describe('Footer', () => {
  test('Default story renders the full compound structure, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-website-components-footer--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const footer = frame.locator('.q-footer')
    await expect(footer).toBeVisible()
    await expect(footer).toHaveJSProperty('tagName', 'FOOTER')
    await expect(footer).toHaveAttribute('aria-labelledby', 'footer-heading')
    await expect(frame.locator('#footer-heading')).toHaveText('Footer')

    await expect(frame.locator('.q-footer-column')).toHaveCount(4)
    await expect(frame.locator('.q-footer-heading')).toHaveText([
      'Company',
      'Support',
      'Product',
      'Newsletter'
    ])
    await expect(frame.locator('.q-footer-column-list-item')).toHaveCount(12)

    await expect(frame.locator('.q-footer-copyright')).toHaveText(
      '© 2020 Your Company, Inc. All rights reserved.'
    )
    await expect(frame.locator('.q-footer-banner-list-item')).toHaveCount(5)

    expect(errors).toEqual([])
  })

  test('newsletter form has an accessible email input and subscribe button', async ({ page }) => {
    await page.goto('?path=/story/features-website-components-footer--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const emailInput = frame.getByLabel('Email address')
    await expect(emailInput).toHaveAttribute('type', 'email')
    await expect(emailInput).toHaveAttribute('required', '')
    await expect(frame.getByRole('button', { name: 'Subscribe' })).toBeVisible()
  })

  test('footer links have correct href attributes', async ({ page }) => {
    await page.goto('?path=/story/features-website-components-footer--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#')
    await expect(frame.getByRole('link', { name: 'Privacy Policy' }).first()).toHaveAttribute(
      'href',
      '#'
    )
  })
})
