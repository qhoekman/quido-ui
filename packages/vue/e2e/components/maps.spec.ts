import { test, expect } from '@playwright/test'

test.describe('Maps', () => {
  test('Default story renders a Leaflet map with tiles and zoom controls without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-display-maps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const map = frame.getByTestId('qui-maps')

    await expect(map).toBeVisible()
    await expect(map.locator('.leaflet-tile-loaded').first()).toBeVisible({ timeout: 10000 })
    await expect(map.locator('.leaflet-control-zoom-in')).toBeVisible()
    await expect(map.locator('.leaflet-control-zoom-out')).toBeVisible()
    await expect(frame.getByText('PDOK')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('zoom-in control is clickable and does not error', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-data-display-maps--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const map = frame.getByTestId('qui-maps')

    await expect(map.locator('.leaflet-tile-loaded').first()).toBeVisible({ timeout: 10000 })
    await map.locator('.leaflet-control-zoom-in').click()
    await expect(map.locator('.leaflet-tile-loaded').first()).toBeVisible({ timeout: 10000 })

    expect(errors).toEqual([])
  })
})
