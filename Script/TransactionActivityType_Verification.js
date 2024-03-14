var levelTwoPlayerWithFundsLogin = require("LevelTwoPlayerWithFunds_Login");

function Test_VeiwFinancialTransactions(){
  //Launch Home page and Log in with L2 Player
  levelTwoPlayerWithFundsLogin.levelTwoPlayerWithFunds_Login
  Aliases.browser.pageGeorgiaLottery.Level2PlayerList.Click()
  //Click My Transactions
  Aliases.browser.pageGeorgiaLottery.linkMyDepositLimits.click()
  //Clicks the 'linkFinancialActivity' link.
  Aliases.browser.pageMyActivity.textnodeGameHistoryFinancialActi.linkFinancialActivity.Click();
  
  Aliases.browser.pageMyActivity.textnode7.linkDrawGamePurchaseamount1000da.panelDrawGamePurchase3.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageMyActivity.textnode7.linkDrawGamePurchaseamount1000da.textnodeDrawGamePurchase object equals 'Draw Game Purchase'.
  var transactionActivity = Aliases.browser.pageMyActivity.textnode7.linkDrawGamePurchaseamount1000da.textnodeDrawGamePurchase.contentText;

  
 //switch case to handle different transaction type
  switch ( transactionActivity ){
    case "Diggi Game Purchase":
      Log.Message("Transaction type is Digi Game Purchase.");
      break;
      
    case "Deposit From Bank Account":
      Log.Message("Transaction type is a deposit from a bank account");
      break;
  
    case "Diggi Game Win":
      Log.Message("Transaction type is a Digi Game Win!");
      break;
      
    case "Draw Game Purchase":
      Log.Message("Transaction type is a Draw Game Purchase!");
      break;
      
    case "Draw Game Win":
      Log.Message("Transaction type is a Draw Game Win!");
      break;
      
    default:
      Log.Warning("Transaction type is unknown" + " " + transactionType);
      break;
  
  }
 } 



