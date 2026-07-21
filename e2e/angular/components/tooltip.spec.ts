import { test, expect } from '@playwright/test'

test.describe('Tooltip', () => {
  test('Default story renders trigger with content hidden, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-tooltip--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('tooltip')).toBeVisible()
    await expect(frame.getByTestId('tooltip__content')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: hovering the trigger shows the tooltip content', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-tooltip--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('tooltip').hover()
    await expect(frame.getByTestId('tooltip__content')).toBeVisible()
    await expect(frame.getByTestId('tooltip__content')).toHaveText('Are you sure?')
  })

  test('regression: moving the mouse within the trigger does not recreate the tooltip content node', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-tooltip--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const trigger = frame.getByTestId('tooltip')
    await trigger.hover()
    const content = frame.getByTestId('tooltip__content')
    await expect(content).toBeVisible()

    const nodeId = await content.evaluate((el) => {
      const marked = el as HTMLElement & { __testMarker?: string }
      marked.__testMarker = 'stable'
      return marked.__testMarker
    })
    expect(nodeId).toBe('stable')

    const box = await trigger.boundingBox()
    if (box) {
      await page.mouse.move(box.x + 5, box.y + 5)
      await page.mouse.move(box.x + 10, box.y + 8)
      await page.mouse.move(box.x + 15, box.y + 6)
    }

    const stillMarked = await content.evaluate(
      (el) => (el as HTMLElement & { __testMarker?: string }).__testMarker
    )
    expect(stillMarked).toBe('stable')
  })

  test('regression: moving the mouse away hides the tooltip content', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-tooltip--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('tooltip').hover()
    await expect(frame.getByTestId('tooltip__content')).toBeVisible()

    await page.mouse.move(10, 400)
    await expect(frame.getByTestId('tooltip__content')).toHaveCount(0)
  })
})
