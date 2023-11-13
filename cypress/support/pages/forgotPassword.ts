export class forgotPassword{
    elements={
        clickOnforgotpass:".css-m85vdx",
        email:'[name="email"]',
        recoverBtn:".css-o25zll",
        verifyvalidEmail:".css-shzcsl",
        verifyResetPassPage:".css-m4v4nc",
        newPass:"[name='password']",
        CnewPass:"[name='passwordConfirm']",
        passResetBtn:"[type='submit']",
        validatePassMsg:".css-1ivlgyt"
    }

    verifyEmail(urlText:string,email:string,validEmailMsg:string){
        cy.get(this.elements.clickOnforgotpass).eq(0).click()
        cy.url().should('contain',urlText)
        cy.get(this.elements.email).type(email)
        cy.get(this.elements.recoverBtn).click()
        cy.get(this.elements.verifyvalidEmail).should('be.visible').should('contain',validEmailMsg)
    }
    
    changePass(resetUrl:string,verifyResetPassPage:string,newPass:string,newCpass:string,successMsg:string){
        cy.visit(resetUrl)
        cy.get(this.elements.verifyResetPassPage).should('be.visible').should('contain',verifyResetPassPage)
        cy.get(this.elements.newPass).type(newPass)
        cy.get(this.elements.CnewPass).type(newCpass)
        cy.get(this.elements.passResetBtn).click()
        cy.get(this.elements.verifyvalidEmail,{timeout:3000}).should('be.visible').should('contain',successMsg)
        

    }
}