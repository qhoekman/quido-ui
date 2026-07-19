import { test, expect } from '@playwright/test'

test.describe('Signature Pad', () => {
  test('Default story renders an empty canvas, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-signature-pad--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const canvas = frame.locator('[data-testid="qui-signature-pad"] canvas')

    await expect(canvas).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: dragging on the canvas draws a visible stroke', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-signature-pad--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const canvas = frame.locator('[data-testid="qui-signature-pad"] canvas')

    const box = await canvas.boundingBox()
    if (!box) throw new Error('canvas has no bounding box')

    await page.mouse.move(box.x + 20, box.y + 20)
    await page.mouse.down()
    await page.mouse.move(box.x + 100, box.y + 100, { steps: 10 })
    await page.mouse.up()

    const hasInk = await canvas.evaluate((el) => {
      const canvasEl = el as HTMLCanvasElement
      const ctx = canvasEl.getContext('2d')!
      const data = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height).data
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] !== 0) return true
      }
      return false
    })
    expect(hasInk).toBe(true)
  })

  test('clear button erases the drawn stroke', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-signature-pad--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const canvas = frame.locator('[data-testid="qui-signature-pad"] canvas')

    const box = await canvas.boundingBox()
    if (!box) throw new Error('canvas has no bounding box')

    await page.mouse.move(box.x + 20, box.y + 20)
    await page.mouse.down()
    await page.mouse.move(box.x + 100, box.y + 100, { steps: 10 })
    await page.mouse.up()

    await frame.getByRole('button').first().click()

    const hasInk = await canvas.evaluate((el) => {
      const canvasEl = el as HTMLCanvasElement
      const ctx = canvasEl.getContext('2d')!
      const data = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height).data
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] !== 0) return true
      }
      return false
    })
    expect(hasInk).toBe(false)
  })

  test('download button triggers a signature.png download', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-signature-pad--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const canvas = frame.locator('[data-testid="qui-signature-pad"] canvas')

    const box = await canvas.boundingBox()
    if (!box) throw new Error('canvas has no bounding box')
    await page.mouse.move(box.x + 20, box.y + 20)
    await page.mouse.down()
    await page.mouse.move(box.x + 80, box.y + 80, { steps: 5 })
    await page.mouse.up()

    const downloadPromise = page.waitForEvent('download')
    await frame.getByRole('button').nth(1).click()
    const download = await downloadPromise
    expect(download.suggestedFilename()).toBe('signature.png')
  })
})
