const randomString = (length, chars) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const randomEmail = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  const email = randomString(10, chars) + '@georgialotto.com';
  return email;
}

const randomPassword = () => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const special = '!@#$%^&*()-_=+[]{};:,.<>?/|`~';
  const all = lowercase + uppercase + numbers + special;
  
  let password = randomString(1, lowercase) +
    randomString(1, uppercase) +
    randomString(1, numbers) +
    randomString(1, special) +
    randomString(12 - 4, all);

  return password.split('').sort(() => 0.5 - Math.random()).join('');
}

const randomName = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const name = randomString(5, chars);
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function beforeEachScenario() {
  //Launch browser
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/registration.html");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  
  return { browser };
}

function afterEachScenario() {
  // Close the browser
  let browser = Aliases.browser;
  browser.Close();
  Log.Message("Browser closed after scenario execution.");

}

Given("I am on the registration page", function (){
  let { browser, page } = beforeEachScenario();
});

When("I input all required fields with valid data", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textbox = browser.pageRegistration.formConfirmregistration;

  let firstName = randomName();
  let lastName = randomName();
  let email = randomEmail();
  let password = randomPassword();

  let nameInput = textbox.textboxFirstName;
  nameInput.Click();
  nameInput.SetText(firstName);

  nameInput = textbox.textboxLastname;
  nameInput.Click();
  nameInput.SetText(lastName);

  let emailInput = textbox.emailinputEmail;
  emailInput.Click();
  emailInput.SetText(email);
  emailInput = textbox.emailinputConfirmemail;
  emailInput.Click();
  emailInput.SetText(email);

  let passwordBox = textbox.passwordboxUserPassword;
  passwordBox.Click();
  passwordBox.SetText(password);
  passwordBox = textbox.passwordboxConfirmPassword;
  passwordBox.Click();
  passwordBox.SetText(password);
  let phoneInput = textbox.phoneinputBirthdayMonth;
  phoneInput.Click();
  phoneInput.SetText("04");
  textbox.phoneinputBirthdayDay.SetText("30");
  textbox.phoneinputBirthdayYear.SetText("1997");
  textbox.panelRegistrationstep1.Click();
  textbox.selectSecurityquestion12.ClickItem("In what city were you born?");
  passwordBox = textbox.passwordboxSecureanswer1;
  passwordBox.Click();
  passwordBox.SetText(randomPassword()); // Use a new random password for the security answer
  textbox.panelRegistrationstep1.Click();
  textbox.selectSecurityquestion2.ClickItem("What is your father's middle name?");
  passwordBox1 = textbox.passwordboxSecureanswer2;
  passwordBox1.Click();
  passwordBox1.SetText(randomPassword()); // Use a new random password for the security answer
  browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageRegistration;
  page.formConfirmregistration.labelIAcceptTheGeorgiaLotteryTer.linkLoadtandc.Click();
  page.buttonIAccept.ClickButton();
  
  
 
});


When("I click the submit button", function (){
  aqObject.CheckProperty(button, "contentText", cmpEqual, "SUBMIT");
  button.ClickButton();
});

Then("I see a message that says CONGRATULATIONS!", function (){
  let browser = Aliases.browser;
  let page = browser.pageRegistration;

  browser = Aliases.browser;
  page = browser.pageRegistration;
  Delay(5000);
  aqObject.CheckProperty(page.panel7, "contentText", cmpEqual, "Welcome to the Georgia Lottery Players Club! You may now enter second chance drawings and sign up to receive coupons and exclusive offers by email.");
  page.buttonContinue.ClickButton();
  });


When("I input an email address that has already been registered", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textbox = browser.pageRegistration.formConfirmregistration;
  textbox.textboxFirstName.SetText("Tet");
  textbox.textboxLastname.SetText("Test");
  let emailInput = textbox.emailinputEmail;
  emailInput.Click();
  emailInput.SetText("mh01@georgialotto.org");
  textbox.labelConfirmEmailAddress.Click();
});

Then("I see a message saying {arg}", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelEmailError, "contentText", cmpEqual, "A Players Club account with this email address already exists. Please enter a different email address or\nsign in\n.");
  Delay(5000)
});

