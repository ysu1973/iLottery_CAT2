function Logon()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnode' control.
  //Aliases.browser.pageGeorgiaLottery2.link.textnode.Click();
  //Clicks the 'linkLoginpopup' link.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.Click();
  //Clicks the 'emailinputEmailAddress' control.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress.Click();
  //Sets the text 'reg2_ys@georgialotto.org' in the 'emailinputEmailAddress' text editor.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress.SetText("reg2_ys@georgialotto.org");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.passwordboxPassword.Click();
  //Sets the text Project.Variables.Password2 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.passwordboxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.buttonSignIn.ClickButton();
}