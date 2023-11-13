///<reference types="Cypress"/>
import {onBoarding} from '../support/pages/onBoarding'
import data from '../fixtures/testData/onBoarding.json'
const boarding = new onBoarding()

describe("Vaidate the onBording module",function(){
    
    
   
    it("Verify the OnBoarding 'GetStarted' button ",function(){
      //  cy.visit('/')
        boarding.ClickOnGetStarted()

    })

    it.only("Verify the onBoarding functionality with valid data",function(){
       // cy.visit('https://uat.app.binery.co/overview')
        boarding.ClickOnGetStarted()
        boarding.onBoardingPersonalInfo(data.firstname,data.lastname,data.countryCode,data.mobileNo,data.code)
        boarding.onBoardingBusinessInfo(data.companyName,data.incorporated,data.currency,data.industry)
        boarding.onBoardingUploadDoc(data.businessDoc,data.businessExpiryDate,data.incorpCertificate,data.incorpDocNo)
        boarding.onBoardingPartnerStatus(data.hasAccountant,data.hasEngagedAuditor,data.hasTaxAgent)
        boarding.VerifyonBoardingComplete(data.completeonBoarding)
        
    })
})