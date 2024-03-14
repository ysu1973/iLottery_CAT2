function LogonL2_Player()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkLoginpopup' link.
  //Checks whether the 'Text' property of the Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress object equals 'reg2_ys@georgialotto.org'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress, "Text", cmpEqual, "reg2_ys@georgialotto.org");
  //Checks whether the 'Text' property of the Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.passwordboxPassword object equals 'QA_Admin0771'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.passwordboxPassword, "Text", cmpEqual, "QA_Admin0771");
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.buttonSignIn object equals 'Sign In'.
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.buttonSignIn.ClickButton();
}