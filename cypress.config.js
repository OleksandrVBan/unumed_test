const { defineConfig } = require("cypress");



module.exports = defineConfig({
  
  
  e2e: {

   
    baseUrl: "http://localhost:3000",
    video: false,
    
    viewportWidth: 1400, 
     viewportHeight: 900, 

     specPattern: [
      'cypress/e2e/**/*.ts',
      'cypress/e2e/**/*/*.ts',
      'cypress/e2e/**/*/*/*.ts',
      'cypress/e2e/**/*.js',
      'cypress/e2e/**/*/*.js',
      'cypress/e2e/**/*/*/*.js'
  ],
      "supportFile": "cypress/support/index.ts",
   
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    
    watchForFileChanges: false
  },
});
