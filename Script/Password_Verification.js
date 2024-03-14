function beforeEachScenario() {
  //Launch browser
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/registration.html");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageRegistration;
  page.Wait();
  
  return { browser, page };
}

function afterEachScenario() {
  // Close the browser
  let browser = Aliases.browser;
  browser.Close();
  Log.Message("Browser closed after scenario execution.");
}


//passwordBox
When("I input a password {arg} in the Choose a Password textbox and a different password {arg} in the Confirm Password textbox", function (param1, param2){
  let { browser, page } = beforeEachScenario();
  let passwordBox = page.formConfirmregistration;
  let passwordBox2 = passwordBox.passwordboxUserPassword;
  passwordBox2.Click();
  delay(3000);
  aqObject.CheckProperty(passwordBox.labelChooseAPassword, "contentText", cmpEqual, "Choose a Password");
  passwordBox2.Click();
  passwordBox2.SetText(Project.Variables.Password12);
  passwordBox2 = passwordBox.passwordboxConfirmPassword;
  passwordBox2.Click();
  passwordBox2.SetText(Project.Variables.Password13);
  passwordBox.panelDateOfBirthMonth.Click();
  
});

Then("I see an error message saying {arg} below both textboxes", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelConfirmPasswordError, "contentText", cmpEqual, "Passwords entered do not match. Please re-enter your password.");
  
  afterEachScenario(); // Call afterEachScenario at the end of scenario execution
});


When("I input a password {arg} that is to short, doesn't include a required character type, etc.", function (param1){
  let { browser, page } = beforeEachScenario();
  let passwordBox = browser.pageRegistration.formConfirmregistration.passwordboxUserPassword;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password15);
});

When("click out side of the Choose a Password textbox", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageRegistration.formConfirmregistration.panelRegistrationstep1.Click();
});

Then("I see an error message saying {arg} below the Choose a Password textbox", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelUserPasswordError, "contentText", cmpEqual, "Please choose a password that meets all requirements.");
  
  afterEachScenario(); // Call afterEachScenario at the end of scenario execution
});

