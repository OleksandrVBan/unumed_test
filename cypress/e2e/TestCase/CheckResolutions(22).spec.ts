import { Mainpage } from "../pages/Mainpage";
import { Result } from "../pages/Resultpage";


const mainpage = new Mainpage()
const result = new Result()
const usermane = 'Nurken';
const password = '111';

beforeEach(() => {
cy.visit('/').title().should('eq', 'Your average form');
mainpage.checkTitleOnMainpage();

});

it('Test Case 22 Check Resolutions' , () => {

  cy.log('START Check Resolutions');

  cy.log('Start Check iPhone X')
  cy.viewport(375, 812);
  cy.log('Start');

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

  cy.window().then((win) => {
  const screenWidth = win.innerWidth;
  const screenHeight = win.innerHeight;
  const expectedWidth = 375;
  const expectedHeight = 812;

  expect(screenWidth).to.equal(expectedWidth);
  expect(screenHeight).to.equal(expectedHeight);
  })
  cy.log('START Check Resolutions');
  cy.reload();



  cy.log('Start Check Samsung Galaxy S21 Ultra')
  cy.viewport(412, 869);
  cy.log('Start');

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

  cy.window().then((win) => {
    const screenWidth = win.innerWidth;
    const screenHeight = win.innerHeight;
    const expectedWidth = 412;
    const expectedHeight = 869;
  
    expect(screenWidth).to.equal(expectedWidth);
    expect(screenHeight).to.equal(expectedHeight);
  })
  cy.log('End Check Samsung Galaxy S21 Ultra')
  cy.reload();


  cy.log('Start Check Samsung Galaxy S10/S10+')
  cy.viewport(414, 896);
  cy.log('Start');

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

  cy.window().then((win) => {
    const screenWidth = win.innerWidth;
    const screenHeight = win.innerHeight;
    const expectedWidth = 414;
    const expectedHeight = 896;
  
    expect(screenWidth).to.equal(expectedWidth);
    expect(screenHeight).to.equal(expectedHeight);
  })
  cy.log('End Check Samsung Galaxy S10/S10+')
  cy.reload();



  cy.log('Start Check Google Pixel 3a')
  cy.viewport(360, 760);
  cy.log('Start');

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

  cy.window().then((win) => {
    const screenWidth = win.innerWidth;
    const screenHeight = win.innerHeight;
    const expectedWidth = 360;
    const expectedHeight = 760;
    expect(screenWidth).to.equal(expectedWidth);
    expect(screenHeight).to.equal(expectedHeight);
  })
  cy.log('End Check Google Pixel 3a')
  cy.reload();




  cy.log('Start Check iPhone 12/12 Pro')
  cy.viewport(390, 844);
  cy.log('Start');

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

  cy.window().then((win) => {
    const screenWidth = win.innerWidth;
    const screenHeight = win.innerHeight;
    const expectedWidth = 390;
    const expectedHeight = 844;
    expect(screenWidth).to.equal(expectedWidth);
    expect(screenHeight).to.equal(expectedHeight);
  })
  cy.log('End Check iPhone 12/12 Pro')
  cy.reload();


  cy.log('Start Check iPhone 14 Pro Max')
  cy.viewport(428, 926);
  cy.log('Start');

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

  cy.window().then((win) => {
    const screenWidth = win.innerWidth;
    const screenHeight = win.innerHeight;
    const expectedWidth = 428;
    const expectedHeight = 926;
    expect(screenWidth).to.equal(expectedWidth);
    expect(screenHeight).to.equal(expectedHeight);
  })
  cy.log('End Check iPhone 14 Pro Max')
  cy.reload();

  cy.log('Start Check iPad Pro');
  cy.viewport(1024, 1366);
  cy.log('Start');

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

  cy.window().then((win) => {
  const screenWidthTablet = win.innerWidth;
  const screenHeightTablet = win.innerHeight;
  const expectedWidthTablet = 1024;
  const expectedHeightTablet = 1366;
  expect(screenWidthTablet).to.equal(expectedWidthTablet);
  expect(screenHeightTablet).to.equal(expectedHeightTablet);
  });
  cy.log('End Check iPad Pro');
  cy.reload();

  cy.log('Start Check Samsung Galaxy Tab');
  cy.viewport(1200, 1920);
  cy.log('Start');

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

  cy.window().then((win) => {
  const screenWidthTablet = win.innerWidth;
  const screenHeightTablet = win.innerHeight;
  const expectedWidthTablet = 1200;
  const expectedHeightTablet = 1920;
  expect(screenWidthTablet).to.equal(expectedWidthTablet);
  expect(screenHeightTablet).to.equal(expectedHeightTablet);
  });
  cy.log('Start Check Samsung Galaxy Tab');
  cy.reload();

  cy.log('Start Check MacBook Air');
  cy.viewport(1440, 900);
  cy.log('Start');

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

  cy.window().then((win) => {
  const screenWidthTablet = win.innerWidth;
  const screenHeightTablet = win.innerHeight;
  const expectedWidthTablet = 1440;
  const expectedHeightTablet = 900;
  expect(screenWidthTablet).to.equal(expectedWidthTablet);
  expect(screenHeightTablet).to.equal(expectedHeightTablet);
  });
  cy.log('Start Check MacBook Air');
  cy.reload();

  cy.log('Start Check Windows Laptop');
  cy.viewport(1366, 768);
  cy.log('Start');

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
  
  cy.window().then((win) => {
  const screenWidthTablet = win.innerWidth;
  const screenHeightTablet = win.innerHeight;
  const expectedWidthTablet = 1366;
  const expectedHeightTablet = 768;
  expect(screenWidthTablet).to.equal(expectedWidthTablet);
  expect(screenHeightTablet).to.equal(expectedHeightTablet);
  });
  cy.log('End Check Windows Laptop');
  cy.reload();

  cy.log('Start Check MacBook Pro 13');
  cy.viewport(1260, 1600);
  cy.log('Start');

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

  cy.window().then((win) => {
  const screenWidthTablet = win.innerWidth;
  const screenHeightTablet = win.innerHeight;
  const expectedWidthTablet = 1260;
  const expectedHeightTablet = 1600;
  expect(screenWidthTablet).to.equal(expectedWidthTablet);
  expect(screenHeightTablet).to.equal(expectedHeightTablet);
  });
  cy.log('End Check MacBook Pro 13');
  cy.reload();

  cy.log('Start Check MacBook Pro 16');
  cy.viewport(3072, 1920);
  cy.log('Start');

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

  cy.window().then((win) => {
  const screenWidthTablet = win.innerWidth;
  const screenHeightTablet = win.innerHeight;
  const expectedWidthTablet = 3072;
  const expectedHeightTablet = 1920;
  expect(screenWidthTablet).to.equal(expectedWidthTablet);
  expect(screenHeightTablet).to.equal(expectedHeightTablet);
  });
  cy.log('End Check MacBook Pro 16');
  cy.reload();

  cy.log('Check Windows Laptop 14-inch');
  cy.viewport(1920, 1080);
  cy.log('Start');

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

  cy.window().then((win) => {
  const screenWidthTablet = win.innerWidth;
  const screenHeightTablet = win.innerHeight;
  const expectedWidthTablet = 1920;
  const expectedHeightTablet = 1080;
  expect(screenWidthTablet).to.equal(expectedWidthTablet);
  expect(screenHeightTablet).to.equal(expectedHeightTablet);
  });
  cy.log('End Windows Laptop 14-inch');
  

  cy.log('END Check Resolutions');

})




