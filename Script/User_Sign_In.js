function beforeEachScenario() {
  //Launch browser
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
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

Given("I am on the home page", function (){
  let { browser, page } = beforeEachScenario();
});

Given("I click on the {arg} button from the navigation bar", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageGeorgiaLottery.linkSignIn.Click();
});

Then("I should see the {arg} message box appear", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn, "ObjectLabel", cmpEqual, "Sign In");
});

When("I enter a valid username and password", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let emailInput = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  let emailInput2 = emailInput.emailinputEmailAddress;
  emailInput2.SetText("reg2_ys");
  emailInput2.SetText("reg2_ys@georgialotto.com");
  emailInput2.Keys("[Tab]");
  let passwordBox = emailInput.passwordboxPassword;
  passwordBox.SetText(Project.Variables.ValidPassword);

});

When("I click on the {arg} button located inside the message box", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let passwordBox = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  passwordBox.passwordboxPassword.Keys("[Tab]");
  passwordBox.linkForgotPassword.Keys("[Tab]");
  passwordBox.buttonSignIn2.Keys("[Enter]");
  Delay(5000);
});

Then("I should be redirected to the {arg} page", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageContactInformation.FindElement("//h1[.='Contact Information']"), "contentText", cmpEqual, "Contact Information");
  //signout
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageContactInformation;
  page.linkContactInformationHtml.textnode2.Click();
  browser.pageGeorgiaLottery.textnodeIframeSrcWwwGoogletagman.Keys("[Tab][Tab][Tab][Tab][Tab][Tab][Enter]");
  browser.ToUrl("https://gasc2playdigital.dev.igt.com/en-us/home.html"); 
  //afterEachScenario(); // Call afterEachScenario at the end of scenario execution
});
      
Given("I launch the home page", function (){
  let { browser, page } = beforeEachScenario();
});

When("I enter an invalid username", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let link = browser.pageGeorgiaLottery.linkSignIn;
  let emailInput = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  let emailInput2 = emailInput.emailinputEmailAddress;
  emailInput2.SetText("mh02georgialotto.org");
  emailInput2.Keys("[Tab]");
 
});

Then("I should see red message indicating {arg}", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.FindElement("#loginEmail-error"), "contentText", cmpEqual, "Please enter a valid email address");
  //afterEachScenario(); // Call afterEachScenario at the end of scenario execution
});
  

Given("I am on the GA Lottery home page", function (){
  let { browser, page } = beforeEachScenario();
});

Given("I click the {arg} button from the navigation bar", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageGeorgiaLottery.linkSignIn.Click();
});

When("I enter a valid username and an invalid password", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let emailInput = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  let emailInput2 = emailInput.emailinputEmailAddress;
  emailInput2.SetText("reg2_ys");
  emailInput2.SetText("reg2_ys@georgialotto.com");
  emailInput2.Keys("[Tab]");
  let passwordBox = emailInput.passwordboxPassword;
  passwordBox.SetText(Project.Variables.InvalidPassword);
});

When("I click on the {arg} button", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let passwordBox = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  passwordBox.passwordboxPassword.Keys("[Tab]");
  passwordBox.linkForgotPassword.Keys("[Tab]");
  passwordBox.buttonSignIn2.Keys("[Enter]");
  Delay(5000);
});
  
Then("I should see a message saying {arg}", function (parm1){
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.FindElement("//div[contains(@class, 'inline-error-msg')]"), "contentText", cmpEqual, "Your sign-in information does not match our records. For security purposes, we will lock your account after 3 failed attempts to sign in. Please select\nForgot Password?\nto reset your password.");
  afterEachScenario(); // Call afterEachScenario at the end of scenario execution
});

Given("I opened home page", function (){
  let { browser, page } = beforeEachScenario();
});

When("I leave the username and password fields empty", function (){
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.FindElement("//input[@id=(//label[.='Email Address']/@for)]"), "Text", cmpEqual, "");
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.FindElement("//input[@id=(//label[.='Password']/@for)]"), "Text", cmpEqual, "");
});

When("I press the {arg} button", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let passwordBox = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  passwordBox.passwordboxPassword.Keys("[Tab]");
  passwordBox.linkForgotPassword.Keys("[Tab]");
  passwordBox.buttonSignIn2.Keys("[Enter]");
  Delay(5000);
});

Then("I should see a message below the email address textbox saying {arg}", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.labelLoginemailError2, "contentText", cmpEqual, "Please enter your email address.");
});

