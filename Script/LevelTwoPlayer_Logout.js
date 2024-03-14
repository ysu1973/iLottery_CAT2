function levelTwoPlayerLogout() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the MyAccount dropdown menu
  Aliases.browser.pageGeorgiaLottery.linkHomeHtml.textnode5.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.textnode6.linkLogout object equals 'Logout'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.textnode6.linkLogout, "contentText", cmpEqual, "Logout");
  //Clicks the 'linkLogout' link.
  Aliases.browser.pageGeorgiaLottery.textnode6.linkLogout.Click();
}
