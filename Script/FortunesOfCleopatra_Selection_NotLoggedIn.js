function fortOfCleo_NonPlayerSelection_Test() {
  //Launch Homepage
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  var browser = Aliases.browser;
  //Click on Games tab from main Navigation bar
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnode.linkGames2.Click();
  //Click on the Diggi All Games link
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.linkAllGames.Click();
  //Waits until the game loads and is ready to accept user input. 
  Aliases.browser.pageDiggiGames.Wait();
  //Locate and click on Fortunes Of Cleopatra game 
  var fortuneOfCleopatraBuy = browser.pageDiggiGames.FindElement("//button[contains(@data-game, 'Fortunes of Cleopatra') and contains(text(), 'Buy')]");
  if (fortuneOfCleopatraBuy.exist) {
    fortuneOfCleopatraBuy.HoverMouse();
    Delay(5000);
    fortuneOfCleopatraBuy.Click();
    Log.Message("Fortune of Cleopatra game is selected");
  } else {
    Log.Error("Fortune of Cleopatra game selection failed");
  }
}
