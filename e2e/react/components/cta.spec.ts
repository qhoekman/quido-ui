import { test, expect } from '@playwright/test'

test.describe('CTA', () => {
  test('WithLeftContent story renders title, subtitle, and actions', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-website-components-cta--with-left-content')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('cta')).toBeVisible()
    await expect(frame.getByTestId('cta__content')).toBeVisible()
    await expect(frame.getByTestId('cta__title')).toHaveText('Get in touch')
    await expect(frame.getByTestId('cta__subtitle')).toBeVisible()
    await expect(frame.getByTestId('cta__actions')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('WithBackdrop story renders the backdrop image', async ({ page }) => {
    await page.goto('?path=/story/features-website-components-cta--with-backdrop')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('cta__backdrop')).toBeVisible()
  })

  test('WithFormHorizontal story renders section and subscribe form', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/features-website-components-cta--with-form-horizontal'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('cta__section')).toHaveCount(2)
    await expect(
      frame.getByRole('button', { name: 'Subscribe' })
    ).toBeVisible()
  })
})
