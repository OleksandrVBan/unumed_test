import 'cypress-xpath';

// 1 Block Username and Password

export class Mainpage{

  getFieldUsername() {
    
    return  cy.get('#username')
    

};



fillInUsername(username: string) {
  return this.getFieldUsername().type(username)
  .should('have.value',username)
  
}



getFieldPassword() {
    
  return cy.get('#password')


};

fillInPassword(password: string) {
  return this.getFieldPassword().type(password)
  .should('have.value',password)

}

// 2 Block Gender (Male,Female)
// RB - Radio Button
getRBMale() {
    
  return cy.get('#genderMale')
  
};

getRBFemale() {
    
  return cy.get('#genderFemale')

};

checkRBMale() {
  this.getRBMale().click().should('be.checked');
  this.getRBFemale().should('not.be.checked');
}

checkRBFemale() {
  this.getRBFemale().click().should('be.checked');
  this.getRBMale().should('not.be.checked');
  
}

// 3 Block Hobbies (Reading, Sports, Music)
// In this case, you can also use not XPath, but find the element through value

getCheckboxExample() {
  return cy.get('[value="Reading"]')
  
};

getCheckboxReading() {
  return cy.xpath('//input[@value="Reading"]')
  
};

getCheckboxSports() {
    
  return cy.xpath('//input[@value="Sports"]')
  
};

getCheckboxMusic() {
    
  return cy.xpath('//input[@value="Music"]')

};

chooseCheckboxReading(){

 this.getCheckboxReading().click().should('be.checked');
 this.getCheckboxSports().should('not.be.checked');
 this.getCheckboxMusic().should('not.be.checked');
 
}

chooseCheckboxSports(){

  this.getCheckboxReading().should('not.be.checked');
  this.getCheckboxSports().click().should('be.checked');
  this.getCheckboxMusic().should('not.be.checked');
 
}

chooseCheckboxMusic(){

  this.getCheckboxReading().should('not.be.checked');
  this.getCheckboxSports().should('not.be.checked');
  this.getCheckboxMusic().click().should('be.checked');
 
}

chooseCheckboxReading_Sports(){

  this.getCheckboxReading().click().should('be.checked');
  this.getCheckboxSports().click().should('be.checked');
  this.getCheckboxMusic().should('not.be.checked');
  
}

chooseCheckboxReading_Music(){

  this.getCheckboxReading().click().should('be.checked');
  this.getCheckboxSports().should('not.be.checked');
  this.getCheckboxMusic().click().should('be.checked');
  
}

chooseCheckboxSports_Music(){

  this.getCheckboxReading().should('not.be.checked');
  this.getCheckboxSports().click().should('be.checked');
  this.getCheckboxMusic().click().should('be.checked');
  
}

chooseCheckboxesReading_Sports_Music(){

  this.getCheckboxReading().click().should('be.checked');
  this.getCheckboxSports().click().should('be.checked');
  this.getCheckboxMusic().click().should('be.checked');
  
}

// 4 Block Time (Morning, Noon, Evening)

selectTime() {
    
  return cy.get('select#time')

};

selectTimeMorning() {
    
  return cy.get('select#time')
    .select('Morning')
    .should('contain', 'Morning')

};

selectTimeNoon() {

  return cy.get('select#time')
  .select('Noon')
  .should('contain', 'Noon')
    
};

selectTimeEvening() {

  return cy.get('select#time')
  .select('Evening')
  .should('contain', 'Evening')
    
};

getButtonSubmit() {
    
  return  cy.get('.btn.btn-primary')
  

};

getLoadingAnimation() {
    
  return  cy.get('.loading-animation')
  

};



getProceedToResult() {
    
  this.getButtonSubmit().click().should('exist').should('be.visible');
  this.getLoadingAnimation().should('exist').should('be.visible');
  

};


getBackSpace() {
    
  return cy.go('back')
  
};

checkTitleOnMainpage(){

  cy.get('h1').should('contain', 'Your average form');
    cy.get('.form-group')
      .should('contain', 'Username')
      .and('contain', 'Password')
      .and('contain', 'Gender')
      .and('contain', 'Male')
      .and('contain', 'Female')
      .and('contain', 'Hobbies')
      .and('contain', 'Hobby')
      .and('contain', 'Select')
      .and('contain', 'Reading')
      .and('contain', 'Sports')
      .and('contain', 'Music')
      .and('contain', 'Time');

}




}