import { test, expect } from '@playwright/test'

test.describe('Filters', () => {
  test('checkbox toggles a filter and reveals the clear-all button', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/features-ecommerce-components-filters--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const clearBtn = frame.getByRole('button', { name: 'Clear all filters' })
    await expect(clearBtn).toHaveCount(0)

    await frame.getByText('shoes', { exact: true }).click()
    await expect(clearBtn).toHaveCount(1)

    expect(errors).toEqual([])
  })

  test('radio group item selects a filter value', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/features-ecommerce-components-filters--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByText('nike', { exact: true }).click()
    const nikeButton = frame.locator('#brand\\.nike')
    await expect(nikeButton).toHaveAttribute('aria-checked', 'true')
  })

  test('range slider updates the displayed label values', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/features-ecommerce-components-filters--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const thumbs = frame.locator('[role="slider"]')
    await expect(thumbs).toHaveCount(2)

    const firstThumb = thumbs.first()
    await firstThumb.focus()
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('ArrowRight')

    const label = frame.locator('.q-filter-range-label').first()
    await expect(label).not.toContainText('€ 0')
  })

  test('clear-all button resets every active filter', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/features-ecommerce-components-filters--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByText('nike', { exact: true }).click()
    const nikeButton = frame.locator('#brand\\.nike')
    await expect(nikeButton).toHaveAttribute('aria-checked', 'true')

    const clearBtn = frame.getByRole('button', { name: 'Clear all filters' })
    await clearBtn.click()

    await expect(clearBtn).toHaveCount(0)
    await expect(nikeButton).toHaveAttribute('aria-checked', 'false')
  })
})
