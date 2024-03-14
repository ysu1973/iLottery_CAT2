function beforeEachScenario() {
  //Launch browser
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  
  
  return { browser };
}

function afterEachScenario() {
  // Close the browser
  let browser = Aliases.browser;
  browser.BrowserWindow.Minimize()
  //Log.Message("Browser closed after scenario execution.");

}

Given("I am on the Cash Three game page", function (){
  let { browser } = beforeEachScenario();
  let link = browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo;
  link.textnode.linkGames2.Click();
  link.linkCash3.Click();
  
});

Then("I should be able to see the latest draw results for the Cash Three game", function (){
  let page = Aliases.browser.pageCashThree;
  aqObject.CheckProperty(page.panelLastDrawResults, "contentText", cmpEqual, "LAST DRAW RESULTS:");
  aqObject.CheckProperty(page.textnode15, "outerHTML", cmpEqual, "<span class=\"game-sprite-icon-evening\"></span>");
  aqObject.CheckProperty(page.textnode16, "outerHTML", cmpEqual, "<span class=\"game-sprite-icon-night\"></span>");
  aqObject.CheckProperty(page.textnode17, "outerHTML", cmpEqual, "<span class=\"game-sprite-icon-day\"></span>");
  
  afterEachScenario()
});

Given("I am not logged in", function (){
  aqObject.CheckProperty(Aliases.browser.pageCashThree.linkLoginpopup, "contentText", cmpEqual, "Sign In");
});

When("I click on the {arg} tab", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageCashThree.textnodeBuyNowHowToPlayOddsPrize.linkBuynowlink.Click();
});

Then("I should be able to select and enter the necessary details", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let vselect = browser.pageCashThree.formInternetwageringCash3;
  vselect.fieldsetStep1Of4.selectBettype.ClickItem("Box");
  vselect.fieldsetStep2Of4.buttonQuikPik.ClickButton();
  let vselect2 = vselect.fieldsetStep3Of4.selectDrawTime;
  vselect2.Drag(73, 15, -2, 5);
  vselect.selectStep4Of44selectNumberOfDra.ClickItem("1 draw");
});

Then("I click on the {arg} button", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageCashThree.formInternetwageringCash3.buttonBuyNow.ClickButton();
});

Then("I should be redirected to the sign-in page", function (){
  let page = Aliases.browser.pageCashThree;
  aqObject.CheckProperty(page.textnodeSignIn, "outerHTML", cmpEqual, "<h2 class=\"modal-title\">Sign In</h2>");
  aqObject.CheckProperty(page.textnodePleaseSignInToYourGeorgi, "contentText", cmpEqual, "Please sign in to your Georgia Lottery Players Club account or register an account below.");

  afterEachScenario()
});

When("I press on the {arg} button", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageCashThree.linkCheckWinningNumbers.Click();
});

Then("I should see a table that list all the previous winning numbers, date, draw, winners, and total payout", function (){
  let page = Aliases.browser.pageCashThree;
  aqObject.CheckProperty(page.cell, "contentText", cmpEqual, "Date");
  aqObject.CheckProperty(page.cell2, "contentText", cmpEqual, "Draw");
  aqObject.CheckProperty(page.cell3, "contentText", cmpEqual, "Winning Numbers");
  aqObject.CheckProperty(page.cell4, "contentText", cmpEqual, "Winners");
  aqObject.CheckProperty(page.cell5, "contentText", cmpEqual, "Total Payout");
});