import { test, expect } from '@playwright/test'

test.describe('QR Code', () => {
  test('Default story renders an image with a generated data URL src, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-qr-code--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const qrCode = frame.getByTestId('qr-code')

    await expect(qrCode).toBeVisible()
    await expect(qrCode).toHaveJSProperty('tagName', 'IMG')
    const src = await qrCode.getAttribute('src')
    expect(src).toMatch(/^data:image\/svg\+xml;base64,/)

    expect(errors).toEqual([])
  })
})
