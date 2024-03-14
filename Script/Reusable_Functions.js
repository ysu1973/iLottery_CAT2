var newRegisterPass = (Project.Variables.NewRegisterPassword);
var month = (Project.Variables.validDobMonth);
var day = (Project.Variables.validDobDay);
var year = (Project.Variables.validDobYear);
//Functions below are accessible from the Georgia Lottery homepage

//This function navigates to the Georgia Lottery homepage
function navigateToHomePage() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Delays the test execution for the specified time period.
  Delay(3000);

}
//This function launches the Cash 3 page
function cashThree(){
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/games/draw-games/cash-three.html#tab-howToPlay")
}

//This function launches the Cash 4 page
function cashFour(){
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/games/draw-games/cash-four.html#tab-buyNow")
}

//This function launches the QW page
function quickWin(){
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/games/quick-win.html")
}
  

//Player logging off
//function playerLogOff() {
  //Aliases.browser.Page("https://gasc1playdigital.dev.igt.com/en-us/games/draw-games/cash-three.html#").Click()
  //Aliases.browser.pageContactInformation.textnode3.linkLogout.Click()
//}
function PlayerTwoLogin() {
  let emailInput = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  let emailInput2 = emailInput.emailinputEmailAddress;
  emailInput2.SetText("reg2@georgialotto.com");
  emailInput2.Keys("[Tab]");
  let passwordBox = emailInput.passwordboxPassword;
  passwordBox.SetText(Project.Variables.ValidPassword);
  }
  
//L2 player without funding
function levelTwoLogin() {
  clickSignLink()
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let emailInput = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  let emailInput2 = emailInput.emailinputEmailAddress;
  emailInput2.SetText("reg2@georgialotto.com");
  emailInput2.Keys("[Tab]");
  let passwordBox = emailInput.passwordboxPassword;
  passwordBox.SetText(Project.Variables.ValidPassword);
  }
  
function levelTwoPlayerWithoutFunds() {
  levelTwoLogin()
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let passwordBox = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  passwordBox.passwordboxPassword.Keys("[Tab]");
  passwordBox.linkForgotPassword.Keys("[Tab]");
  passwordBox.buttonSignIn2.Keys("[Enter]");
  Delay(5000);
  
}
function levelTwoLoginWithFundsWithoutSignButton() {
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let emailInput = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  let emailInput2 = emailInput.emailinputEmailAddress;
  emailInput2.SetText("reg2@georgialotto.com");
  emailInput2.Keys("[Tab]");
  let passwordBox = emailInput.passwordboxPassword;
  passwordBox.SetText(Project.Variables.ValidPassword);
  }
//L2 Player with funding
function levelTwoLoginWithFunds() {
  clickSignLink()
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let emailInput = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  let emailInput2 = emailInput.emailinputEmailAddress;
  emailInput2.SetText("reg2@georgialotto.com");
  emailInput2.Keys("[Tab]");
  let passwordBox = emailInput.passwordboxPassword;
  passwordBox.SetText(Project.Variables.ValidPassword);
  }
  
function levelTwoPlayerWithFunds() {
  levelTwoLoginWithFunds()
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let passwordBox = browser.pageGeorgiaLottery.linkSignIn.formLogin;
  passwordBox.passwordboxPassword.Keys("[Tab]");
  passwordBox.linkForgotPassword.Keys("[Tab]");
  passwordBox.buttonSignIn2.Keys("[Enter]");
  Delay(5000);
  }
  
  //L1 Player
function playerLevelOneLogin() {
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkSignIn' link.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.Click();
  //Clicks the 'emailinputEmailAddress2' control.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress2.Click();
  //Sets the text 'mh02@georgialotto.org' in the 'emailinputEmailAddress2' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress2.SetText("reg2@georgialotto.com");
  //Enters '[Tab]' in the 'emailinputEmailAddress2' object.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.emailinputEmailAddress2.Keys("[Tab]");
  //Sets the text Project.Variables.Password27 in the 'passwordboxPassword2' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword2.SetText(Project.Variables.Password27);
  //Sets the text Project.Variables.Password28 in the 'passwordboxPassword2' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword2.SetText(Project.Variables.Password28);
  //Sets the text Project.Variables.ValidPassword in the 'passwordboxPassword2' text editor.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.passwordboxPassword2.SetText(Project.Variables.ValidPassword);
  //Clicks the 'buttonSignIn2' button.
  Aliases.browser.pageGeorgiaLottery.linkSignIn.formLogin.buttonSignIn2.ClickButton();
}
/////////////////////////////////////////////////////////////////////
//////////////////////
///////////////All Funciton below are from Home Page///////////////////////////////////////////////////////////////////////////
//This function Navigates to Winners Gallery

