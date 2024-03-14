function luckySeven_NonPlayerSelection_Test() {
  //Launch Homepage
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  var browser = Aliases.browser;
  //Click on Games tab from main Navigation bar
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnode.linkGames2.Click();
  //Click on the Diggi All Games link
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.linkAllGames.Click();
  //Waits until the game loads and is ready to accept user input. 
  Aliases.browser.pageDiggiGames.Wait();
  //Locate and click on Lucky 7's game 
  var luckySevenTry = browser.pageDiggiGames.FindElement("//button[contains(@data-game, 'Lucky 7') and contains(text(), 'Try')]");
  if (luckySevenTry.exist) {
    luckySevenTry.HoverMouse();
    luckySevenTry.Click();
    Log.Message("Lucky's 7 game is selected");
  } else {
    Log.Error("Lucky's 7 game selection failed");
  }
}