export class onBoarding{
    elements={  //object with json data
        getStartedBtn : '.css-1l125w6',
        verifyBoardingPage :'.css-totn4w',

        //Personal Info
        firstname:'[name="firstName"]',
        lastname:'[name="lastName"]',
        countryCode:'#country-select-demo',
        mobileNo:'[type="number"]',
        sendCodeBtn:'.css-eesh5u',
        codeField:"[name='code']",
        verifyBtn:".css-1w8py17",
        personalInfoContBtn :'.css-oc00lv',
        //Business Info
        businessInfoContBtn:'.css-1l125w6',
        companyName:'[name="companyName"]',
        incorporated:'.css-yj4vxd',
        incorporatedList:'.css-g0zk7v li',
        currencyList:'.css-g0zk7v li',
        industryList :'.css-g0zk7v li',
        businessReg:"(//div[contains(@class,'css-1oggla4')])[1]",
        attachBusinessFile:"(//input[@type='file'])[1]",
        businessExpiryDate:"[name='expiryDate']",
        certificateIncorp:"//div[contains(@class,'css-1oggla4')]",
        attachCertificateIncorp:"//input[@type='file']",
        incorpDocNo:'[name="docNo"]',
        //Partner status
        accountant:'[name="hasAccountant"]',
        auditor:'[name="hasEngagedAuditor"]',
        taxAgent:'[name="hasTaxAgent"]',
        allDone:'.css-1j6b7s9'
        


        
    }
    
    ClickOnGetStarted(){

        cy.get(this.elements.getStartedBtn,{timeout:3000}).should('be.visible').click()
        cy.get(this.elements.verifyBoardingPage).should('be.visible')
      // cy.contains('Welcome to Binery!').should('be.visible')
    }

    onBoardingPersonalInfo(firstname:string,lastname:string,countryCode:string,mobileNo:string,code:string){
        cy.get(this.elements.firstname).type(firstname)
        cy.get(this.elements.lastname).type(lastname)
        cy.get(this.elements.countryCode).type(countryCode+'{enter}')
        cy.get(this.elements.mobileNo).type(mobileNo)
        cy.get(this.elements.sendCodeBtn).click()
        cy.get(this.elements.codeField).should('be.visible').type(code)
        cy.get(this.elements.verifyBtn).click()
        cy.wait(2000)
        cy.get(this.elements.personalInfoContBtn).should('be.enabled').click()
        cy.wait(2000)
        cy.get(this.elements.businessInfoContBtn).should('be.enabled').click()
        
        
    }

    onBoardingBusinessInfo(companyName:string,incorporated:string,currency:string,industry:string){
        // BusinessInfo
        cy.get(this.elements.companyName).should('be.visible').type(companyName)
        cy.get(this.elements.incorporated).eq(0).click()
        cy.DropDown(this.elements.incorporatedList,incorporated)

        cy.get(this.elements.incorporated).eq(1).click()
        cy.DropDown(this.elements.currencyList,currency)

        cy.get(this.elements.incorporated).eq(2).click()
        cy.DropDown(this.elements.industryList,industry)

        cy.get(this.elements.personalInfoContBtn).click()
    }
    onBoardingUploadDoc(businessDoc:string,businessExpiryDate:string,incorpCertificate:string,incorpDocNo:string){
        cy.xpath(this.elements.businessReg).click()
        cy.xpath(this.elements.attachBusinessFile).attachFile(businessDoc)  //In fixtures file
        cy.wait(2000)
        cy.get(this.elements.businessExpiryDate).then($textBox => {
          if ($textBox.is(':visible')){
            //you get here only if button is visible
            cy.get(this.elements.businessExpiryDate).type(businessExpiryDate)
          }
        })
       
        cy.get('body').click(0,0);  //click outside the textbox
        cy.scrollTo('bottom')
        cy.xpath(this.elements.certificateIncorp).click({force: true})
        cy.xpath(this.elements.attachCertificateIncorp).attachFile(incorpCertificate)
        cy.get(this.elements.incorpDocNo).type(incorpDocNo)
        cy.get(this.elements.personalInfoContBtn).click()
    }

    onBoardingPartnerStatus(hasAccountant:string,hasEngagedAuditor:string,hasTaxAgent:string){
        (hasAccountant =='Yes') ? (cy.get(this.elements.accountant).eq(0).click().should('be.checked')) : (cy.get(this.elements.accountant).eq(1).click().should('be.checked'));
        (hasEngagedAuditor == 'Yes') ? (cy.get(this.elements.auditor).eq(0).click().should('be.checked')) : ((cy.get(this.elements.auditor).eq(1).click().should('be.checked')));
        (hasTaxAgent == 'Yes') ? (cy.get(this.elements.taxAgent).eq(0).click().should('be.checked')) : (cy.get(this.elements.taxAgent).eq(1).click().should('be.checked'));
        cy.get(this.elements.personalInfoContBtn).click()
    }

    VerifyonBoardingComplete(msg:string){
        cy.get(this.elements.allDone).should('be.visible').should('contain',msg)
    }

}