import { test, expect } from '@playwright/test'

test.describe('Select', () => {
  test('Default story renders a closed trigger with the placeholder, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('combobox')

    await expect(trigger).toBeVisible()
    await expect(trigger).toHaveText('Select a theme')
    await expect(trigger).toHaveAttribute('data-state', 'closed')

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens the listbox and lists all options', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('combobox')
    // once open, reka-ui marks the trigger aria-hidden (background content is
    // hidden from AT while the listbox is open), so re-check state via a
    // locator that isn't accessibility-tree-filtered, not getByRole again
    const triggerEl = frame.locator('.q-select-trigger')

    await trigger.click()
    await expect(triggerEl).toHaveAttribute('data-state', 'open')
    await expect(frame.getByRole('option')).toHaveCount(3)
  })

  test('selecting an option closes the listbox and updates the trigger', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('combobox')

    await trigger.click()
    await frame.getByRole('option', { name: 'Dark' }).click()

    await expect(trigger).toHaveText('Dark')
    await expect(trigger).toHaveAttribute('data-state', 'closed')
  })

  test('WithDefaultValue story pre-selects the given value', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-select--with-default-value'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByRole('combobox')).toHaveText('Dark')
  })

  test('Disabled story cannot be opened', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-select--disabled')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('combobox')

    await expect(trigger).toBeDisabled()
  })

  test('WithGroups story shows grouped options separated by a separator', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-select--with-groups')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('combobox')

    await trigger.click()
    await expect(frame.getByText('Fruits')).toBeVisible()
    await expect(frame.getByText('Vegetables')).toBeVisible()
    await expect(frame.getByRole('option')).toHaveCount(6)
  })

  test('Sizes story renders three differently sized triggers', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-select--sizes')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.getByRole('combobox')

    await expect(triggers).toHaveCount(3)
    const boxes = await Promise.all([
      triggers.nth(0).boundingBox(),
      triggers.nth(1).boundingBox(),
      triggers.nth(2).boundingBox()
    ])
    const heights = boxes.map((b) => b?.height)
    expect(new Set(heights).size).toBe(3)
  })
})
