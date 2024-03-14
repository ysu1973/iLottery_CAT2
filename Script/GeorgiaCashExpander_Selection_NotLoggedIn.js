function gaCashEx_NonPlayerSelection_Test() {
  //Launch Homepage
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  var browser = Aliases.browser;
  //Click on Games tab from main Navigation bar
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnode.linkGames2.Click();
  //Click on the Diggi All Games link
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.linkAllGames.Click();
  //Waits until the game loads and is ready to accept user input. 
  Aliases.browser.pageDiggiGames.Wait();
  //Locate and click on Georgia Expander game 
  var georgiaCashExpBuy = browser.pageDiggiGames.FindElement("//button[contains(@data-game, 'Georgia Cash Expander') and contains(text(), 'Buy')]");
  if (georgiaCashExpBuy.exist) {
    georgiaCashExpBuy.HoverMouse();
    Delay(5000)
    georgiaCashExpBuy.Click();
    Log.Message("Georgia Cash Expander game is selected");
  } else {
    Log.Error("Georgia Cash Expander game selection failed");
  }
}
