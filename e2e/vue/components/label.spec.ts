import { test, expect } from '@playwright/test'

test.describe('Label', () => {
  test('Default story renders as a label with the base typography styles, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-label--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const label = frame.locator('.q-label')

    await expect(label).toBeVisible()
    await expect(label).toHaveJSProperty('tagName', 'LABEL')
    await expect(label).toHaveCSS('display', 'inline-block')
    await expect(label).toHaveCSS('font-weight', '500')

    expect(errors).toEqual([])
  })

  test('regression: base typography styles still apply when the root element is not a <label> (as prop)', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-entry-label--default&args=as:span'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const label = frame.locator('.q-label')

    await expect(label).toHaveJSProperty('tagName', 'SPAN')
    await expect(label).toHaveCSS('display', 'inline-block')
    await expect(label).toHaveCSS('font-weight', '500')
  })

  test('size prop toggles font size via the size--sm/size--md classes', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-label--default')
    const label = page.frameLocator('#storybook-preview-iframe').locator('.q-label')

    await expect(label).toHaveClass(/size--md/)
    const mdFontSize = await label.evaluate((el) => getComputedStyle(el).fontSize)

    const sizeSelect = page.locator('select').filter({ hasText: 'md' })
    await sizeSelect.selectOption('sm')

    await expect(label).toHaveClass(/size--sm/)
    const smFontSize = await label.evaluate((el) => getComputedStyle(el).fontSize)
    expect(smFontSize).not.toBe(mdFontSize)
  })
})
