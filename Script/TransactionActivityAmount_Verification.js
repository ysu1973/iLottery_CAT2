var levelTwoPlayerWithFundsLogin = require("LevelTwoPlayerWithFunds_Login");

function Test_TransactionAmounts(){
  //Launch Home page and Log in with L2 Player
  levelTwoPlayerWithFundsLogin.levelTwoPlayerWithFunds_Login
  Aliases.browser.pageGeorgiaLottery.Level2PlayerList.Click()
  //Click My Transactions
  Aliases.browser.pageGeorgiaLottery.linkMyDepositLimits.click()
  //Clicks the 'linkFinancialActivity' link.
  Aliases.browser.pageMyActivity.textnodeGameHistoryFinancialActi.linkFinancialActivity.Click();
  
  Aliases.browser.pageMyActivity.textnode7.linkDrawGamePurchaseamount1000da.panelDrawGamePurchase3.Click();
  //Gets the financial transaction type
  var transactionType = Aliases.browser.pageMyActivity.textnode7.linkDrawGamePurchaseamount1000da.textnodeDrawGamePurchase.contentText;
  //Gets the financial transacion amount
  var transactionAmount = Aliases.browser.pageMyActivity.textnode7.linkDrawGamePurchaseamount1000da.textnode10002.contentText;

 
  // Log transaction type and amount
  Log.Message("Transaction type: " + transactionType);
  Log.Message("Transaction amount: " + transactionAmount);
  
  //switch case to handle different transaction type
  switch ( transactionType ){
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
  //Verify the transaction amount.
  //Checks the amount matches a specific amount.Before executing this testcase make sure you update the amount in the logic below to the amount you used to wager the game
  if (transactionAmount === "-$5.00") {
    Log.Message(transactionAmount + " is correct");
  } else {
    Log.Warning("Amount does not match expected value.");
  }
 } 



