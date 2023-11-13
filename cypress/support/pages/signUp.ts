import data from '../../fixtures/testData/SignUpLoginData.json'

//npm run test
export class signUp{
    elements = {
        signUpBtn : "(//a[contains(@class,'css-m85vdx')])[2]",
        signUpPageAssert : '.css-111z42p',
        email :'[name="email"]',
        passwrod : '[name="password"]',
        cpassword : '[name="confirmPassword"]',
        policy:'[name="policy"]',
        submitBtn : '[type="submit"]',
        verifyOTPPage : '.css-m4v4nc',
        clickSkipBtn :"//button[contains(text(),'Skip for now')]",
        verifyDashboardPage :'.css-ivnvnt',
        verifyDuplicateEmail:'.css-170h3rz',
        verfiyConfirmPass :'.css-1lisuo3',
        otpField:'[type="tel"]',
        submitOTP :"[type='submit']",
        InvalidOTpvalidate:'.css-170h3rz'
    }

    ClickOnCreateAccountBtn(){
        //cy.log(email)
        cy.xpath(this.elements.signUpBtn,{timeout:2000}).should('exist').click()
         cy.get(this.elements.signUpPageAssert,{timeout:1000}).should('be.visible').should('contain',data.verifysignuppageData)
    }

    VerifySignupPage(email:string,password:string,cpassword:string){
        cy.get(this.elements.email,{timeout:2000}).should('exist').type(email)
        cy.get(this.elements.passwrod).type(password)
        cy.get(this.elements.cpassword).type(cpassword, {force: true})
        cy.get(this.elements.policy,{timeout:15000}).check()
        cy.get(this.elements.submitBtn).click()
        
    }

    verifySignUpPageWithValidData(){
        //cy.wait(3000)
        cy.get(this.elements.verifyOTPPage).should('contain',data.verifyOTPPage)
        cy.xpath(this.elements.clickSkipBtn).should('be.visible')
       

    }
    verifyOTPProcessWithValidData(staticOtp:any[]){
    //     cy.intercept('POST', 'https://uat.api.binery.co/api/v1/auth/verify/email', {  /*[1,6,4,5,1,2] */ //this valid OTP in backend
    //     status: 200,
    //     body: ,
    //   })
    // cy.intercept('POST', 'https://uat.api.binery.co/api/v1/auth/verify/email', {
    //     statusCode:200,
    //     body:{
    //                  success:true,
    //                  message:"Verification successful"
    //         }
            
    //   }).as('UpdateResponse')
    // cy.get(this.elements.otpField).each(function(el,index){
    //     cy.wrap(el).clear()
    //    // cy.wait(500)
       
    // })
    // cy.get(this.elements.otpField).its('length').then((numberOfItems) => {
    //     for (var i = numberOfItems-1; i>=0; i--) {
    //         cy.get(this.elements.otpField).eq(i).clear()
    //     }
    //   })
      //cy.wait(1000)
         cy.get(this.elements.otpField).each(function(el,index){
             //cy.wrap(el).type('')
            // cy.wait(500)
             cy.wrap(el).type(staticOtp[index])
         })
       //  cy.get(this.elements.submitOTP).click()
        
       

    }
    verifyOTPProcessWithInValidData(wrongOTP:any[]){
        //cy.log(wrongOTP)
        
        cy.get(this.elements.otpField).each(function(el,index){
            //cy.log(wrongOTP[index])
          //  cy.wait(300)
            cy.wrap(el).type(wrongOTP[index])
        })
        cy.get(this.elements.submitOTP).click()
        cy.wait(1000)
        cy.get(this.elements.InvalidOTpvalidate).should('exist').should('be.visible');
    }

    verifyDashboard(){
      // cy.wait('@responseUpdate');
        cy.get(this.elements.verifyDashboardPage).should('have.text',data.verifyDashboardPage)
        //cy.wait(2000)
    }

    verifySignUpPageWithduplicateData(){
        cy.get(this.elements.verifyDuplicateEmail).should('be.visible').and('contain',data.verifyDuplicateEmail)

    }

    verifySignUpPageWithConfirmPass(){
        cy.get(this.elements.verfiyConfirmPass).should('be.visible').and('contain',data.confirmPass)
    }
}