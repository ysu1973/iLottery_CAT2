function beforeEachScenario() {
  //Launch browser
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.BrowserWindow;
  //page.Wait();
  
  return { browser };
}

function afterEachScenario() {
  // Close the browser
  let browser = Aliases.browser;
  browser.Close();
  Log.Message("Browser closed after scenario execution.");
}

Given("the player is not logged in", function (){
 let { browser, page } = beforeEachScenario();
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn, "contentText", cmpEqual, "Sign In");
});

When("the player navigates to the Second Chance Games", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pageGeorgiaLottery;
  page.navGeorgiaLottery.textnodeGames4.linkGames3.textnode23.Click();
  page.nav.textnodeGamesDrawGamesCash3BuyNo.textnodeSecondChanceGames.linkSecondChanceGames.Click();
});

Then("the player should be navigated to the Second Chance Games landing page", function (){
  let page = Aliases.browser.pageSecondChance;
  aqObject.CheckProperty(page.textnodeSecondChance, "contentText", cmpEqual, "Second Chance");
  aqObject.CheckProperty(page.textnode3, "contentText", cmpEqual, "NOTE: When attempting to submit your entries for Georgia Lottery second chance promotions, please make sure your Internet browser allows pop-ups. Otherwise, you may experience difficulty entering each promotion.");
  aqObject.CheckProperty(page.textnodeActiveSecondChanceGames, "contentText", cmpEqual, "Active Second Chance Games");
  aqObject.CheckProperty(page.textnodeEndedSecondChanceGames, "contentText", cmpEqual, "Ended Second Chance Games");
});

When("the player selects a Second Chance Games", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageSecondChance.textnodeScgametiles.textnodeBigGeorgiaRaffle.linkAloadscgame.textnode5.Click();

});

Then("the player should be navigated to the correct game", function (){
  aqObject.CheckProperty(Aliases.browser.pageHome2.panelBigGeorgiaRaffle, "contentText", cmpEqual, "BIG GEORGIA RAFFLE");
  
  afterEachScenario(); // Call afterEachScenario at the end of scenario execution

});


