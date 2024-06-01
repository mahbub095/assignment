const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFolder: 'cypress/support',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    baseUrl: 'https://juice-shop.herokuapp.com/',
  
    retries: {
      runMode: 5,
      openMode: 5,
    },
    viewportWidth: 1536,
    viewportHeight: 960,
    video: false,
    screenshotOnRunFailure: true,
  },
  video: false,
  screenshotOnRunFailure: true,
  experimentalStudio: true
});