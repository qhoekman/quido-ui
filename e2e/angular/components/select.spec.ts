import { test, expect } from '@playwright/test'

test.describe('Select', () => {
  test('Default story renders a closed trigger, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('select__trigger')

    await expect(trigger).toBeVisible()
    await expect(trigger).toHaveText('Select an option')
    await expect(frame.getByTestId('select__content')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens the listbox and lists all options without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('select__trigger')

    await trigger.click()
    await expect(frame.getByTestId('select__content')).toBeVisible()
    await expect(frame.getByTestId('select__item')).toHaveCount(3)

    expect(errors).toEqual([])
  })

  test('selecting an option closes the listbox and updates the trigger', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-select--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('select__trigger')

    await trigger.click()
    await frame
      .getByTestId('select__item')
      .filter({ hasText: 'Option 3' })
      .click()

    await expect(trigger).toHaveText('Option 3')
    await expect(frame.getByTestId('select__content')).toHaveCount(0)
  })
})
