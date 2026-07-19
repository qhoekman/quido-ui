import { test, expect } from '@playwright/test'

test.describe('Tag Input', () => {
  test('Default story renders pre-filled tags, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-entry-tag-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const tags = frame.getByTestId('qui-tag-input-tag')

    await expect(tags).toHaveCount(2)
    await expect(tags.nth(0)).toContainText('example')
    await expect(tags.nth(1)).toContainText('tags')

    expect(errors).toEqual([])
  })

  test('pressing Enter adds a tag and clears the input', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-tag-input--empty')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('qui-tag-input-input')
    const tags = frame.getByTestId('qui-tag-input-tag')

    await input.fill('vue')
    await input.press('Enter')

    await expect(tags).toHaveCount(1)
    await expect(tags.nth(0)).toContainText('vue')
    await expect(input).toHaveValue('')
  })

  test('regression: comma-separated input splits into multiple tags, deduping empties', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-entry-tag-input--empty')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('qui-tag-input-input')
    const tags = frame.getByTestId('qui-tag-input-tag')

    await input.fill('react, vue,, angular')
    await input.press('Enter')

    await expect(tags).toHaveCount(3)
    await expect(tags.nth(0)).toContainText('react')
    await expect(tags.nth(1)).toContainText('vue')
    await expect(tags.nth(2)).toContainText('angular')
  })

  test('Backspace on empty input removes the last tag', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-tag-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('qui-tag-input-input')
    const tags = frame.getByTestId('qui-tag-input-tag')

    await expect(tags).toHaveCount(2)
    await input.click()
    await input.press('Backspace')

    await expect(tags).toHaveCount(1)
    await expect(tags.nth(0)).toContainText('example')
  })

  test('blurring the input commits pending text as a tag', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-tag-input--empty')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.getByTestId('qui-tag-input-input')
    const tags = frame.getByTestId('qui-tag-input-tag')

    await input.fill('svelte')
    await input.blur()

    await expect(tags).toHaveCount(1)
    await expect(tags.nth(0)).toContainText('svelte')
  })

  test('clicking a tag remove button removes only that tag', async ({ page }) => {
    await page.goto(
      '?path=/story/components-data-entry-tag-input--with-many-tags'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const tags = frame.getByTestId('qui-tag-input-tag')

    await expect(tags).toHaveCount(7)
    await frame.getByRole('button', { name: 'Remove tag vue' }).click()

    await expect(tags).toHaveCount(6)
    await expect(frame.getByText('vue', { exact: true })).toHaveCount(0)
  })

  test('Disabled story disables the input', async ({ page }) => {
    await page.goto('?path=/story/components-data-entry-tag-input--disabled')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-tag-input-input')).toBeDisabled()
  })
})
