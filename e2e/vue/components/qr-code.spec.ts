import { test, expect } from '@playwright/test'

test.describe('QR Code', () => {
  test('Default story renders a valid QR code image, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-qr-code--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const img = frame.locator('.q-qr-code')

    await expect(img).toBeVisible()
    await expect(img).toHaveJSProperty('tagName', 'IMG')
    const src = await img.getAttribute('src')
    expect(src).toMatch(/^data:image\/svg\+xml;base64,/)

    const naturalWidth = await img.evaluate((el) => (el as HTMLImageElement).naturalWidth)
    expect(naturalWidth).toBeGreaterThan(0)

    expect(errors).toEqual([])
  })

  test('CustomValue and LongValue stories render distinct QR codes', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-qr-code--default')
    const defaultSrc = await page
      .frameLocator('#storybook-preview-iframe')
      .locator('.q-qr-code')
      .getAttribute('src')

    await page.goto(
      '?path=/story/components-navigation-qr-code--custom-value'
    )
    const customSrc = await page
      .frameLocator('#storybook-preview-iframe')
      .locator('.q-qr-code')
      .getAttribute('src')

    await page.goto('?path=/story/components-navigation-qr-code--long-value')
    const longSrc = await page
      .frameLocator('#storybook-preview-iframe')
      .locator('.q-qr-code')
      .getAttribute('src')

    expect(customSrc).not.toBe(defaultSrc)
    expect(longSrc).not.toBe(defaultSrc)
    // a longer encoded value needs more QR modules -> a larger SVG payload
    expect(longSrc!.length).toBeGreaterThan(defaultSrc!.length)
  })

  test('regression: reactively updates when value changes, and renders nothing for an empty value', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-qr-code--default')
    await page.getByRole('tab', { name: 'Controls' }).click()

    const frame = page.frameLocator('#storybook-preview-iframe')
    const img = frame.locator('.q-qr-code')
    const srcBefore = await img.getAttribute('src')

    await page.locator('#control-value').fill('https://totally-different-value.example/path')
    await expect(async () => {
      expect(await img.getAttribute('src')).not.toBe(srcBefore)
    }).toPass()

    await page.locator('#control-value').fill('')
    await expect(img).toHaveCount(0)
  })
})