Given("I have entered information in the following textboxes {arg}", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textbox = browser.pageRegistration.formConfirmregistration;
  let textbox2 = textbox.textboxFirstName;
  textbox2.Click();
  textbox2.SetText("Test");
  textbox2 = textbox.textboxLastname;
  textbox2.Drag(71, 23, -5, 6);
  textbox2.SetText("Testing");
  textbox.selectSuffix.ClickItem("II");
  let emailInput = textbox.emailinputEmail;
  emailInput.Click();
  emailInput.SetText("mh11@georgialottery.org");
  emailInput = textbox.emailinputConfirmemail;
  emailInput.Click();
  emailInput.SetText("mh11@georgialottery.org");
});

When("I leave one or more of the other required fields blank", function (){
  let passwordBox = Aliases.browser.pageRegistration.formConfirmregistration;
  aqObject.CheckProperty(passwordBox.passwordboxUserPassword, "value", cmpEqual, "");
  aqObject.CheckProperty(passwordBox.passwordboxConfirmPassword, "value", cmpEqual, "");
  aqObject.CheckProperty(passwordBox.phoneinputBirthdayMonth, "value", cmpEqual, "");
  aqObject.CheckProperty(passwordBox.phoneinputBirthdayDay, "value", cmpEqual, "");
  aqObject.CheckProperty(passwordBox.phoneinputBirthdayYear, "value", cmpEqual, "");
  aqObject.CheckProperty(passwordBox.passwordboxSecureanswer1, "value", cmpEqual, "");
  aqObject.CheckProperty(passwordBox.passwordboxSecureanswer2, "value", cmpEqual, "");
});

Then("I see a message for each field indicating to the user to select or input necessary information needed for each required field that was left blank", function (){
  let vlabel = Aliases.browser.pageRegistration.formConfirmregistration;
  aqObject.CheckProperty(vlabel.labelUserPasswordError, "contentText", cmpEqual, "Please choose a password.");
  aqObject.CheckProperty(vlabel.labelConfirmPasswordError, "contentText", cmpEqual, "Please enter your password again.");
  aqObject.CheckProperty(vlabel.labelDobrequiredError, "contentText", cmpEqual, "Please enter your date of birth. You must be 18 years of age or older to play lottery games.");
  aqObject.CheckProperty(vlabel.labelSecurityquestion1Error, "contentText", cmpEqual, "Please select security question to be used if you forget your password.");
  aqObject.CheckProperty(vlabel.labelSecureanswer1Error, "contentText", cmpEqual, "Please enter the answer to your chosen security question.");
  aqObject.CheckProperty(vlabel.labelSecurityquestion2Error, "contentText", cmpEqual, "Please select security question to be used if you forget your password.");
  aqObject.CheckProperty(vlabel.labelSecureanswer2Error, "contentText", cmpEqual, "Please enter the answer to your chosen security question.");
});


When("I input data that doesn't meet the requirements in both fields", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textbox = browser.pageRegistration.formConfirmregistration;
  let textbox2 = textbox.textboxFirstName;
  textbox2.Click();
  textbox2.SetText("n");
  textbox2 = textbox.textboxLastname;
  textbox2.Click();
  textbox2.SetText("m");
  Delay(3000);
  textbox.panelFirstName.Click();
});

Then("I see a message for each field indicating to the user that both names must be a minimum of two characters", function (){
  let vlabel = Aliases.browser.pageRegistration.formConfirmregistration;
  aqObject.CheckProperty(vlabel.labelFirstnameError, "contentText", cmpEqual, "First name must be a minimum of two characters.");
  aqObject.CheckProperty(vlabel.labelLastnameError, "contentText", cmpEqual, "Last name must be a minimum of two characters.");
});


When("I input a password that does not contain a number in the password field", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textbox = browser.pageRegistration.formConfirmregistration;
  textbox.textboxFirstName.SetText("Test");
  textbox.textboxLastname.SetText("Testing");
  let emailInput = textbox.emailinputEmail;
  emailInput.Click();
  emailInput.SetText("mh11@georgialotto.org");
  emailInput = textbox.emailinputConfirmemail;
  emailInput.Click();
  emailInput.SetText("mh11@georgialotto.org");
  let passwordBox = textbox.passwordboxUserPassword;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password21);
  textbox.passwordboxConfirmPassword.Click();
});

Then("I see an error message indicating to the user to choose a password that meets all requirements", function (){;
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelUserPasswordError, "contentText", cmpEqual, "Please choose a password that meets all requirements.");
});
