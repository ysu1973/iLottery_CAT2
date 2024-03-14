function Failed_Login_Attempt()
{
  //This script will launch the portal, press the Sign In button (found on homepage), enter invalid data into both the Email Address and Password fields, and then press the Sign In button within the mini window.
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc1playdigital.dev.igt.com/en-us/home.html");
  //Clicks the 'linkSignIn' link.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.Click();
  //Clicks the 'emailinputEmailAddress' control.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.Click();
  //Simulates one or several keypresses.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.Keys("frazier@auctor.net");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword.Click();
  //Simulates one or several keypresses.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword.Keys(Project.Variables.Random_Email1.Item("Email_Address", Math.floor(Math.random() * 1000)));
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Checks whether the 'outerText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.panel4 object equals 'Your sign-in information does not match our records. For security purposes, we will lock your account after 5 failed attempts to sign in. Please select Forgot Password? to reset your password.'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.panel4, "outerText", cmpEqual, "Your sign-in information does not match our records. For security purposes, we will lock your account after 5 failed attempts to sign in. Please select Forgot Password? to reset your password.");
  //Disable Region Checkpoint if running test from a small screen monitor
  //If executing from a smaller screen monitor (ex. 14"),
  //Then disable Region Checkpoint before Run
  //Compares the panelInvalidLogin Stores item with the image of the Aliases.browser.pageGeorgiaLottery.FindElement("//div[contains(@class, 'player-login__inner')]") object.
  //Regions.panelInvalidLogin.Check(Aliases.browser.pageGeorgiaLottery.FindElement("//div[contains(@class, 'player-login__inner')]"), false, false, 20314, 51);
}