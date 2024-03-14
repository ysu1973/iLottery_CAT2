function C3_Wager_QuickPick_logon()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkLoginpopup' link.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.Click();
  //Clicks the 'emailinputEmailAddress' control.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress.Click();
  //Clicks the 'panelEmailAddress' control.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.panelEmailAddress.Click();
  //Checks whether the 'value' property of the Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress object equals 'reg2_ys@georgialotto.org'.
    //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.buttonSignIn.ClickButton();
}