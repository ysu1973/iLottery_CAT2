function openUrl(url) {
  // Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate(url);
}

function login(username, password) {
  // Clicks the 'linkSignIn' link.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.Click();
  // Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn object equals the expected text.
  const expectedSignInText = "CLOSE\nSign In\nPlease sign in to your Georgia Lottery Players Club account or register an account below.\nEmail Address\nPassword\nForgot Password?\nSign In\nNot a member? It's free to join!\nregister";
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn, "contentText", cmpEqual, expectedSignInText);
  // Sets the text of the 'emailinputEmailAddress' text editor to the given username.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.SetText(username);
  // Sets the text of the 'passwordboxPassword' text editor to the given password.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword.SetText(password);
  // Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn.ClickButton();
  // Delays the test execution for the specified time period.
  Delay(2000);
  // Checks whether the 'ObjectLabel' property of the Aliases.browser.pageGeorgiaLottery.linkAddFunds object equals 'Add Funds'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkAddFunds, "ObjectLabel", cmpEqual, "Add Funds");
}

function Login_Level2_Player_0Wagers() {
  const url = "https://gasc2playdigital.dev.igt.com/en-us/home.html";
  const username = "reg2_ys@georgialotto.com";
  const password = "QA_Admin0771";
  
  openUrl(url);
  Delay(3000);
  login(username, password);
}

function Login_Level2_Player_Upcoming_Wagers_C4L() {
  const url = "https://gasc2playdigital.dev.igt.com/en-us/home.html";
  const username = "reg2_ys@georgialotto.com";
  const password = Project.Variables.Password1;
  
  openUrl(url);
  Delay(2000);
  login(username, password);
}
