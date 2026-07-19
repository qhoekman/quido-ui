import { test, expect } from '@playwright/test'

test.describe('Pagination', () => {
  test('Default story renders previous, links, ellipsis, and next', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-website-components-pagination--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('pagination')).toBeVisible()
    await expect(frame.getByTestId('pagination__content')).toBeVisible()
    await expect(frame.getByTestId('pagination__item')).toHaveCount(6)
    await expect(frame.getByTestId('pagination__previous')).toContainText('Previous')
    await expect(frame.getByTestId('pagination__next')).toContainText('Next')
    await expect(frame.getByTestId('pagination__link')).toHaveCount(3)
    await expect(frame.getByTestId('pagination__ellipsis')).toBeVisible()

    const activeLink = frame.getByTestId('pagination__link').filter({ hasText: '2' })
    await expect(activeLink).toHaveAttribute('aria-current', 'page')

    expect(errors).toEqual([])
  })
})
