import { test, expect } from '@playwright/test'

test.describe('Tree', () => {
  test('Default story renders folders with correctly indented children, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-display-tree--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('[role="tree"]')).toBeVisible()
    await expect(frame.getByText('Documents')).toBeVisible()
    await expect(frame.getByText('Resume.pdf')).toBeVisible()

    // Regression test: a child item's group must be positioned at (or very near) the
    // same left edge as its parent trigger, not centered/shifted to the right.
    const parentBox = await frame.getByTestId('qui-tree-item-trigger').first().boundingBox()
    const groupBox = await frame.getByTestId('qui-tree-group').first().boundingBox()
    expect(Math.abs((groupBox?.x ?? 0) - (parentBox?.x ?? 0))).toBeLessThan(50)

    expect(errors).toEqual([])
  })

  test('clicking a collapsed folder trigger expands it and shows its children', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-tree--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const projectsTrigger = frame.getByTestId('qui-tree-item-trigger').filter({ hasText: 'Projects' })

    await expect(frame.getByText('Project1.zip')).not.toBeVisible()
    await projectsTrigger.click()
    await expect(frame.getByText('Project1.zip')).toBeVisible()
    await expect(projectsTrigger.locator('..').locator('..')).toHaveAttribute('aria-expanded', 'true')
  })

  test('pressing Enter on a focused, collapsed folder trigger expands its children', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-data-display-tree--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const projectsTrigger = frame.getByTestId('qui-tree-item-trigger').filter({ hasText: 'Projects' })

    await expect(frame.getByText('Project1.zip')).not.toBeVisible()
    await projectsTrigger.focus()
    await page.keyboard.press('Enter')
    await expect(frame.getByText('Project1.zip')).toBeVisible()
  })
})
