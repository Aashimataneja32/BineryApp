//npm run test
///<reference types = "Cypress"/>
import data from '../fixtures/testData/SignUpLoginData.json'  //For this uncomment 'resolveJsonModule' and 'esModuleInterop' in tsconfig.json
import {signUp} from '../support/pages/signUp'
const signUppage = new signUp();

describe("Verify the signup Process",function(){
   
    it("Verify the Sign up button",function(){
        //cy.log(data.email);
        cy.visit('/')
        signUppage.ClickOnCreateAccountBtn()
         
    })

    it("Verify Signup form with valid credentials",function(){
        cy.BrowserPermission("/sign-up");
         
        
        signUppage.VerifySignupPage(data.email,data.password,data.cpassword) 
        cy.window().should('have.property', 'Notification').should('be.a', 'function')
        signUppage.verifySignUpPageWithValidData()
        //first verify the invalid oTP
        signUppage.verifyOTPProcessWithInValidData(data.wrongOTP)
        //then verify the valid otp and move tot he dashboard
        signUppage.verifyOTPProcessWithValidData(data.staticOtp)
        cy.wait(1000);
        signUppage.verifyDashboard()


    })

    it("Verify Signup form with duplicate email(error message should popup)",function(){
        cy.BrowserPermission("/sign-up");
        signUppage.VerifySignupPage(data.dupEmail,data.password,data.cpassword) 
        cy.window().should('have.property', 'Notification').should('be.a', 'function')
        signUppage.verifySignUpPageWithduplicateData()
    })

    it("Verify Signup form with mismatched Password and confirm Password",function(){
        cy.BrowserPermission("/sign-up");
        signUppage.VerifySignupPage(data.email,data.password,data.wrong_confirmPassword) 
        cy.window().should('have.property', 'Notification').should('be.a', 'function')
        signUppage.verifySignUpPageWithConfirmPass()

    })

  
})