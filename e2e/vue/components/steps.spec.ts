import { test, expect } from '@playwright/test'

test.describe('Steps', () => {
  test('Default story renders 3 items and step 1 content, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-steps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-steps-item')).toHaveCount(3)
    await expect(frame.getByTestId('qui-steps-content')).toHaveText('Step 1 Content')
    await expect(frame.getByTestId('qui-steps-completed-content')).toHaveCount(0)

    const circles = frame.getByTestId('qui-steps-item-circle')
    await expect(circles.nth(0)).toHaveClass(/steps-item--current-fg/)
    await expect(circles.nth(0)).toHaveText('1')

    expect(errors).toEqual([])
  })

  test('regression: clicking Next advances through all steps, marks circles completed, and shows the completed screen', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-steps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const nextBtn = frame.getByTestId('qui-steps-next')
    const content = frame.getByTestId('qui-steps-content')
    const circles = frame.getByTestId('qui-steps-item-circle')

    await nextBtn.click()
    await expect(content).toHaveText('Step 2 Content')
    await expect(circles.nth(0)).toHaveClass(/steps-item--completed/)
    await expect(circles.nth(0)).toHaveText('') // Check icon replaces the number

    await nextBtn.click()
    await expect(content).toHaveText('Step 3 Content')
    await expect(circles.nth(1)).toHaveClass(/steps-item--completed/)

    await nextBtn.click()
    await expect(frame.getByTestId('qui-steps-completed-content')).toHaveText(
      'All steps completed'
    )
    await expect(frame.getByTestId('qui-steps-content')).toHaveCount(0)
  })

  test('clicking a step item directly jumps to that step', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-steps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const triggers = frame.getByTestId('qui-steps-item-trigger')
    await triggers.nth(2).click()

    await expect(frame.getByTestId('qui-steps-content')).toHaveText('Step 3 Content')
  })
})
