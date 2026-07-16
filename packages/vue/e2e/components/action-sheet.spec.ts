import { test, expect } from '@playwright/test'

// The story's own viewport parameter ("mobile2") only applies via
// Storybook's UI viewport toggle, not when navigating directly by URL, so
// force a realistic viewport here -- otherwise the Storybook iframe canvas
// can be so short that the sheet's content fills the whole overlay, leaving
// no clickable "outside" area to test against.
test.use({ viewport: { width: 1280, height: 900 } })

test.describe('Action Sheet', () => {
  test('Default story is closed initially, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/features-mobile-components-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByRole('button', { name: 'Open ActionSheet' })).toBeVisible()
    await expect(frame.locator('.q-action-sheet-content')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger actually opens the sheet', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    // `open`/`defaultOpen`/`modal`/`dismissible` are all Boolean props;
    // `open` previously had no explicit default, so Vue's automatic
    // "absent Boolean prop resolves to false" coercion made `isControlled`
    // always true (false !== undefined), permanently pinning `isOpen` at
    // false and making the trigger's click handler a complete no-op, with
    // no console error.
    await page.goto('http://localhost:6006/?path=/story/features-mobile-components-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open ActionSheet' }).click()

    const content = frame.locator('.q-action-sheet-content')
    await expect(content).toHaveClass(/is-open/)
    await expect(frame.getByText('Choose action')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('Escape key closes the sheet', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/features-mobile-components-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.locator('.q-action-sheet-content')

    await frame.getByRole('button', { name: 'Open ActionSheet' }).click()
    await expect(content).toHaveClass(/is-open/)

    await page.keyboard.press('Escape')
    await expect(content).toHaveCount(0)
  })

  test('clicking the overlay (outside the sheet) closes it', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/features-mobile-components-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.locator('.q-action-sheet-content')
    const overlay = frame.locator('.q-action-sheet-overlay')

    await frame.getByRole('button', { name: 'Open ActionSheet' }).click()
    await expect(content).toHaveClass(/is-open/)

    const overlayBox = await overlay.boundingBox()
    const contentBox = await content.boundingBox()
    if (!overlayBox || !contentBox) throw new Error('missing bounding box')

    // click a point on the overlay clearly above where the sheet starts
    await page.mouse.click(overlayBox.x + overlayBox.width / 2, contentBox.y - 20)
    await expect(content).toHaveCount(0)
  })

  test('regression: the Cancel button (ActionSheetClose) closes the sheet', async ({ page }) => {
    // Story fix: "Cancel" was a plain Button with no click handler at all,
    // not wrapped in ActionSheetClose -- clicking it silently did nothing.
    await page.goto('http://localhost:6006/?path=/story/features-mobile-components-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.locator('.q-action-sheet-content')

    await frame.getByRole('button', { name: 'Open ActionSheet' }).click()
    await expect(content).toHaveClass(/is-open/)

    await frame.getByRole('button', { name: 'Cancel' }).click()
    await expect(content).toHaveCount(0)
  })
})
