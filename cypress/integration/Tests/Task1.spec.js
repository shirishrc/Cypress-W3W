const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('Task1.test',()=>{
    const assert = require('assert');
    beforeEach(()=>{
        cy.visit('https://what3words.com')
        cy.get('[data-testid=AcceptAll] > .MuiButton-label').click()
        cy.get('.MuiButton-endIcon > .MuiSvgIcon-root > path',{timeout:2000}).click()
        cy.get('[data-testid=OnboardingPrompt-CloseButton] > .MuiSvgIcon-root',{timeout:2000}).click()
    })    

    it.skip('Task1 test1 ',()=>{
        cy.get('[data-testid=ThreeWordAddress]',{timeout:1000}).click();
        cy.get('[data-testid=SearchPanel-Input]',{timeout:2000}).type('certified.potato.vine')
        assert((cy.get('div.SearchPanel-ResultItem').get('div.ThreeWordAddress.ThreeWordAddress_constrained')).contains('certified.potato.vine'))
        cy.get('div.SearchPanel-ResultItem').get('div.ThreeWordAddress.ThreeWordAddress_constrained').contains('certified.potato.vine').click()
    })

    it.skip('Task1 test2 ',()=>{
        cy.get('[data-testid=ThreeWordAddress]',{timeout:1000}).click();
        cy.get('[data-testid=SearchPanel-Input]',{timeout:2000}).type('Tower Bridge')
        cy.wait(2000)
        assert((cy.get('div.SearchPanel-Location',{timeout:2000}).get('div.SearchPanel-LocationLine1')).contains('Tower Bridge hotel'))
        cy.get('div.SearchPanel-Location',{timeout:2000}).get('div.SearchPanel-LocationLine1').contains('Tower Bridge hotel').click()
        cy.wait(2000)
        var vall= cy.get('div.ThreeWordAddress-Content')
        cy.log(vall)
        cy.get('div.ThreeWordAddress-Content').then(($text) => {
            const txt = $text.text()
            cy.log(txt);
        })    
    })

    it.skip('Task1 test3 ',()=>{
        cy.get('[data-testid=ThreeWordAddress]',{timeout:1000}).click();
        cy.get('[data-testid=SearchPanel-Input]',{timeout:2000}).type('51.521251,-0.20358600')
        cy.wait(2000)
        //assert((cy.get('div.SearchPanel-Location',{timeout:2000}).get('div.SearchPanel-LocationLine1')).contains('Tower Bridge hotel'))
        //cy.get('div.SearchPanel-Location',{timeout:2000}).get('div.SearchPanel-LocationLine1').contains('Tower Bridge hotel').click()
        cy.wait(2000)
        var vall= cy.get('div.ThreeWordAddress-Content')
        cy.log(vall)
        cy.get('div.ThreeWordAddress-Content').then(($text) => {
            const txt = $text.text()
            cy.log(txt);
        })    
    })

    it('Task1 test4',()=>{
        
        cy.get('[data-testid=ThreeWordAddress]',{timeout:1000}).click();
        cy.get('[data-testid=SearchPanel-Input]',{timeout:2000}).type('hear.limited.frown.know')
        cy.wait(2000)
        //assert((cy.get('div.SearchPanel-Location',{timeout:2000}).get('div.SearchPanel-LocationLine1')).contains('Tower Bridge hotel'))
        //cy.get('div.SearchPanel-Location',{timeout:2000}).get('div.SearchPanel-LocationLine1').contains('Tower Bridge hotel').click()
        cy.wait(2000)
        var vall= cy.get('div.NotificationMessage-Label')
        cy.log(vall)
        cy.get('div.NotificationMessage-Label').then(($text) => {
            const txt = $text.text()
            cy.log(txt);  
            expect(txt).contains('No address found.')                      
        })          
    })
    
})