function navToWinnersGallery(){
  navigateToHomePage()
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnodeWinners.linkWinners, "innerText", cmpEqual, "WINNERS ")
  Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnodeWinners.Click()
  
  //, ...	Checks whether the 'innerText' property of the Aliases.browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo.textnodeWinners.linkWinners object equals 'WINNERS '.
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////All Functions below are used for registration page

//This function navigates to the registration page
function clickRegisterButton() {
  navigateToHomePage()
  Aliases.browser.pageGeorgiaLottery.Wait()
  Aliases.browser.pageGeorgiaLottery.linkRegister.Click()
}

// Wait for the registration page to load
function waitRegistrationPageLoad(){  
  Aliases.browser.pageRegistration
}

//Verify personal information section 
function verifyEnterPersonalInfo(){
  aqObject.CheckProperty(Aliases.browser.pageRegistration.panel, "contentText", cmpEqual, "JOIN NOW\nJOIN THE GEORGIA LOTTERY PLAYERS CLUB TO ENTER SECOND-CHANCE DRAWINGS AND PRIZE GIVE-AWAYS, BUY LOTTERY GAMES ONLINE, GET INVITATIONS TO EXCLUSIVE EVENTS, RECEIVE VALUABLE COUPONS, AND MUCH MORE!");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panel2, "contentText", cmpEqual, "ENTER YOUR PERSONAL INFORMATION");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelFirstName, "ObjectType", cmpEqual, "Label");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textboxFirstName, "ObjectLabel", cmpEqual, "First Name");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelLastName, "contentText", cmpEqual, "Last Name");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSuffix, "contentText", cmpEqual, "Suffix");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelEmailAddress, "contentText", cmpEqual, "Email Address");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelConfirmEmailAddress, "contentText", cmpEqual, "Confirm Email Address");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelChooseAPassword, "contentText", cmpEqual, "Choose a Password");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelConfirmPassword, "contentText", cmpEqual, "Confirm Password");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelDateOfBirth, "contentText", cmpEqual, "Date of Birth");
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayMonth.Keys(Project.Variables.DOB.Item("Month", Math.floor(Math.random() * 100)))
  }
 
//Verify Promo Code section   
function verifyPromoCode(){
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnodePromoCode, "contentText", cmpEqual, "PROMO CODE");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelEnterYourPromoCode.textnodeEnterYourPromoCode, "contentText", cmpEqual, "Enter Your Promo Code:");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnodeToRedeemAPromoCodeYouMus, "contentText", cmpEqual, "To redeem a promo code, you must check the box below labeled\nENABLE THIS ACCOUNT TO PURCHASE LOTTERY TICKETS ONLINE\nand complete all fields.\nYou can continue your registration without a promo code.");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panel3, "contentText", cmpEqual, "ENABLE THIS ACCOUNT TO PURCHASE LOTTERY TICKETS ONLINE\nPlay Cash 3, Cash 4, Cash Pop, KENO!, Mega Millions, Powerball, Fantasy 5, Cash4Life, and Diggi Games online while located within Georgia.\n(Available to Georgia residents only; additional information and verification required.)");
}

//Verify Security Questions section properties
function verifySecurityQuestions(){
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panel4, "contentText", cmpEqual, "SECURITY QUESTIONS");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityQuestion1, "contentText", cmpEqual, "Security Question #1");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityAnswer1, "contentText", cmpEqual, "Security Answer #1");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityQuestion2, "contentText", cmpEqual, "Security Question #2");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityAnswer2, "contentText", cmpEqual, "Security Answer #2");
}

//Verify Notification Preferences Section properties
function verifyNotificationPreferences(){
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.fieldset, "contentText", cmpEqual, "Notifications Preferences\nSet your preferences to 'ON' to opt in to email notifications from the Georgia Lottery. You can receive exclusive offers & updates, daily winning numbers, jackpot alerts, and valuable coupons.\nYou may unsubscribe at any time by switching your preferences to 'OFF.'\nOffers & Updates\nJackpot Alerts\nCoupons\nDaily Winning Numbers");
}

