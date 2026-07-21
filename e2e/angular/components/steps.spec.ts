import { test, expect } from '@playwright/test'

test.describe('Steps', () => {
  test('Default story renders 3 steps with step 1 content active, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-steps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('steps')).toBeVisible()
    await expect(frame.getByTestId('steps__item')).toHaveCount(3)
    await expect(frame.getByText('Step 1 Content')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: next advances through steps, completing each, then shows all-steps-completed', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-steps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('steps__next').click()
    await expect(frame.getByText('Step 2 Content')).toBeVisible()

    await frame.getByTestId('steps__next').click()
    await expect(frame.getByText('Step 3 Content')).toBeVisible()

    await frame.getByTestId('steps__next').click()
    await expect(frame.getByTestId('steps__completed-content')).toBeVisible()
    await expect(frame.getByText('All steps completed')).toBeVisible()
  })

  test('regression: prev moves back to the previous step', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-steps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('steps__next').click()
    await expect(frame.getByText('Step 2 Content')).toBeVisible()

    await frame.getByTestId('steps__prev').click()
    await expect(frame.getByText('Step 1 Content')).toBeVisible()
  })

  test('regression: clicking a step item trigger jumps directly to that step', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-steps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('steps__item-trigger').nth(2).click()
    await expect(frame.getByText('Step 3 Content')).toBeVisible()
  })
})
