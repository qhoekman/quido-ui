import { test, expect } from '@playwright/test'

test.describe('Combobox', () => {
  test('Default story renders the trigger as a real, focusable button, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-combobox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('combobox__trigger')

    await expect(trigger).toBeVisible()
    await expect(trigger).toHaveJSProperty('tagName', 'BUTTON')

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens the popover and lists all options without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-combobox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('combobox__trigger')

    await trigger.click()
    await expect(frame.getByTestId('combobox__content')).toBeVisible()
    await expect(frame.getByTestId('combobox__item')).toHaveCount(3)

    expect(errors).toEqual([])
  })

  test('selecting an option closes the popover and updates the trigger label', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-combobox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('combobox__trigger')

    await trigger.click()
    await frame
      .getByTestId('combobox__item')
      .filter({ hasText: 'Option 3' })
      .click()

    await expect(trigger).toHaveText('Option 3')
    await expect(frame.getByTestId('combobox__content')).toHaveCount(0)
  })

  test('typing in the search box filters the option list', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-combobox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('combobox__trigger')

    await trigger.click()
    await frame.getByTestId('combobox__search').fill('Option 2')
    await expect(frame.getByTestId('combobox__item')).toHaveCount(1)
    await expect(frame.getByTestId('combobox__item')).toHaveText('Option 2')
  })
})
