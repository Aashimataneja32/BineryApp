// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath');
import 'cypress-file-upload';
import 'cypress-mochawesome-reporter/register';


// Alternatively you can use CommonJS syntax:
//require('./commands')
import forgot_data from '../fixtures/testData/forgotPassword.json'
import signup_data from '../fixtures/testData/SignUpLoginData.json'
beforeEach(() => {
    // Log in and set session cookies
    if (Cypress.spec.name === 'signUp.cy.ts' || Cypress.spec.name === 'signIn.cy.ts' || Cypress.spec.name === 'forgotPassword.cy.ts' ) {  //beforEach not apply on these two pages
        // Skip the hook for this specific test file
        return;
    }
    
    cy.SignIn(signup_data.email,forgot_data.newPass);

})

