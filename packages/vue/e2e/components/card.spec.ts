import { test, expect } from '@playwright/test'

test.describe('Card', () => {
  test('Default story renders header, content, and footer without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-display-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.q-card')).toBeVisible()
    await expect(frame.getByRole('heading', { name: 'Create project' })).toBeVisible()
    await expect(frame.getByText('Deploy your new project in one-click.')).toBeVisible()
    await expect(frame.getByPlaceholder('Name of your project')).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Cancel' })).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Deploy' })).toBeVisible()

    expect(errors).toEqual([])
  })
})