//Verify Term Of Use section properties
function verifyTermsOfUse(){
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panel5, "contentText", cmpEqual, "TERMS OF USE");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnodePleaseReviewAndAcceptThe, "contentText", cmpEqual, "Please review and accept the statements below.");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelIAcceptTheGeorgiaLotteryTer.textnodeIAcceptTheGeorgiaLottery, "contentText", cmpEqual, "I accept the\nGeorgia Lottery Terms of Use");
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.buttonSubmit, "ObjectLabel", cmpEqual, "SUBMIT");

}

//Enter personal information for new player

function enterPersonalInfo(newRegisterPass, password, month, day, year){
  Aliases.browser.pageRegistration.textboxFirstName.SetText("Test");
  Aliases.browser.pageRegistration.textboxLastName.Click()
  Aliases.browser.pageRegistration.textboxLastName.SetText("Automation");
  Aliases.browser.pageRegistration.textboxEmailInput.Click();
  Aliases.browser.pageRegistration.textboxEmailInput.SetText("testautomation@ga.com");
  Aliases.browser.pageRegistration.textboxEmailConfirmInput.Click();
  Aliases.browser.pageRegistration.textboxEmailConfirmInput.SetText("testautomation@ga.com");
  Aliases.browser.pageRegistration.textboxUserPassword.Click();
  Aliases.browser.pageRegistration.textboxUserPassword.SetText(password);
  Aliases.browser.pageRegistration.textboxConfirmPassword.Click()
  Aliases.browser.pageRegistration.textboxConfirmPassword.SetText(password);
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayMonth.Click();
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayMonth.Keys(month);
  Delay(1000);
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayDay.Click()
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayDay.Keys(day);
  Delay(1000);
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayYear.Click()
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayYear.Keys(year); 
  Delay(1000);
}

//Answer Security Questions
function setSecurityQuestions(){
  Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion12.ClickItem("What was the name of your first school teacher?");
  Delay(10000)
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer1.Click()
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer1.SetText("Georgia")
  Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion2.ClickItem("What is the first name of your high school prom date?");
  Delay(1000)
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer2.Click();
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer2.SetText("Georgia");                                                           
}

//Set notification Preferences
function setNotifications(){
  Aliases.browser.pageRegistration.formConfirmregistration.fieldset2.Click();
}

//Click the Georgia Lottery Terms of Use Box
function clickGaLotTermsBox(){
  Aliases.browser.pageRegistration.formConfirmregistration.labelIAcceptTheGeorgiaLotteryTer.Click()
}
//////////////////////////////////////////////////////////////////////////////////////////
//This function navigates to the sign in page
function clickSignLink() {
  navigateToHomePage()
  Aliases.browser.pageGeorgiaLottery.linkSignIn.Click()
}

//This function navigates to the About Us page
function clickAboutUsLink() {
  navigateToHomePage()
  Aliases.browser.pageGeorgiaLottery.linkAboutUs.Click()
}

//This function navigates to the Retailars page
function clickRetailersLink() {
  navigateToHomePage()
  Aliases.browser.pageGeorgiaLottery.linkRetailers.Click()
}

//This function navigates to the COAM page
function clickCoamLink() {
  navigateToHomePage()
  Aliases.browser.pageGeorgiaLottery.linkCoam.Click()
}

//This function navigates to the Press Center page
function clickPressCenterLink() {
  navigateToHomePage()
  Aliases.browser.pageGeorgiaLottery.linkPressCenter.Click()
}

//This function navigates to Search
function clickSearchLink() {
  navigateToHomePage()
  Aliases.browser.pageGeorgiaLottery.buttonSearch.Click()
}






///Exported functions
//module.exports.waitRegistrationPageLoad = waitRegistrationPageLoad();
//module.exports.verifyEnterPersonalInfo = verifyEnterPersonalInfo();
//module.exports.verifyPromoCode = verifyPromoCode();
//module.exports.verifySecurityQuestions = verifySecurityQuestions();
//module.exports.verifyNotificationPreferences = verifyNotificationPreferences();
//module.exports.verifyTermsOfUse = verifyTermsOfUse();
//module.exports.enterPersonalInfo = enterPersonalInfo(newRegisterPass);
//module.exports.setSecurityQuestions = setSecurityQuestions();
//module.exports.setNotifications = setNotifications();
//module.exports.clickGaLotTermsBox = clickGaLotTermsBox();
//module.exports.navigateToHomePage = navigateToHomePage();
//module.exports.navToWinnersGallery = navToWinnersGallery();
//module.exports.levelTwoPlayerWithFunds = levelTwoPlayerWithFunds();
//module.exports.clickSignLink = clickSignLink();
//module.exports.playerLevelOneLogin = playerLevelOneLogin();




  