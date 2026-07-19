import { test, expect } from '@playwright/test'

test.describe('Draggable List', () => {
  test('Default story renders all items as a list, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-draggable-list--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const list = frame.getByTestId('qui-draggable-list')
    const items = frame.getByTestId('qui-draggable-list-item')

    await expect(list).toBeVisible()
    await expect(list).toHaveJSProperty('tagName', 'UL')
    await expect(items).toHaveCount(3)
    await expect(items.nth(0)).toHaveText('1. Item 1')
    await expect(items.nth(1)).toHaveText('2. Item 2')
    await expect(items.nth(2)).toHaveText('3. Item 3')

    expect(errors).toEqual([])
  })

  test('regression: dragging the first item over the last reorders the list and emits reorder', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-draggable-list--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const items = frame.getByTestId('qui-draggable-list-item')

    const consoleLogs: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'log') consoleLogs.push(msg.text())
    })

    const dataTransfer = await items.nth(0).evaluateHandle(() => new DataTransfer())
    await items.nth(0).dispatchEvent('dragstart', { dataTransfer })
    await items.nth(2).dispatchEvent('dragover', { dataTransfer })

    await expect(items.nth(0)).toHaveText('1. Item 2')
    await expect(items.nth(1)).toHaveText('2. Item 3')
    await expect(items.nth(2)).toHaveText('3. Item 1')
    await expect(items.nth(2)).toHaveAttribute('aria-grabbed', 'true')

    await items.nth(2).dispatchEvent('dragend')

    await expect(items.nth(2)).toHaveAttribute('aria-grabbed', 'false')
    await expect.poll(() => consoleLogs.some((log) => log.includes('New order'))).toBe(true)
  })

  test('as prop renders the root as the given element', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-draggable-list--default&args=as:div'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const list = frame.getByTestId('qui-draggable-list')

    await expect(list).toHaveJSProperty('tagName', 'DIV')
  })
})
