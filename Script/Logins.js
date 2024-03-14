function Login_Level2_Player_0Wagers()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://gasc21playdigital.dev.igt.com/en-us/home.html");
  //Delays the test execution for the specified time period.
  Delay(3000);
  //Clicks the 'linkSignIn' link.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn object equals 'CLOSE
  //Sign In
  //Please sign in to your Georgia Lottery Players Club account or register an account below.
  //Email Address
  //Password
  //Forgot Password?
  //Sign In
  //Not a member? It's free to join!
  //register'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn, "contentText", cmpEqual, "CLOSE\nSign In\nPlease sign in to your Georgia Lottery Players Club account or register an account below.\nEmail Address\nPassword\nForgot Password?\nSign In\nNot a member? It's free to join!\nregister");
  //Clicks the 'emailinputEmailAddress' control.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.Click();
  //Sets the text 'fw02@georgialotto.com' in the 'emailinputEmailAddress' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.SetText("reg2_ys@georgialotto.com");
  //Enters '[Tab]' in the 'emailinputEmailAddress' object.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.Keys("[Tab]");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword.SetText("QA_Admin0771");
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageGeorgiaLottery.linkAddFunds object equals 'Add Funds'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkAddFunds, "ObjectLabel", cmpEqual, "Add Funds");
}

function Login_Level2_Player_Upcoming_Wagers_C4L()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'linkSignIn' link.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn object equals 'CLOSE
  //Sign In
  //Please sign in to your Georgia Lottery Players Club account or register an account below.
  //Email Address
  //Password
  //Forgot Password?
  //Sign In
  //Not a member? It's free to join!
  //register'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn.panelSignIn, "contentText", cmpEqual, "CLOSE\nSign In\nPlease sign in to your Georgia Lottery Players Club account or register an account below.\nEmail Address\nPassword\nForgot Password?\nSign In\nNot a member? It's free to join!\nregister");
  //Clicks the 'emailinputEmailAddress' control.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.Click();
  //Sets the variable value for email address in the 'emailinputEmailAddress' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.SetText("reg2_ys@georgialotto.com");
  //Enters '[Tab]' in the 'emailinputEmailAddress' object.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress.Keys("[Tab]");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageGeorgiaLottery.linkAddFunds object equals 'Add Funds'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkAddFunds, "ObjectLabel", cmpEqual, "Add Funds");
}

