var levelTwoPlayerWithFundsLogin = require("LevelTwoPlayerWithFunds_Login")
//var levelTwoPlayerLogout = require("LevelTwoPlayer_Logout")

function marMonPlayerTwoSelection_Test() {
  //Launch Homepage and log in with L2 player
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  var browser = Aliases.browser;
  levelTwoPlayerWithFundsLogin.levelTwoPlayerWithFunds_Login
  Aliases.browser.pageGeorgiaLottery.Level2PlayerList.Click();
  //Click on Games tab from main Navigation bar
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnode.linkGames2.Click();
  //Click on the Diggi All Games link
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.linkAllGames.Click();
  //Waits until the game loads and is ready to accept user input. 
  Aliases.browser.pageDiggiGames.Wait();
  //Locate and click on Marvelous Money game buy now button. 
  var marvelousMoneyGame = browser.pageDiggiGames.FindElement("//button[contains(@data-game, 'Marvelous Money')and contains(text(), 'Buy Now')]");
  if (marvelousMoneyGame.exist) {
    marvelousMoneyGame.HoverMouse();
    Delay(5000);
    marvelousMoneyGame.Click();
    Log.Message("Marvelous Money game is selected");
  } else {
    Log.Error("Marvelous Money game selection failed");
  }
  //Opens specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/games/diggi-games.html");
  Aliases.browser.BrowserWindow.Maximize();
  //Enters '[Enter]' in the 'textnode8' object.
  Aliases.browser.pageDiggiGames.textnode8.Keys("[Enter]");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageDiggiGames.Wait();
  //Clicks the 'textnode' control.
  Aliases.browser.pageDiggiGames.link.textnode.Click();
  //Clicks the 'linkLogout' link.
  Aliases.browser.pageDiggiGames.textnodeMyAccount.linkLogout.Click();
}
