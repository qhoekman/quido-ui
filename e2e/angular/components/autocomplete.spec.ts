import { test, expect } from '@playwright/test'

test.describe('Autocomplete', () => {
  test('typing opens the results popover and filters options without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-autocomplete--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const input = frame.getByTestId('autocomplete__trigger').locator('input')
    await input.click()
    await input.fill('qui est')

    await expect(frame.getByTestId('autocomplete__content')).toHaveCount(1)
    await expect(frame.getByTestId('autocomplete__item')).toHaveCount(1)
    await expect(frame.getByTestId('autocomplete__item')).toHaveText(
      'qui est esse'
    )

    expect(errors).toEqual([])
  })

  test('selecting an item updates the search input and closes the popover', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-autocomplete--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const input = frame.getByTestId('autocomplete__trigger').locator('input')
    await input.click()
    await input.fill('qui est')

    const items = frame.getByTestId('autocomplete__item')
    await expect(items).toHaveCount(1)
    await items.first().click()

    await expect(input).toHaveValue('qui est esse')
    await expect(frame.getByTestId('autocomplete__content')).toHaveCount(0)
  })

  test('clearing the search shows all options again', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-autocomplete--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const input = frame.getByTestId('autocomplete__trigger').locator('input')
    await input.click()
    await input.fill('qui est')
    await expect(frame.getByTestId('autocomplete__item')).toHaveCount(1)

    await input.fill('')
    await expect(frame.getByTestId('autocomplete__item')).toHaveCount(100)
  })
})
