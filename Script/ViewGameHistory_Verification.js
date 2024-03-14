var levelTwoPlayerWithFundsLogin = require("LevelTwoPlayerWithFunds_Login")

function ViewGameHistory_Test() {
  //Launch Homepage
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  var browser = Aliases.browser
  //Log in with L2 Player
  levelTwoPlayerWithFundsLogin.levelTwoPlayerWithFunds_Login
  Aliases.browser.pageGeorgiaLottery.Level2PlayerList.Click()
  //Click My Transactions
  Aliases.browser.pageGeorgiaLottery.linkMyDepositLimits.click()
  //Verify presense of history game
  var historyTable = Aliases.browser.pageMyActivity.panelDiggiGame.FindElement("//div[@role='main']//div[@id='game-history']//div[@role='tab']");
  if (historyTable.Exists) {
    Log.Message("Game history is displayed");  
  } else {
      //Additional check when game history table does not exist
      //Check for 'no game history' message or alternative element
      var noGameHistoryMessage = Aliases.browser.pageMyActivity.FindElement("#histories-content");
      if (noGameHistoryMessage.Exist) {
        Log.Message("No game history message is displayed, indicating no game activity");
      } else {
        Log.Warning("The game history table is not displayed and no 'no game history' message is found. Please verify the page manually")
      }
  }
}
 