Then("I should see a message below the password textbox saying {arg}", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.labelPasswordError, "contentText", cmpEqual, "Please enter your password.");
  afterEachScenario(); // Call afterEachScenario at the end of scenario execution
});

Given("I see the home page", function (){
  let { browser, page } = beforeEachScenario();
});

When("I enter a username that is not registered", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let emailInput = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  let emailInput2 = emailInput.emailinputEmailAddress2;
  emailInput2.Click();
  emailInput2.SetText("reg2_ys@georgialotto.com");
  emailInput2.Keys("[Tab]");
  let passwordBox = emailInput.passwordboxPassword2;
  passwordBox.SetText(Project.Variables.ValidPassword);
  passwordBox.Keys("[Tab]");
  emailInput.linkForgotPassword.Keys("[Tab]");
});

When("I click the green {arg} button", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let passwordBox = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  passwordBox.passwordboxPassword2.Keys("[Tab]");
  passwordBox.linkForgotPassword.Keys("[Tab]");
  passwordBox.buttonSignIn2.Keys("[Enter]");
});

Then("I should message displaying {arg}", function (param1){
  aqObject.CheckProperty(NameMapping.Sys.browser.pageGeorgiaLottery.labelLoginemailError, "contentText", cmpEqual, "Your sign-in information does not match our records. For security purposes, we will lock your account after 3 failed attempts to sign in. Please select\nForgot Password?\nto reset your password.");
  afterEachScenario(); // Call afterEachScenario at the end of scenario execution
});

Given("I brought up the home page", function (){
  let { browser, page } = beforeEachScenario();
});

When("I click on the {arg} link", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageGeorgiaLottery.linkSignIn.formLogin.linkForgotPassword.Click();
});

Then("I should be redirected to the {arg} recovery page", function (param1){
  let page = Aliases.browser.pageForgotpassword;
  aqObject.CheckProperty(page.textnodeForgotPassword, "contentText", cmpEqual, "Forgot Password");
  let form = page.formEmailforgotpasswordform;
  aqObject.CheckProperty(form.textnodePleaseEnterTheEmailAddre, "contentText", cmpEqual, "Please enter the email address associated with your Georgia Lottery Players Club account.");
  aqObject.CheckProperty(form.textnodeWeLlEmailYouALinkToAPage, "contentText", cmpEqual, "We'll email you a link to a page where you can easily create a new password.");
});

function Sign_In_content()
{
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn object equals 'Sign In'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn, "contentText", cmpEqual, "Sign In");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkSignIn' link.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn2 object equals 'Sign In'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn2, "contentText", cmpEqual, "Sign In");
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.panelPleaseSignInToYourGeorgia object equals 'Please sign in to your Georgia Lottery Players Club account or register an account below.'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.panelPleaseSignInToYourGeorgia, "contentText", cmpEqual, "Please sign in to your Georgia Lottery Players Club account or register an account below.");
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.labelEmailAddress object equals 'Email Address'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.labelEmailAddress, "contentText", cmpEqual, "Email Address");
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.labelPassword object equals 'Password'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.labelPassword, "contentText", cmpEqual, "Password");
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.linkForgotPassword object equals 'Forgot Password?'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.linkForgotPassword, "contentText", cmpEqual, "Forgot Password?");
  //Checks whether the 'href' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.linkForgotPassword object equals 'https://gasc1playdigital.dev.igt.com/en-us/forgotPassword.html'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.linkForgotPassword, "href", cmpEqual, "https://gasc2playdigital.dev.igt.com/en-us/forgotPassword.html");
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn object equals 'Sign In'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn, "contentText", cmpEqual, "Sign In");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn object equals True.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn, "Enabled", cmpEqual, true);
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.panelNotAMemberItSFreeToJoin object equals 'Not a member? It's free to join!'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.panelNotAMemberItSFreeToJoin, "contentText", cmpEqual, "Not a member? It's free to join!");
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.linkRegister2 object equals 'register'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.linkRegister2, "contentText", cmpEqual, "register");
  //Checks whether the 'href' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.linkRegister2 object equals 'https://gasc1playdigital.dev.igt.com/en-us/registration.html'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.linkRegister2, "href", cmpEqual, "https://gasc2playdigital.dev.igt.com/en-us/registration.html");
  //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.buttonClose2 object equals 'CLOSE'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.buttonClose2, "ObjectLabel", cmpEqual, "CLOSE");
}