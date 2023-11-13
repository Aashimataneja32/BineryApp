///<reference types = "cypress"/>

describe("Testing the app url",function(){
    it("Verify the url",function(){
        cy.visit("https://uat.app.binery.co/")
    })
})