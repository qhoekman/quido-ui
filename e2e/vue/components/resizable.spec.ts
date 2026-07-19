import { test, expect } from '@playwright/test'

test.describe('Resizable', () => {
  test('Default story renders nested horizontal/vertical panel groups, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-resizable--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const hGroup = frame.locator('.q-resizable-panel-group[data-panel-group-direction="horizontal"]')
    await expect(hGroup).toBeVisible()
    await expect(hGroup.locator('> .q-resizable-panel')).toHaveCount(2)

    const vGroup = frame.locator('.q-resizable-panel-group[data-panel-group-direction="vertical"]')
    await expect(vGroup).toBeVisible()
    await expect(vGroup.locator('> .q-resizable-panel')).toHaveCount(2)

    expect(errors).toEqual([])
  })

  test('regression: dragging a handle actually resizes its adjacent panels (ref-on-Primitive wiring)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-resizable--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const hGroup = frame.locator('.q-resizable-panel-group[data-panel-group-direction="horizontal"]')
    const hPanels = hGroup.locator('> .q-resizable-panel')
    const hHandle = hGroup.locator('> .q-resizable-handle')

    await expect(hPanels.nth(0)).toHaveCSS('flex-basis', '50%')

    const box = await hHandle.boundingBox()
    if (!box) throw new Error('handle has no bounding box')

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width / 2 + 80, box.y + box.height / 2, { steps: 10 })
    await page.mouse.up()

    const firstBasis = await hPanels.nth(0).evaluate((el) => getComputedStyle(el).flexBasis)
    expect(firstBasis).not.toBe('50%')
  })

  test('regression: resizing a nested vertical group only affects its own panels, not the outer group', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-resizable--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const hGroup = frame.locator('.q-resizable-panel-group[data-panel-group-direction="horizontal"]')
    const vGroup = frame.locator('.q-resizable-panel-group[data-panel-group-direction="vertical"]')
    const vPanels = vGroup.locator('> .q-resizable-panel')
    const vHandle = vGroup.locator('> .q-resizable-handle')

    const box = await vHandle.boundingBox()
    if (!box) throw new Error('handle has no bounding box')

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2 + 30, { steps: 10 })
    await page.mouse.up()

    const vFirstBasis = await vPanels.nth(0).evaluate((el) => getComputedStyle(el).flexBasis)
    expect(vFirstBasis).not.toBe('25%')

    // outer horizontal group must remain untouched by the nested drag
    await expect(hGroup.locator('> .q-resizable-panel').nth(0)).toHaveCSS('flex-basis', '50%')
  })
})
