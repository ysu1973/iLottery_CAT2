function Register_Player()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageGeorgiaLottery.Wait();
  //Clicks the 'linkRegister' link.
  Aliases.browser.pageGeorgiaLottery.linkRegister.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.panel object equals 'JOIN NOW
  //JOIN THE GEORGIA LOTTERY PLAYERS CLUB TO ENTER SECOND-CHANCE DRAWINGS AND PRIZE GIVE-AWAYS, BUY LOTTERY GAMES ONLINE, GET INVITATIONS TO EXCLUSIVE EVENTS, RECEIVE VALUABLE COUPONS, AND MUCH MORE!'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.panel, "contentText", cmpEqual, "JOIN NOW\nJOIN THE GEORGIA LOTTERY PLAYERS CLUB TO ENTER SECOND-CHANCE DRAWINGS AND PRIZE GIVE-AWAYS, BUY LOTTERY GAMES ONLINE, GET INVITATIONS TO EXCLUSIVE EVENTS, RECEIVE VALUABLE COUPONS, AND MUCH MORE!");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.panel2 object equals 'ENTER YOUR PERSONAL INFORMATION'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panel2, "contentText", cmpEqual, "ENTER YOUR PERSONAL INFORMATION");
  //Checks whether the 'ObjectType' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelFirstName object equals 'Label'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelFirstName, "ObjectType", cmpEqual, "Label");
  //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageRegistration.formConfirmregistration.textboxFirstName object equals 'First Name'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textboxFirstName, "ObjectLabel", cmpEqual, "First Name");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelLastName object equals 'Last Name'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelLastName, "contentText", cmpEqual, "Last Name");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelSuffix object equals 'Suffix'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSuffix, "contentText", cmpEqual, "Suffix");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelEmailAddress object equals 'Email Address'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelEmailAddress, "contentText", cmpEqual, "Email Address");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelConfirmEmailAddress object equals 'Confirm Email Address'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelConfirmEmailAddress, "contentText", cmpEqual, "Confirm Email Address");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelChooseAPassword object equals 'Choose a Password'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelChooseAPassword, "contentText", cmpEqual, "Choose a Password");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelConfirmPassword object equals 'Confirm Password'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelConfirmPassword, "contentText", cmpEqual, "Confirm Password");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelDateOfBirth object equals 'Date of Birth'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelDateOfBirth, "contentText", cmpEqual, "Date of Birth");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.textnodePromoCode object equals 'PROMO CODE'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnodePromoCode, "contentText", cmpEqual, "PROMO CODE");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelEnterYourPromoCode.textnodeEnterYourPromoCode object equals 'Enter Your Promo Code:'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelEnterYourPromoCode.textnodeEnterYourPromoCode, "contentText", cmpEqual, "Enter Your Promo Code:");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.textnodeToRedeemAPromoCodeYouMus object equals 'To redeem a promo code, you must check the box below labeled
  //ENABLE THIS ACCOUNT TO PURCHASE LOTTERY TICKETS ONLINE
  //and complete all fields.
  //You can continue your registration without a promo code.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnodeToRedeemAPromoCodeYouMus, "contentText", cmpEqual, "To redeem a promo code, you must check the box below labeled\nENABLE THIS ACCOUNT TO PURCHASE LOTTERY TICKETS ONLINE\nand complete all fields.\nYou can continue your registration without a promo code.");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.panel3 object equals 'ENABLE THIS ACCOUNT TO PURCHASE LOTTERY TICKETS ONLINE
  //Play Cash 3, Cash 4, Cash Pop, KENO!, Mega Millions, Powerball, Fantasy 5, Cash4Life, and Diggi Games online while located within Georgia.
  //(Available to Georgia residents only; additional information and verification required.)'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panel3, "contentText", cmpEqual, "ENABLE THIS ACCOUNT TO PURCHASE LOTTERY TICKETS ONLINE\nPlay Cash 3, Cash 4, Cash Pop, KENO!, Mega Millions, Powerball, Fantasy 5, Cash4Life, and Diggi Games online while located within Georgia.\n(Available to Georgia residents only; additional information and verification required.)");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.panel4 object equals 'SECURITY QUESTIONS'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panel4, "contentText", cmpEqual, "SECURITY QUESTIONS");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityQuestion1 object equals 'Security Question #1'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityQuestion1, "contentText", cmpEqual, "Security Question #1");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityAnswer1 object equals 'Security Answer #1'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityAnswer1, "contentText", cmpEqual, "Security Answer #1");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityQuestion2 object equals 'Security Question #2'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityQuestion2, "contentText", cmpEqual, "Security Question #2");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityAnswer2 object equals 'Security Answer #2'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSecurityAnswer2, "contentText", cmpEqual, "Security Answer #2");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.fieldset object equals 'Notifications Preferences
  //Set your preferences to 'ON' to opt in to email notifications from the Georgia Lottery. You can receive exclusive offers & updates, daily winning numbers, jackpot alerts, and valuable coupons.
  //You may unsubscribe at any time by switching your preferences to 'OFF.'
  //Offers & Updates
  //Jackpot Alerts
  //Coupons
  //Daily Winning Numbers'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.fieldset, "contentText", cmpEqual, "Notifications Preferences\nSet your preferences to 'ON' to opt in to email notifications from the Georgia Lottery. You can receive exclusive offers & updates, daily winning numbers, jackpot alerts, and valuable coupons.\nYou may unsubscribe at any time by switching your preferences to 'OFF.'\nOffers & Updates\nJackpot Alerts\nCoupons\nDaily Winning Numbers");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.panel5 object equals 'TERMS OF USE'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panel5, "contentText", cmpEqual, "TERMS OF USE");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.textnodePleaseReviewAndAcceptThe object equals 'Please review and accept the statements below.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnodePleaseReviewAndAcceptThe, "contentText", cmpEqual, "Please review and accept the statements below.");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelIAcceptTheGeorgiaLotteryTer.textnodeIAcceptTheGeorgiaLottery object equals 'I accept the
  //Georgia Lottery Terms of Use'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelIAcceptTheGeorgiaLotteryTer.textnodeIAcceptTheGeorgiaLottery, "contentText", cmpEqual, "I accept the\nGeorgia Lottery Terms of Use");
  //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageRegistration.formConfirmregistration.buttonSubmit object equals 'SUBMIT'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.buttonSubmit, "ObjectLabel", cmpEqual, "SUBMIT");
  //Clicks the 'textboxFirstName' control.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxFirstName.Click();
  //Sets the text KeywordTests.Register_L1_Player.Variables.Random_First_Name("First_Name", Math.floor(Math.random() * 100)) in the 'textboxFirstName' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxFirstName.SetText(Project.Variables.Random_First_Name.Item("First_Name", Math.floor(Math.random() * 100)));
  //Clicks the 'textboxLastname' control.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxLastname.Click();
  //Sets the text KeywordTests.Register_L1_Player.Variables.Random_Last_Name("Last_Name", Math.floor(Math.random() * 100)) in the 'textboxLastname' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxLastname.SetText(Project.Variables.Random_Last_Name.Item("Last_Name", Math.floor(Math.random() * 100)));
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Sets the text KeywordTests.Register_L1_Player.Variables.Random_Email1("Email_Address", Math.floor(Math.random() * 1000)) in the 'emailinputEmail' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.SetText(Project.Variables.Random_Email11.Item("Email_Address", Math.floor(Math.random() * 1000)));
  //Delays the test execution for the specified time period.
  Delay(500);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.Click();
  //Delays the test execution for the specified time period.
  Delay(500);
  //Simulates one or several keypresses.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.Keys("^a");
  //Delays the test execution for the specified time period.
  Delay(500);
  //Simulates one or several keypresses.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.Keys("^c");
  //Delays the test execution for the specified time period.
  Delay(500);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputConfirmemail.Click();
  //Enters '^v' in the 'emailinputConfirmemail' object.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputConfirmemail.Keys("^v");
  //Clicks the 'passwordboxUserPassword' control.
  //Aliases.browser.pageRegistration.formConfirmregistration.passwordboxUserPassword.Click();
  //Sets the text Project.Variables.Password in the 'passwordboxUserPassword' text editor.
  //Aliases.browser.pageRegistration.formConfirmregistration.passwordboxUserPassword.SetText(Project.Variables.Password);
  //Clicks the 'passwordboxConfirmPassword' control.
  //Aliases.browser.pageRegistration.formConfirmregistration.passwordboxConfirmPassword.Click();
  //Sets the text Project.Variables.Password in the 'passwordboxConfirmPassword' text editor.
  //Aliases.browser.pageRegistration.formConfirmregistration.passwordboxConfirmPassword.SetText(Project.Variables.Password);
  //Clicks the 'phoneinputBirthdayMonth' control.
  //Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayMonth.Click();
  //Enters Project.Variables.DOB("Month", Math.floor(Math.random() * 100)) in the 'phoneinputBirthdayMonth' object.
  //Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayMonth.Keys(Project.Variables.DOB.Item("Month", Math.floor(Math.random() * 100)));
  //Enters Project.Variables.DOB("Day", Math.floor(Math.random() * 100)) in the 'phoneinputBirthdayDay' object.
  //Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayDay.Keys(Project.Variables.DOB.Item("Day", Math.floor(Math.random() * 100)));
  //Enters Project.Variables.DOB("Year", Math.floor(Math.random() * 100)) in the 'phoneinputBirthdayYear' object.
  //Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayYear.Keys(Project.Variables.DOB.Item("Year", Math.floor(Math.random() * 100)));
  //Delays the test execution for the specified time period.
  //Delay(1000);
  //Selects the 'What was the name of your first school teacher?' item of the 'selectSecurityquestion12' combo box.
  //Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion12.ClickItem("What was the name of your first school teacher?");
  //Delays the test execution for the specified time period.
  //Delay(1000);
  //Selects the 'What is the first name of your high school prom date?' item of the 'selectSecurityquestion2' combo box.
  //Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion2.ClickItem("What is the first name of your high school prom date?");
  //Delays the test execution for the specified time period.
  //Delay(1000);
  //Clicks the 'passwordboxSecureanswer1' control.
  //Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer1.Click();
  //Sets the text 'Tesqual21' in the 'passwordboxSecureanswer1' text editor.
  //Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer1.SetText("Tesqual21");
  //Selects the 'What is your favorite song?' item of the 'selectSecurityquestion2' combo box.
  //Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion2.ClickItem("What is your favorite song?");
  //Clicks the 'passwordboxSecureanswer2' control.
  //Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer2.Click();
  //Sets the text 'Tesqual21' in the 'passwordboxSecureanswer2' text editor.
  //Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer2.SetText("Tesqual21");
  //Clicks the 'fieldset2' control.
  //Aliases.browser.pageRegistration.formConfirmregistration.fieldset2.Click();
  //Clicks the 'label' control.
  //Aliases.browser.pageRegistration.formConfirmregistration.label.Click();
  //Clicks the 'labelIAcceptTheGeorgiaLotteryTer' control.
  //Aliases.browser.pageRegistration.formConfirmregistration.labelIAcceptTheGeorgiaLotteryTer.Click();
  //Performs a single click on the specified button.
  //Aliases.browser.pageRegistration.buttonIAccept.ClickButton();
  //Clicks the 'buttonSubmit' button.
  //Aliases.browser.pageRegistration.formConfirmregistration.buttonSubmit.ClickButton();
  //Delays the test execution for the specified time period.
  //Delay(8000);
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.panel6 object equals 'Congratulations!
  //Welcome to the Georgia Lottery Players Club! You may now enter second chance drawings and sign up to receive coupons and exclusive offers by email.'.
  //aqObject.CheckProperty(Aliases.browser.pageRegistration.panel6, "contentText", cmpEqual, "Congratulations!\nWelcome to the Georgia Lottery Players Club! You may now enter second chance drawings and sign up to receive coupons and exclusive offers by email.");
  //Clicks the 'buttonContinue' button.
  //Aliases.browser.pageRegistration.buttonContinue.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  //Aliases.browser.pageSecondChance.Wait();
  //Clicks the 'textnode' control.
  //Aliases.browser.pageSecondChance.linkSecondChanceHtml.textnode.Click();
  //Clicks the 'linkLogout' link.
  //Aliases.browser.pageSecondChance.textnode2.linkLogout.Click();
  //Checks whether the 'outerText' property of the Aliases.browser.pageGeorgiaLottery.linkSignIn object equals 'SIGN IN'.
  //aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkSignIn, "outerText", cmpEqual, "SIGN IN");
  //Checks whether the 'outerText' property of the Aliases.browser.pageGeorgiaLottery.linkRegister object equals 'REGISTER'.
  //aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.linkRegister, "outerText", cmpEqual, "REGISTER");
  //Delays the test execution for the specified time period.
  //Delay(1500);
}
