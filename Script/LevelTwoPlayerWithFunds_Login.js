function LevelTwoPlayerWithFundsLogin() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkSignIn' link.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.Click();
  //Clicks the 'emailinputEmailAddress2' control.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress2.Click();
  //Enters '![ReleaseLast]' in the 'emailinputEmailAddress2' object.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress2.Keys("![ReleaseLast]");
  //Sets the text 'mh06@georgialotto.org' in the 'emailinputEmailAddress2' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress2.SetText("reg2_ys@georgialotto.com");
  //Enters '[Tab]' in the 'emailinputEmailAddress2' object.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress2.Keys("[Tab]");
  //Sets the text Project.Variables.Password27 in the 'passwordboxPassword2' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword2.SetText(Project.Variables.Password27);
  //Sets the text Project.Variables.Password28 in the 'passwordboxPassword2' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword2.SetText(Project.Variables.Password28);
  //Sets the text Project.Variables.ValidPassword in the 'passwordboxPassword2' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword2.SetText(Project.Variables.ValidPassword);
  //Clicks the 'buttonSignIn2' button.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn2.ClickButton();
}

module.exports.levelTwoPlayerWithFundsLogin = LevelTwoPlayerWithFundsLogin()
