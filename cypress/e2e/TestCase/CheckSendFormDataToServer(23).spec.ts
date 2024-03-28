import { Mainpage } from "../pages/Mainpage";

const mainpage = new Mainpage()


describe("Sending form data including password", () => {
  it("Sends form data with password to the server", () => {
    cy.visit('/');
    mainpage.checkTitleOnMainpage();

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

    mainpage.getButtonSubmit().click();

    cy.intercept("POST", "/submit").as("formSubmission");

    cy.wait("@formSubmission").then(function(interception) {
    const requestBody = interception.request.body;
    const responseSubmission = interception.response
    cy.log(requestBody);
    cy.log(interception.request.url)
    console.log(interception.response?.statusMessage)


    expect(requestBody).include("username=Nurken");
    expect(requestBody).include("password=111");// see bug report 3 in https://docs.google.com/spreadsheets/d/1OEjVBcAyHa_TO3WB0cu01VV75NTV9ZXjFjeEj-pNJ5k/edit#gid=0
    expect(requestBody).include("gender=Male");
    expect(requestBody).include("hobby=Reading");
    expect(requestBody).include("time=Morning");
    expect(responseSubmission?.statusCode).eq(302)
    expect(responseSubmission?.statusMessage).eq('Found')
      
  });
  });
});
