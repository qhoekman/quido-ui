import { test, expect } from '@playwright/test'

test.describe('Header', () => {
  test('WithCenteredContent story renders tagline, title, body, actions', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto(
      '?path=/story/features-website-components-header--with-centered-content'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('header')).toBeVisible()
    await expect(frame.getByTestId('header__content')).toBeVisible()
    await expect(frame.getByTestId('header__tagline')).toHaveText('Tagline')
    await expect(frame.getByTestId('header__title')).toHaveText(
      'Short heading goes here'
    )
    await expect(frame.getByTestId('header__body')).toBeVisible()
    await expect(frame.getByTestId('header__actions')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('WithBackdrop story renders the backdrop image', async ({ page }) => {
    await page.goto('?path=/story/features-website-components-header--with-backdrop')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('header__backdrop')).toBeVisible()
    await expect(frame.getByTestId('header__backdrop-image')).toBeVisible()
  })
})
