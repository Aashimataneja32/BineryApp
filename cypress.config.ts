import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    charts: true,
    reportPageTitle: 'Binery App Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code:false,
    quiet:false

    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern= [
        "cypress/e2e/signUp.cy.ts",
        "cypress/e2e/forgotPassword.cy.ts",
         "cypress/e2e/signIn.cy.ts",
         "cypress/e2e/onboarding.cy.ts"
        
      ]
      return config
      
    },
   
    baseUrl:"https://uat.app.binery.co",
    defaultCommandTimeout: 25000,

    
    
  },
});
