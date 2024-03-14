function LogonL2_Player()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkLoginpopup' link.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.Click();
  //Clicks the 'emailinputEmailAddress' control.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress.Click();
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.passwordboxPassword.Click();
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.buttonSignIn.ClickButton();
}