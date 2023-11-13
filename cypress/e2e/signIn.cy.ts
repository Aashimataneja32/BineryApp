///<reference types="Cypress"/>
import { SignIn } from "../support/pages/signIn"
import data from '../fixtures/testData/SignUpLoginData.json'
import {signUp} from '../support/pages/signUp'
import data1 from '../fixtures/testData/forgotPassword.json'

const login = new SignIn();
const signUppage = new signUp();

describe("Verify the login functionality",function(){
    let login = new SignIn();
    let signUppage = new signUp();
    // beforeEach('Visit website before each test case',function(){
    //     cy.visit('/')
    // })

    
    it("Verify the SignInProcess with valid data",function(){
       // cy.log(typeof(Cypress.config().baseUrl))
        cy.BrowserPermission('/')  //custom command
        login.SignInWithValidData(data.email,data1.newPass)
       // cy.wait(1000)
       // signUppage.verifyOTPProcessWithValidData(data.email,data.staticOtp)
        // cy.wait(1000);
         signUppage.verifyDashboard()
        

    })

    it("Verify the SignInProcess with Invalid data",function(){
        // cy.log(typeof(Cypress.config().baseUrl))
         cy.BrowserPermission('/')  //custom command
         login.SignInWithInvalidData(data.wrongemail,data1.newPass)
        
         
         
         
 
     })

   

})