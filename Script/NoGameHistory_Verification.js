var levelTwoPlayerWithFundsLogin = require("LevelTwoPlayerWithFunds_Login")

function Test_NoGameHistory() {
  //Launch Homepage
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  var browser = Aliases.browser
  //Log in with L2 Player
  levelTwoPlayerWithFundsLogin.levelTwoPlayerWithFunds_Login
  Aliases.browser.pageGeorgiaLottery.Level2PlayerList.Click()
  //Click My Transactions
  Aliases.browser.pageGeorgiaLottery.linkMyDepositLimits.click()
  //Filter by month, year, and click search button
  Aliases.browser.pageMyActivity.formFilterBy.selectFilterBy.FindElement("//select[@id=(//label[contains(.,'Filter by')]/@for)]").ClickItem("2023");
  Aliases.browser.pageMyActivity.formFilterBy.selectActivitygamemonths.ClickItem("January");
  Aliases.browser.pageMyActivity.formFilterBy.buttonMyactivitygamesearch.ClickButton();
  //Verify presense of no transaction for selected period were found
  Aliases.browser.pageMyActivity.panelNoTransactionsForTheSelecte.Click();
  //Checks whether the 'outerHTML' property of the Aliases.browser.pageMyActivity.panelNoTransactionsForTheSelecte object equals '<div class="alert alert-info txHistory-noResults">
  var noHistoryMsg = aqObject.CheckProperty(Aliases.browser.pageMyActivity.panelNoTransactionsForTheSelecte, "outerHTML", cmpEqual, "<div class=\"alert alert-info txHistory-noResults\">\n\tNo transactions for the selected period were found.\n</div>");
  if (noHistoryMsg.Exists && noHistoryMsg.contentText == "No transactions for the selected period were found.") {
    Log.Message("No game history message is displayed correctly");  
  } else {
    Log.Message("No game history message is not displayed");
  }
}
 

