import { Mainpage } from "../pages/Mainpage"
import { Result } from "../pages/Resultpage";


const mainpage = new Mainpage()
const result = new Result()




describe("Check positive scenarios ", () => {
  beforeEach(() => {
    cy.visit('/').title().should('eq', 'Your average form');
    mainpage.checkTitleOnMainpage();


});

  it('Test Case 1 Sending the form with valid data' , () => {

    cy.log('Start');

    const usermane = 'Nurken';
    const password = '111';
    
    // Filling the form
    mainpage.fillInUsername(usermane);
    mainpage.fillInPassword(password);
  
    //Gender
    mainpage.checkRBMale();

    //Hobby
    mainpage.chooseCheckboxReading();

    //Time
    mainpage.selectTimeMorning();
      
    // Waiting for the result
    mainpage.getProceedToResult();
    cy.wait(2000);

    // Checking the results
    result.getUserName().contains(`Greetings, ${usermane}`);
    result.getTable().contains('Male');
    result.getTable().contains('Reading');
    result.getTable().contains('Morning');

  
    cy.log('END');
  });


  it('Test Case 2 Sending the form with valid data with "Noon" Time' , () => {

    cy.log('Start');
   
    const usermane = 'Nurken';
    const password = '111'
     
    // Filling the form
    mainpage.fillInUsername(usermane);
    mainpage.fillInPassword(password);

    //Gender
    mainpage.checkRBFemale();

    //Hobby
    mainpage.chooseCheckboxSports();

    //Time
    mainpage.selectTimeNoon();
    
    // Waiting for the result
    mainpage.getProceedToResult();
    cy.wait(2000);

    // Checking the results
    result.getUserName().contains(`Greetings, ${usermane}`);
    result.getTable().contains('Female');
    result.getTable().contains('Sports');
    result.getTable().contains('Noon'); // Test case failed (see https://docs.google.com/spreadsheets/d/1OEjVBcAyHa_TO3WB0cu01VV75NTV9ZXjFjeEj-pNJ5k/edit?usp=sharing)

  
    cy.log('END');
});


it('Test Case 3 Sending the form with valid data with "Evening" Time' , () => {

  cy.log('Start');

  const usermane = 'Nurken';
  const password = '111';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBMale();

  //Hobby
  mainpage.chooseCheckboxReading_Music();

  //Time
  mainpage.selectTimeEvening();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Reading,Music');
  result.getTable().contains('Evening'); // Test case failed (see https://docs.google.com/spreadsheets/d/1OEjVBcAyHa_TO3WB0cu01VV75NTV9ZXjFjeEj-pNJ5k/edit?usp=sharing)

  cy.log('END');
});

it('Test Case 4 Sending the form with space and 2 hobby'  , () => {

  cy.log('Start');
 
   // Filling the form
  mainpage.fillInUsername(' ');
  mainpage.fillInPassword(' ');
  
  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxReading_Music();

  //Time
  mainpage.selectTimeMorning();

 // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains('Greetings,');
  result.getTable().contains('Female');
  result.getTable().contains('Reading,Music');
  result.getTable().contains('Morning'); 

  cy.log('END');
});

it('Test Case 5 Sending the form with 1 symbol and 2 hobby' , () => {

  cy.log('Start');

  const usermane = 'h';
  const password = '1';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBMale();
  
  //Hobby
  mainpage.chooseCheckboxSports_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Sports,Music');
  result.getTable().contains('Morning'); 

  cy.log('END');
});

it('Test Case 6 Sending the form with 100 symbol and 2 hobby' , () => {

  cy.log('Start');

  const usermane = 'The quick brown fox jumps over the lazy dog.1234567890!@#$%^&*()-_=+[]{}|;:,.<>?/~';
  const password = 'The quick brown fox jumps over the lazy dog.1234567890!@#$%^&*()-_=+[]{}|;:,.<>?/~';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxReading_Sports();

  //Time
  mainpage.selectTimeMorning();

// Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName()
    .invoke('text')
    .then(text => {
    expect(text.trim()).to.equal(`Greetings, ${usermane}`)
});
  
  result.getTable().contains('Female');
  result.getTable().contains('Reading,Sports');
  result.getTable().contains('Morning'); 

  cy.log('END');
});


it('Test Case 7 Sending the form with <script> and 2 hobby' , () => {

  cy.log('Start');

  const usermane = '<script>alert("XSS")</script>';
  const password = '<script>alert("XSS")</script>';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBMale();
  
  //Hobby
  mainpage.chooseCheckboxesReading_Sports_Music();
  

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Reading,Sports,Music');
  result.getTable().contains('Morning'); 

  cy.log('END');
});

it('Test Case 8 Sending the form with special characters' , () => {

  cy.log('Start');
  
  const usermane = '!@#$%^&*()';
  const password = '!@#$%^&*()';
   
  // Filling the form
  mainpage.fillInUsername(usermane)
  mainpage.fillInPassword(password)
  
  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxReading();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName()
    .invoke('text')
    .then(function(text){
    expect(text.trim()).to.equal(`Greetings, ${usermane}`)
});
  
  result.getTable().contains('Female');
  result.getTable().contains('Reading');
  result.getTable().contains('Morning'); 

  cy.log('END');
});


it('Test Case 9 Sending a form with lowercase and uppercase data' , () => {

  cy.log('Start');
 
  const usermane = 'UserName';
  const password = 'UserName';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBMale();
  
  //Hobby
  mainpage.chooseCheckboxSports();
  
  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Sports');
  result.getTable().contains('Morning'); 

  cy.log('END');
});

it('Test Case 10 Submitting a form with repeating characters ' , () => {

  cy.log('Start');

  const usermane = 'usernameusernameusername  usernameusernameusername';
  const password = 'usernameusernameusername  usernameusernameusername';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);
  
  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxMusic();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName()
    .invoke('text')
    .then(function(text){
    expect(text.trim()).to.equal(`Greetings, ${usermane}`);
});
  
  result.getTable().contains('Female');
  result.getTable().contains('Music');
  result.getTable().contains('Morning'); 

  cy.log('END');
});


it('Test Case 11 Submitting a form with a repeating character ' , () => {

  cy.log('Start');


  const usermane = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  const password = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBMale();
  
  //Hobby
  mainpage.chooseCheckboxReading_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Reading,Music');
  result.getTable().contains('Morning'); 

  cy.log('END');
});

it('Test Case 12 Submitting a form with system username and password' , () => {

  cy.log('Start');

  const usermane = 'admin';
  const password = 'root';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxSports_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Female');
  result.getTable().contains('Sports,Music');
  result.getTable().contains('Morning'); 

  cy.log('END');
});

it('Test Case 13 Sending a form with characters in Japanese' , () => {

  cy.log('Start');

  const usermane = 'ユーザー名';
  const password = 'ユーザー名';
   
  // Filling the form
  mainpage.fillInUsername(usermane)
  mainpage.fillInPassword(password)

  //Gender
  mainpage.checkRBMale();
  
  //Hobby
  mainpage.chooseCheckboxReading_Sports();
  
  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Reading,Sports');
  result.getTable().contains('Morning');

  cy.log('END');
});

it('Test Case 14 Submitting a form with numbers for username filed and characters for password filed' , () => {

  cy.log('Start');

  const usermane = '111';
  const password = 'Nurken';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxesReading_Sports_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Female');
  result.getTable().contains('Reading,Sports,Music');
  result.getTable().contains('Morning'); 

  cy.log('END');
});


it('Test Case 15 Sending a form with an emoji' , () => {

  cy.log('Start');

  const usermane = 'u😂😉😘😏❤️😈🫡🥶😨😎🎱😫👌😡🙆‍♂️😡🥹🔥🥹🥹';
  const password = 'u😂😉😘😏❤️😈🫡🥶😨😎🎱😫👌😡🙆‍♂️😡🥹🔥🥹🥹';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBMale();
  
  //Hobby
  mainpage.chooseCheckboxesReading_Sports_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Reading,Sports,Music');
  result.getTable().contains('Morning');

  cy.log('END');
});

it('Test Case 16 Sending a form with characters in French' , () => {

  cy.log('Start');
  
  const usermane = 'résumé';
  const password = 'café';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxesReading_Sports_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Female');
  result.getTable().contains('Reading,Sports,Music');
  result.getTable().contains('Morning');

  cy.log('END');
});


it('Test Case 17 Sending a form with characters in different languages' , () => {

  cy.log('Start');

  const usermane = 'Χρήστης';
  const password = 'Пользователь';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBMale();
  
  //Hobby
  mainpage.chooseCheckboxesReading_Sports_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Reading,Sports,Music');
  result.getTable().contains('Morning');

  cy.log('END')
});

it('Test Case 18 Sending a form with a dot in the username and an underscore in the password ' , () => {

  cy.log('Start');

  const usermane = 'user.name';
  const password = 'pass___word';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxesReading_Sports_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Female');
  result.getTable().contains('Reading,Sports,Music');
  result.getTable().contains('Morning');


  cy.log('END')
});

it('Test Case 19 Sending a form with command injection checking ' , () => {

  cy.log('Start');

  const usermane = '; rm -rf /';
  const password = '; rm -rf /';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBMale();

  //Hobby
  mainpage.chooseCheckboxesReading_Sports_Music();
  

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Male');
  result.getTable().contains('Reading,Sports,Music');
  result.getTable().contains('Morning');

  cy.log('END');
});


it('Test Case 20 Sending a form with SQL injection validation' , () => {

  cy.log('Start');

  const usermane = 'SELECT * FROM users';
  const password = 'SELECT * FROM users';
   
  // Filling the form
  mainpage.fillInUsername(usermane);
  mainpage.fillInPassword(password);

  //Gender
  mainpage.checkRBFemale();

  //Hobby
  mainpage.chooseCheckboxesReading_Sports_Music();

  //Time
  mainpage.selectTimeMorning();

  // Waiting for the result
  mainpage.getProceedToResult();
  cy.wait(2000);

  // Checking the results
  result.getUserName().contains(`Greetings, ${usermane}`);
  result.getTable().contains('Female');
  result.getTable().contains('Reading,Sports,Music');
  result.getTable().contains('Morning');

  cy.log('END');
});

})