export class SignIn{
    elements={
        email:'[name="email"]',
        password:"[name='password']",
        loginBtn : "[type='submit']",
        errorClass :'.css-170h3rz'
    }

    SignInWithValidData(email:string,password:string){
        cy.get(this.elements.email).type(email)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginBtn).click()
    }

    SignInWithInvalidData(email:string,password:string){
        cy.get(this.elements.email).type(email)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.loginBtn).click()
        cy.get(this.elements.errorClass).should('be.visible').should('contain','not found')
    }
}