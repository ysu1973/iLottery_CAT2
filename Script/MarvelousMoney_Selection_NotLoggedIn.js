function MarMonNonPlayerSelection_Test() {
  //Launch Homepage
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  var browser = Aliases.browser;
  //Click on Games tab from main Navigation bar
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnode.linkGames2.Click();
  //Click on the Diggi All Games link
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.linkAllGames.Click();
  //Waits until the game loads and is ready to accept user input. 
  Aliases.browser.pageDiggiGames.Wait();
  //Locate and click on Marvelous Money game 
  var marvelousMoneyGameBuy = browser.pageDiggiGames.FindElement("//button[contains(@data-game, 'Marvelous Money') and contains(text(), 'Buy')]");
  if (marvelousMoneyGameBuy.exist) {
    marvelousMoneyGameBuy.HoverMouse();
    Delay(5000);
    marvelousMoneyGameBuy.Click();
    Log.Message("Marvelous Money game is selected");
  } else {
    Log.Error("Marvelous Money game selection failed");
  }
}
