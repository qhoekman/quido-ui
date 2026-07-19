import { test, expect } from '@playwright/test'

test.describe('Tabs', () => {
  test('Default story renders correctly with the Account tab active, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-application-components-tabs--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const root = frame.getByTestId('qui-tabs')
    await expect(root).toHaveCSS('display', 'flex')

    const list = frame.getByTestId('qui-tabs-list')
    // specified as `inline-flex`, but it's a flex item of .q-tabs
    // (display:flex), so its computed display is correctly blockified to
    // `flex` per the CSS Display spec -- this is expected, not a bug
    await expect(list).toHaveCSS('display', 'flex')
    await expect(list).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')

    const accountTab = frame.getByRole('tab', { name: 'Account' })
    await expect(accountTab).toHaveAttribute('data-state', 'active')
    await expect(accountTab).toHaveAttribute('role', 'tab')

    await expect(frame.getByText('Make changes to your account here')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: clicking a trigger switches the active tab and content', async ({ page }) => {
    await page.goto('?path=/story/features-application-components-tabs--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('tab', { name: 'Password' }).click()

    await expect(frame.getByRole('tab', { name: 'Password' })).toHaveAttribute(
      'data-state',
      'active'
    )
    await expect(frame.getByRole('tab', { name: 'Account' })).toHaveAttribute(
      'data-state',
      'inactive'
    )
    await expect(frame.getByText("Change your password here")).toBeVisible()
  })

  test('disabled trigger prevents interaction', async ({ page }) => {
    await page.goto('?path=/story/features-application-components-tabs--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const disabledTab = frame.getByRole('tab', { name: 'Disabled' })
    await expect(disabledTab).toBeDisabled()

    await disabledTab.click({ force: true })
    await expect(disabledTab).toHaveAttribute('data-state', 'inactive')
    await expect(frame.getByRole('tab', { name: 'Account' })).toHaveAttribute(
      'data-state',
      'active'
    )
  })
})
