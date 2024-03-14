var levelOnePlayerLogin = require("LevelOnePlayer_Login");

function luckySevenPlayerOneSelection_Test() {
  //Launch Homepage log in with L1 Player
  var browser = Aliases.browser;
  levelOnePlayerLogin.levelOnePlayerLogin;
  //Click on Games tab from main Navigation bar
  Delay(5000);
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnode.linkGames2.Click();
  //Click on the Diggi All Games link
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.linkAllGames.Click();
  //Waits until the game loads and is ready to accept user input. 
  Aliases.browser.pageDiggiGames.Wait();
  //Locate and click on Lucky 7's game 
  var luckySevenTry = browser.pageDiggiGames.FindElement("//button[contains(@data-game, 'Lucky 7') and contains(text(), 'Try')]");
  if (luckySevenTry.exist) {
    luckySevenTry.HoverMouse();
    Delay(5000);
    luckySevenTry.Click();
    Log.Message("Lucky's 7 game is selected");
  } else {
    Log.Error("Lucky's 7 game selection failed");
    //Opens the specified URL in a running instance of the specified browser.
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
}
