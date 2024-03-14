function levelOnePlayerLogout() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/myaccount/contact-information.html");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnode5' control.
  Aliases.browser.pageContactInformation.link2.textnode5.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageContactInformation.textnodeMyAccount.linkLogout2 object equals 'Logout'.
  aqObject.CheckProperty(Aliases.browser.pageContactInformation.textnodeMyAccount.linkLogout2, "contentText", cmpEqual, "Logout");
  //Clicks the 'linkLogout2' link.
  Aliases.browser.pageContactInformation.textnodeMyAccount.linkLogout2.Click();
}

//module.exports.levelOnePlayerLogout = levelOnePlayerLogout();

