/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import {signUp} from '../support/pages/signUp'
import { SignIn } from "../support/pages/signIn"
const login = new SignIn();
const signUppage = new signUp();

Cypress.Commands.add("BrowserPermission",(page:string) => {   //1.In typescript custom command not directly fetch(you have to create the index.ts in root folder)
                                                        //2.Then add your custom command name there with typeof param
   cy.visit(page,{
        onBeforeLoad (win) {  //use for browser permission
            cy.stub(win.Notification, 'requestPermission').resolves('granted')
            cy.stub(win, 'Notification').as('Notification')
          },
       
      })
});

Cypress.Commands.add("SignIn",(email:string,password:string)=>{
  
 // cy.session([email, password], () => {
      cy.visit('/')
        cy.BrowserPermission('/')
        login.SignInWithValidData(email,password)
        signUppage.verifyDashboard()
 // })
});

//NOTEE :: add cypress function in index.ts in typescript

Cypress.Commands.add("DropDown",(cssElement:string,incorporatedText:string)=>{
  cy.get(cssElement).each(function(el){
    if(el.text().includes(incorporatedText)){
      cy.wrap(el).click()
    }

  })
});

