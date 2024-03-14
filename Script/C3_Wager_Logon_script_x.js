function C3_Wager_Logon()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkLoginpopup' link.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.Click()
  //Drags the 'emailinputEmailAddress' object.
  //Sets the text 'reg2_ys@georgialotto.org' in the 'emailinputEmailAddress' text editor.
 // Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress.SetText("reg2_ys@georgialotto.org");
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.emailinputEmailAddress.SetText("reg2_ys@georgialotto.org");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.passwordboxPassword.SetText("QA_Admin0771");
  //Sets the text Project.Variables.Password2 in the 'passwordboxPassword' text editor.
  //Clicks the 'buttonSignIn' button.
  Aliases.browser.pageGeorgiaLottery2.linkLoginpopup.formLogin.buttonSignIn.ClickButton();
}