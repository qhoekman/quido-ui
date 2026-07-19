import process from 'node:process'
import { defineConfig, devices } from '@playwright/test'

const isCI = !!process.env.CI

const ports = {
  vue: 6006,
  react: 6007,
  angular: 6008
} as const

const staticPort = 4173

function baseURL(framework: 'vue' | 'react' | 'angular'): string {
  if (isCI) {
    return `http://localhost:${staticPort}/${framework}/`
  }
  return `http://localhost:${ports[framework]}/`
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
    headless: true,
    ...devices['Desktop Chrome']
  },
  projects: [
    {
      name: 'vue',
      testDir: './vue',
      use: { baseURL: baseURL('vue') }
    },
    {
      name: 'react',
      testDir: './react',
      use: { baseURL: baseURL('react') }
    },
    {
      name: 'angular',
      testDir: './angular',
      use: { baseURL: baseURL('angular') }
    }
  ],
  webServer: isCI
    ? {
        command: 'serve ../dist -l 4173 -c ../e2e/serve.json --no-request-logging',
        url: `http://localhost:${staticPort}`,
        reuseExistingServer: false,
        timeout: 120 * 1000
      }
    : [
        {
          command:
            'pnpm --filter @quido-ui/vue exec storybook dev -p 6006 --ci --no-open',
          url: `http://localhost:${ports.vue}`,
          reuseExistingServer: true,
          timeout: 180 * 1000
        },
        {
          command:
            'pnpm --filter @quido-ui/react exec storybook dev -p 6007 --ci --no-open',
          url: `http://localhost:${ports.react}`,
          reuseExistingServer: true,
          timeout: 180 * 1000
        },
        {
          command:
            'pnpm --filter @quido-ui/angular exec ng run angular:storybook --port=6008 --ci --open=false',
          url: `http://localhost:${ports.angular}`,
          reuseExistingServer: true,
          timeout: 180 * 1000
        }
      ]
})
