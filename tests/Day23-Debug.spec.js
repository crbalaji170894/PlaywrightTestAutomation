//npx playwright test --headed --debug

// starts debuging verif=y first
//but debug will work only for UI Events

//But how to dbug API calls?

// debug from visual studio

// package.json add test excution line under scripts
// CTRL + SHIFT +P

/*{
  "name": "playwrighttestautomation",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {"test":"npx playwright test --headed"},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@playwright/test": "^1.57.0",
    "@types/node": "^25.0.3"
    
  }
}
*/

// this helps to debug which api mix of web events

//otherwise only web api we have play wright inspector --ui

// we can do step by by debuy step over step in using ddebug point

//tracer -> with api and web requests

//tarce: 'on'

//trace: 'retain-on-failure' //traces only shos only on failure

//refresh-> test results-> zip file-> open file below url

//trace.playwright.dev -> to open traces

