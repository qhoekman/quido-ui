import { test, expect } from '@playwright/test'

test.describe('Heading', () => {
  test('Default renders as h1 with correct text', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-typography-heading--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const el = frame.getByText('Sample Heading')

    await expect(el).toHaveCount(1)
    await expect(el).toHaveJSProperty('tagName', 'H1')
    expect(errors).toEqual([])
  })

  test('Variants story: variant controls styling independently of the `as` tag (matches Angular reference)', async ({
    page
  }) => {
    // variant is a pure styling preset, decoupled from the semantic tag
    // -- matching the Angular reference, where the equivalent directive
    // can be applied to any host element (e.g. `<span qui-heading
    // variant="h3">`) with no auto-derivation of the tag from variant.
    await page.goto('http://localhost:6006/?path=/story/components-typography-heading--variants')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const h1 = frame.getByText('Heading 1', { exact: true })
    const h6 = frame.getByText('Heading 6', { exact: true })
    const h1Size = await h1.evaluate((el) => getComputedStyle(el).fontSize)
    const h6Size = await h6.evaluate((el) => getComputedStyle(el).fontSize)

    expect(parseFloat(h1Size)).toBeGreaterThan(parseFloat(h6Size))
  })

  test('Colors story: color variants render with distinct colors', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-typography-heading--colors')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const primaryColor = await frame.getByText('Primary Color').evaluate((el) => getComputedStyle(el).color)
    const secondaryColor = await frame.getByText('Secondary Color').evaluate((el) => getComputedStyle(el).color)
    expect(primaryColor).not.toBe(secondaryColor)
  })
})
