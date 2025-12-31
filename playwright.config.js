// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  
  testDir: './tests',
  testMatch: '/Day20-APITesting2.spec.js',
  timeout: 40 *1000,

  expect:{
     timeout: 40 *1000

  },
  reporter: 'html',

  use:{
    browserName: 'chromium',
    headless : false,
    trace: 'on',
    screenshot: 'on'
  }
 
});

module.exports = config

