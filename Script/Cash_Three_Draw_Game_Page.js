Given("I navigate to the Cash Three game page", function (){
  let browserWindow = Aliases.browser.BrowserWindow;
  browserWindow.Click(1095, 121);
  browserWindow.Click(1399, 120);
  browserWindow.Keys("[Enter]");
});

Then("I should see the game details including draw timings, prize details, and how to play instructions", function (){
  
});

Given("I am on the Cash Three game page", function (){
  
});

When("I click on the {arg} link", function (param1){
 
});

Then("I should be able to see the latest draw results for the Cash Three game", function (){
 
});

Then("I should be able to see the past draw results for the Cash Three game", function (){
  
});

Given("I am not logged", function (){
  
});

When("I click on the {arg} button ", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageRegistration2.linkLoginpopup.formLogin.buttonSignIn.ClickButton();
});

Then("I should be redirected to the {arg} modal", function (param1){
  
});

Given("I am logged in", function (){

});

Then("I should be able to purchase a ticket for the Cash Three game", function (){
  
});

Then("I should see a table that list all the previous winning numbers, date, draw, winners, and total payout", function (){
  throw new NotImplementedError();
});
