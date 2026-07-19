import { test, expect } from '@playwright/test'

test.describe('Autocomplete', () => {
  test('regression: typing opens the results popover (uncontrolled usage)', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    // The only story never binds v-model:open/@update:open, so this was
    // the actual production configuration -- and it was completely
    // broken. `open?: boolean` had no explicit `undefined` default, so
    // it silently resolved to `false` instead of `undefined`. Combined
    // with `isControlled` being a plain `const` (not `computed()`), this
    // permanently locked `isControlled` at `true` with `isOpen` stuck at
    // `false` forever -- so typing into the search box never showed any
    // results, with zero console errors.
    await page.goto('?path=/story/components-data-entry-autocomplete--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const input = frame.locator('input.q-autocomplete-trigger-input')
    await input.click()
    await input.fill('qui')

    const content = frame.locator('.q-autocomplete-content')
    await expect(content).toHaveCount(1)
    await expect(frame.locator('.q-autocomplete-item')).toHaveCount(4)

    expect(errors).toEqual([])
  })

  test('selecting an item updates the search input and closes the popover', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-autocomplete--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const input = frame.locator('input.q-autocomplete-trigger-input')
    await input.click()
    await input.fill('qui')

    const items = frame.locator('.q-autocomplete-item')
    await expect(items).toHaveCount(4)
    await items.first().click()

    await expect(input).toHaveValue('qui est esse')
    await expect(frame.locator('.q-autocomplete-content')).toHaveCount(0)
  })

  test('clearing the search shows all options again', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-autocomplete--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const input = frame.locator('input.q-autocomplete-trigger-input')
    await input.click()
    await input.fill('qui')
    await expect(frame.locator('.q-autocomplete-item')).toHaveCount(4)

    await input.fill('')
    await expect(frame.locator('.q-autocomplete-item')).toHaveCount(10)
  })
})
