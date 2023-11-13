///<reference types = "Cypress"/>
import signUp_data from '../fixtures/testData/SignUpLoginData.json'  //For this uncomment 'resolveJsonModule' and 'esModuleInterop' in tsconfig.json
import forgotPass_data from '../fixtures/testData/forgotPassword.json'
import {forgotPassword} from '../support/pages/forgotPassword'
const forgotpass = new forgotPassword();

describe('Verify Forgot Password Functionality',function(){
    it("Verify the email for forgot pass",function(){
        cy.visit('/')
        forgotpass.verifyEmail(forgotPass_data.urlText,signUp_data.email,forgotPass_data.validEmailMsg)
        forgotpass.changePass(forgotPass_data.resetUrl,forgotPass_data.verifyResetPassPage,forgotPass_data.newPass,forgotPass_data.newCpass,forgotPass_data.successMsg)
        cy.SignIn(signUp_data.email,forgotPass_data.newPass)

    })
})