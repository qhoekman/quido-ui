import { test, expect } from '@playwright/test'

test.describe('Footer', () => {
  test('WithColumns story renders columns, newsletter, and banner', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-website-components-footer--with-columns')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('footer')).toBeVisible()
    await expect(frame.getByTestId('footer__columns')).toBeVisible()
    await expect(frame.getByTestId('footer__column')).toHaveCount(4)
    await expect(frame.getByTestId('footer__heading').first()).toBeVisible()
    await expect(frame.getByTestId('footer__section')).toBeVisible()
    await expect(frame.getByTestId('footer__banner')).toBeVisible()
    await expect(frame.getByTestId('footer__copyright')).toContainText(
      'Your Company'
    )
    await expect(frame.getByTestId('footer__link')).toHaveCount(8)

    expect(errors).toEqual([])
  })
})
