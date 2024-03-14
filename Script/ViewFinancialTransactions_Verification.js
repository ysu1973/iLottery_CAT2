var levelTwoPlayerWithFundsLogin = require("LevelTwoPlayerWithFunds_Login")

function Test_VeiwFinancialTransactions(){
  //Launch Homepage
  //Browsers.Item(btChrome).Navigate("https://gasc1playdigital.dev.igt.com/en-us/home.html");
  //var browser = Aliases.browser
  //Log in with L2 Player
  levelTwoPlayerWithFundsLogin.levelTwoPlayerWithFunds_Login
  Aliases.browser.pageGeorgiaLottery.Level2PlayerList.Click()
  //Click My Transactions
  Aliases.browser.pageGeorgiaLottery.linkMyDepositLimits.click()
  //Clicks the 'linkFinancialActivity' link.
  Aliases.browser.pageMyActivity.textnodeGameHistoryFinancialActi.linkFinancialActivity.Click();
  //Verify presence of Financial Activity
  var financialActivityTable = Aliases.browser.pageMyActivity.FindElement("#finActivityGamesList > div > div");
  if (financialActivityTable.Exists) {
    Log.Message("Financial transactions are displayed")
  } else {
      //Additional check when transactions table does not exist
      //Check for 'no transactions' message or alternative element
      var noTransactionMessage = Aliases.browser.pageMyActivity.FindElement("//div[contains(text(), 'No transactions for the selected period were found.')]");
      if (noTransactionMessage.Exists) {
        Log.Message("No transactions message is displayed, indicating no finacial activity");
      } else {
        Log.Warning("The transactions table is not displayed and no 'no transactions' message is found. Please verify the page manually")
      }
  }
 } 

 