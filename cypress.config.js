const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.nopcommerce.com/',
    "specPattern": "cypress/integration/**/*.{feature,features}",
    experimentalStudio: true,
  },

  e2e: {
    "testFiles":  "**/*.feature"
  } 

});



