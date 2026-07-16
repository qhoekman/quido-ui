import { test, expect } from '@playwright/test'

test.describe('Combobox', () => {
  test('Default story renders the trigger as a real, focusable button, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-entry-combobox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Select an option' })

    await expect(trigger).toBeVisible()
    await expect(trigger).toHaveJSProperty('tagName', 'BUTTON')

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens the popover and lists all options', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-combobox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Select an option' })

    await expect(trigger).toHaveAttribute('data-state', 'closed')
    await trigger.click()
    await expect(trigger).toHaveAttribute('data-state', 'open')
    await expect(frame.getByRole('option')).toHaveCount(5)
  })

  test('selecting an option closes the popover and updates the trigger label', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-combobox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Select an option' })

    await trigger.click()
    await frame.getByRole('option', { name: 'Option 3' }).click()

    await expect(frame.getByRole('button', { name: 'Option 3' })).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Option 3' })).toHaveAttribute(
      'data-state',
      'closed'
    )
  })

  test('regression: disabled combobox cannot be opened', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-data-entry-combobox--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Select an option' })

    await expect(trigger).toBeDisabled()
  })

  test('typing in the search box filters the option list', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-entry-combobox--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Select an option' })

    await trigger.click()
    await frame.getByPlaceholder('Search...').fill('Option 2')
    await expect(frame.getByRole('option')).toHaveCount(1)
    await expect(frame.getByRole('option', { name: 'Option 2' })).toBeVisible()
  })
})
