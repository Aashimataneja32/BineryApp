export {}
declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        BrowserPermission(value: string): Chainable<JQuery<HTMLElement>>
        SignIn(value: string,value2: string): Chainable<JQuery<HTMLElement>>
        DropDown(value: string,value2: string): Chainable<JQuery<HTMLElement>>
      }
    }
  }