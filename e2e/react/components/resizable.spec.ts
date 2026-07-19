import { test, expect } from '@playwright/test'

test.describe('Resizable', () => {
  test('Default story renders panels without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-layout-resizable--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('resizable').first()).toBeVisible()
    await expect(frame.getByText('One', { exact: true })).toBeVisible()
    await expect(frame.getByText('Two', { exact: true })).toBeVisible()
    await expect(frame.getByText('Three', { exact: true })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('dragging the handle resizes adjacent panels', async ({ page }) => {
    await page.goto('?path=/story/components-layout-resizable--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const onePanel = frame.getByText('One', { exact: true }).locator('..')
    const boxBefore = await onePanel.boundingBox()
    expect(boxBefore).not.toBeNull()

    const handle = frame.getByTestId('resizable__handle').first()
    const handleBox = await handle.boundingBox()
    expect(handleBox).not.toBeNull()

    await page.mouse.move(
      handleBox!.x + handleBox!.width / 2,
      handleBox!.y + handleBox!.height / 2
    )
    await page.mouse.down()
    await page.mouse.move(handleBox!.x - 150, handleBox!.y + handleBox!.height / 2)
    await page.mouse.up()

    const boxAfter = await onePanel.boundingBox()
    expect(boxAfter).not.toBeNull()
    expect(boxAfter!.width).toBeLessThan(boxBefore!.width)
  })
})
