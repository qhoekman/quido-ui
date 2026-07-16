import { test, expect } from '@playwright/test'

test.describe('Password Strength', () => {
  test('Default story renders three muted bars for an empty value, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      'http://localhost:6006/?path=/story/components-feedback-password-strength--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const bars = frame.getByTestId('password-strength-bar')

    await expect(bars).toHaveCount(3)
    for (let i = 0; i < 3; i++) {
      await expect(bars.nth(i)).toHaveAttribute('style', /--color-muted/)
    }

    expect(errors).toEqual([])
  })

  test('Weak story colors only the first bar red', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-feedback-password-strength--weak')
    const bars = page.frameLocator('#storybook-preview-iframe').getByTestId('password-strength-bar')

    await expect(bars.nth(0)).toHaveAttribute('style', /--color-red-500/)
    await expect(bars.nth(1)).toHaveAttribute('style', /--color-muted/)
    await expect(bars.nth(2)).toHaveAttribute('style', /--color-muted/)
  })

  test('Medium story colors the first two bars orange', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-feedback-password-strength--medium'
    )
    const bars = page.frameLocator('#storybook-preview-iframe').getByTestId('password-strength-bar')

    await expect(bars.nth(0)).toHaveAttribute('style', /--color-orange-400/)
    await expect(bars.nth(1)).toHaveAttribute('style', /--color-orange-400/)
    await expect(bars.nth(2)).toHaveAttribute('style', /--color-muted/)
  })

  test('Strong story colors all three bars green', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-feedback-password-strength--strong'
    )
    const bars = page.frameLocator('#storybook-preview-iframe').getByTestId('password-strength-bar')

    for (let i = 0; i < 3; i++) {
      await expect(bars.nth(i)).toHaveAttribute('style', /--color-emerald-500/)
    }
  })

  test('regression: Interactive story updates bar colors as the user types', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-feedback-password-strength--interactive'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByPlaceholder('Enter password')
    const bars = frame.getByTestId('password-strength-bar')

    await expect(bars.nth(0)).toHaveAttribute('style', /--color-muted/)

    await input.fill('weak')
    await expect(bars.nth(0)).toHaveAttribute('style', /--color-red-500/)

    await input.fill('Strong123!@#')
    await expect(bars.nth(0)).toHaveAttribute('style', /--color-emerald-500/)
    await expect(bars.nth(2)).toHaveAttribute('style', /--color-emerald-500/)
  })
})
