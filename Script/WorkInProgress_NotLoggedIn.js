function workInProgress_NonPlayerSelection_Test() {
  //Launch Homepage
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  var browser = Aliases.browser;
  //Click on Games tab from main Navigation bar
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnode.linkGames2.Click();
  //Click on the Diggi All Games link
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.linkAllGames.Click();
  //Waits until the game loads and is ready to accept user input. 
  Aliases.browser.pageDiggiGames.Wait();
  //Locate and click on Work In Progress game 
  var workInProgressBuy = browser.pageDiggiGames.FindElement("//button[contains(@data-game, 'High Tier Win Test Game') and contains(text(), 'Buy')]");
  if (workInProgressBuy.exist) {
    workInProgressBuy.HoverMouse();
    Delay(5000)
    workInProgressBuy.Click();
    Log.Message("Work In Progress game is selected");
  } else {
    Log.Error("Work In Progress game selection failed");
  }
}