import { test, expect } from '@playwright/test'

test.describe('Dialog', () => {
  test('regression: fully uncontrolled usage (no v-model:open) still opens on trigger click', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    // The Default/Confirm stories always bind v-model:open, which masked a
    // bug where Vue's automatic "absent Boolean prop resolves to false"
    // coercion pinned dialog.vue's `open` prop at `false` (instead of
    // `undefined`) whenever a consumer didn't explicitly pass it --
    // silently forcing reka-ui's DialogRoot into controlled mode and
    // breaking the trigger with no console error.
    await page.goto('?path=/story/components-overlay-dialog--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Edit Profile' }).click()

    const content = frame.locator('.q-dialog-content')
    await expect(content).toHaveCount(1)
    await expect(content).toContainText('Edit profile')
    await expect(content).toContainText("Make changes to your profile here")

    expect(errors).toEqual([])
  })

  test('the X close button closes the dialog', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-dialog--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const content = frame.locator('.q-dialog-content')

    await frame.getByRole('button', { name: 'Edit Profile' }).click()
    await expect(content).toHaveCount(1)

    await frame.locator('.q-dialog-close').click()
    await expect(content).toHaveCount(0)
  })

  test('overlay and content render with correct non-transparent styling (no Teleport scope-id loss)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-dialog--uncontrolled')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Edit Profile' }).click()

    const overlay = frame.locator('.q-dialog-overlay')
    await expect(overlay).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')

    const content = frame.locator('.q-dialog-content')
    await expect(content).toHaveCSS('position', 'fixed')
    await expect(content).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  })

  test('Default and Confirm stories (v-model:open) still work correctly', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-dialog--default')
    let frame = page.frameLocator('#storybook-preview-iframe')
    await frame.getByRole('button', { name: 'Edit Profile' }).click()
    await expect(frame.locator('.q-dialog-content')).toHaveCount(1)

    await page.goto('?path=/story/components-overlay-dialog--confirm')
    frame = page.frameLocator('#storybook-preview-iframe')
    await frame.getByRole('button', { name: 'Delete Account' }).click()
    await expect(frame.locator('.q-dialog-content')).toHaveCount(1)
    await expect(frame.getByText('Are you absolutely sure?')).toBeVisible()
  })
})
