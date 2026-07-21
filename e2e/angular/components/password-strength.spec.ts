import { test, expect } from '@playwright/test'

test.describe('Password Strength', () => {
  test('Default story renders three muted bars for an empty value, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      '?path=/story/components-feedback-password-strength--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const bars = frame.getByTestId('password-strength-bar')

    await expect(bars).toHaveCount(3)
    for (let i = 0; i < 3; i++) {
      await expect(bars.nth(i)).toHaveAttribute('style', /--color-muted/)
    }

    expect(errors).toEqual([])
  })

  test('regression: a weak value colors only the first bar red', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-password-strength--default&args=value:weak'
    )
    const bars = page
      .frameLocator('#storybook-preview-iframe')
      .getByTestId('password-strength-bar')

    await expect(bars.nth(0)).toHaveAttribute('style', /--color-red-500/)
    await expect(bars.nth(1)).toHaveAttribute('style', /--color-muted/)
    await expect(bars.nth(2)).toHaveAttribute('style', /--color-muted/)
  })

  test('a medium value colors the first two bars orange', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-password-strength--default&args=value:Medium12'
    )
    const bars = page
      .frameLocator('#storybook-preview-iframe')
      .getByTestId('password-strength-bar')

    await expect(bars.nth(0)).toHaveAttribute('style', /--color-orange-400/)
    await expect(bars.nth(1)).toHaveAttribute('style', /--color-orange-400/)
    await expect(bars.nth(2)).toHaveAttribute('style', /--color-muted/)
  })

  test('regression: interactively typing a strong password colors all three bars green', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-feedback-password-strength--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const bars = frame.getByTestId('password-strength-bar')

    await expect(bars.nth(0)).toHaveAttribute('style', /--color-muted/)

    const valueControl = page.locator('#control-value')
    await valueControl.fill('weak')
    await expect(bars.nth(0)).toHaveAttribute('style', /--color-red-500/)

    await valueControl.fill('Strong123!')
    await expect(bars.nth(0)).toHaveAttribute('style', /--color-emerald-500/)
    await expect(bars.nth(2)).toHaveAttribute('style', /--color-emerald-500/)
  })
})
