import { Mainpage } from "../pages/Mainpage"

const mainpage = new Mainpage()

describe("Check Required Fields ", () => {

  it('Test Case 21 Check Required Fields' , () => {

      cy.log('Start')
      cy.visit('/').title().should('eq', 'Your average form');
      mainpage.checkTitleOnMainpage();

      
      // Check required fields Username and Password
      mainpage.getFieldUsername()
        .should('have.attr', 'required')
      mainpage.getButtonSubmit()
        .click()
      mainpage.fillInUsername('Ricardo')

      mainpage.getFieldPassword()
        .should('have.attr', 'required')
      mainpage.getButtonSubmit()
        .click()
      mainpage.fillInPassword('111')

      // Check required Gender
      mainpage.getRBMale()
        .click()
        .should('have.attr', 'required')
      
      mainpage.getRBFemale()
        .should('have.attr', 'required')
       

      // Check required Hobby
      mainpage.getCheckboxReading()
        .should('not.have.attr', 'required');

      mainpage.getCheckboxMusic()
        .should('not.have.attr', 'required');

      mainpage.getCheckboxSports()
        .should('not.have.attr', 'required');


      // Check required Time 
      mainpage.selectTime()
      .should('have.attr', 'required')
     
  
      cy.log('Start fill in Form')

   
      cy.log('END')
  });




})