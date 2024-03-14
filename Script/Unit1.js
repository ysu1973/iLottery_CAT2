function Register_L2_Player()
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
  //Create table with First Name & Last Name Entries
  //Clicks the 'textboxFirstName' control.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxFirstName.Click();
  //Sets the text Project.Variables.Reg_data("First_Name", Math.floor(Math.random() * 100)) in the 'textboxFirstName' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxFirstName.SetText(Project.Variables.Reg_data.Item("First_Name", Math.floor(Math.random() * 100)));
  //Clicks the 'textboxLastname' control.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxLastname.Click();
  //Sets the text Project.Variables.Reg_data("Last_Name", Math.floor(Math.random() * 100)) in the 'textboxLastname' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxLastname.SetText(Project.Variables.Reg_data.Item("Last_Name", Math.floor(Math.random() * 100)));
  //Selects the 'Sr.' item of the 'selectSuffix' combo box.
  Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix.ClickItem("Sr.");
  //Checks whether the 'wText' property of the Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix object equals 'Sr.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix, "wText", cmpEqual, "Sr.");
  //Selects the 'Jr.' item of the 'selectSuffix' combo box.
  Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix.ClickItem("Jr.");
  //Checks whether the 'wText' property of the Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix object equals 'Jr.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix, "wText", cmpEqual, "Jr.");
  //Selects the 'I' item of the 'selectSuffix' combo box.
  Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix.ClickItem("I");
  //Checks whether the 'wText' property of the Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix object equals 'I'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix, "wText", cmpEqual, "I");
  //Selects the 'II' item of the 'selectSuffix' combo box.
  Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix.ClickItem("II");
  //Checks whether the 'wText' property of the Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix object equals 'II'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix, "wText", cmpEqual, "II");
  //Selects the 'III' item of the 'selectSuffix' combo box.
  Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix.ClickItem("III");
  //Checks whether the 'wText' property of the Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix object equals 'III'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix, "wText", cmpEqual, "III");
  //Selects the 'IV' item of the 'selectSuffix' combo box.
  Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix.ClickItem("IV");
  //Checks whether the 'wText' property of the Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix object equals 'IV'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.selectSuffix, "wText", cmpEqual, "IV");
  //Clicks the 'emailinputEmail' control.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.Click();
  //Sets the text KeywordTests.Register_L2_Player.Variables.Random_Email("Email_Address", Math.floor(Math.random() * 999)) in the 'emailinputEmail' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.SetText(Project.Variables.Random_Email1.Item("Email_Address", Math.floor(Math.random() * 999)));
  //Clicks the 'emailinputEmail' control.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.Click();
  //Enters '^a' in the 'emailinputEmail' object.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.Keys("^a");
  //Enters '^c' in the 'emailinputEmail' object.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputEmail.Keys("^c");
  //Clicks the 'emailinputConfirmemail' control.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputConfirmemail.Click();
  //Enters '^v' in the 'emailinputConfirmemail' object.
  Aliases.browser.pageRegistration.formConfirmregistration.emailinputConfirmemail.Keys("^v");
  //Clicks the 'passwordboxUserPassword' control.
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxUserPassword.Click();
  //Sets the text Project.Variables.Password1 in the 'passwordboxUserPassword' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxUserPassword.SetText(Project.Variables.Password1);
  //Clicks the 'passwordboxConfirmPassword' control.
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxConfirmPassword.Click();
  //Sets the text Project.Variables.Password1 in the 'passwordboxConfirmPassword' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxConfirmPassword.SetText(Project.Variables.Password1);
  //Clicks the 'phoneinputBirthdayMonth' control.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayMonth.Click();
  //Enters '02' in the 'phoneinputBirthdayMonth' object.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayMonth.Keys("02");
  //Enters '11' in the 'phoneinputBirthdayDay' object.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayDay.Keys("11");
  //Enters '1993' in the 'phoneinputBirthdayYear' object.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputBirthdayYear.Keys("1993");
  //Clicks the 'panelRegistrationstep1' control.
  Aliases.browser.pageRegistration.formConfirmregistration.panelRegistrationstep1.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.textnodePromoCode object equals 'PROMO CODE'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnodePromoCode, "contentText", cmpEqual, "PROMO CODE");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelEnterYourPromoCode.textnodeEnterYourPromoCode object equals 'Enter Your Promo Code:'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelEnterYourPromoCode.textnodeEnterYourPromoCode, "contentText", cmpEqual, "Enter Your Promo Code:");
  //Checks whether the 'checked' property of the Aliases.browser.pageRegistration.formConfirmregistration.textboxPromocode object equals False.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textboxPromocode, "checked", cmpEqual, false);
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.textnodeToRedeemAPromoCodeYouMus object equals 'To redeem a promo code, you must check the box below labeled
  //ENABLE THIS ACCOUNT TO PURCHASE LOTTERY TICKETS ONLINE
  //and complete all fields.
  //You can continue your registration without a promo code.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnodeToRedeemAPromoCodeYouMus, "contentText", cmpEqual, "To redeem a promo code, you must check the box below labeled\nENABLE THIS ACCOUNT TO PURCHASE LOTTERY TICKETS ONLINE\nand complete all fields.\nYou can continue your registration without a promo code.");
  //Clicks the 'labelEnableThisAccountToPurchase2' control.
  Aliases.browser.pageRegistration.formConfirmregistration.labelEnableThisAccountToPurchase2.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.panelContactInformation object equals 'CONTACT INFORMATION'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panelContactInformation, "contentText", cmpEqual, "CONTACT INFORMATION");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelStreetAddressNoPOBoxes object equals 'Street Address (no P.O. Boxes)'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelStreetAddressNoPOBoxes, "contentText", cmpEqual, "Street Address (no P.O. Boxes)");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelSuiteApt object equals 'Suite/Apt #'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSuiteApt, "contentText", cmpEqual, "Suite/Apt #");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelCity object equals 'City'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelCity, "contentText", cmpEqual, "City");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelState object equals 'State'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelState, "contentText", cmpEqual, "State");
  //Checks whether the 'Text' property of the Aliases.browser.pageRegistration.formConfirmregistration.textboxRegistrationPersonalinfoA object equals 'GA'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textboxRegistrationPersonalinfoA, "Text", cmpEqual, "GA");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelZipCode object equals 'Zip Code'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelZipCode, "contentText", cmpEqual, "Zip Code");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelPrimaryPhoneNumber object equals 'Primary Phone Number'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelPrimaryPhoneNumber, "contentText", cmpEqual, "Primary Phone Number");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelMobileNumberOptional object equals 'Mobile Number (optional)'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelMobileNumberOptional, "contentText", cmpEqual, "Mobile Number (optional)");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.labelSameAsPrimary object equals 'Same as primary'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.labelSameAsPrimary, "contentText", cmpEqual, "Same as primary");
  //Clicks the 'textnode' control.
  Aliases.browser.pageRegistration.formConfirmregistration.linkHelp.textnode.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.panelTooltipmodalcontent object equals 'Street Address
  //A physical address within the state of Georgia is required to open a Players Club account with the ability to play online.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.panelTooltipmodalcontent, "contentText", cmpEqual, "Street Address\nA physical address within the state of Georgia is required to open a Players Club account with the ability to play online.");
  //Clicks the 'buttonClose' button.
  Aliases.browser.pageRegistration.buttonClose.ClickButton();
  //Clicks the 'textnode2' control.
  Aliases.browser.pageRegistration.formConfirmregistration.linkHelp2.textnode2.Click();
  //Clicks the 'buttonClose' button.
  //Aliases.browser.pageRegistration.buttonClose.ClickButton();
  //Clicks the 'textboxRegistrationPersonalinfoA2' control.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxRegistrationPersonalinfoA2.Click();
  //Sets the text '540 address entry' in the 'textboxRegistrationPersonalinfoA2' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxRegistrationPersonalinfoA2.SetText("540 address entry");
  //Clicks the 'textboxRegistrationPersonalinfoA3' control.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxRegistrationPersonalinfoA3.Click();
  //Sets the text 'Mableton' in the 'textboxRegistrationPersonalinfoA3' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.textboxRegistrationPersonalinfoA3.SetText("Mableton");
  //Clicks the 'phoneinputRegistrationPersonalin' control.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputRegistrationPersonalin.Click();
  //Enters '30305' in the 'phoneinputRegistrationPersonalin' object.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputRegistrationPersonalin.Keys("30305");
  //Clicks the 'phoneinputPrimaryphonenumberinpu' control.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputPrimaryphonenumberinpu.Click();
  //Enters '4673492468' in the 'phoneinputPrimaryphonenumberinpu' object.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputPrimaryphonenumberinpu.Keys("4673492468");
  //Clicks the 'labelSameAsPrimary' control.
  Aliases.browser.pageRegistration.formConfirmregistration.labelSameAsPrimary.Click();
  //Update Checkpoint to Match New Phone Number Entries
  //Checks whether the 'value' property of the Aliases.browser.pageRegistration.formConfirmregistration.phoneinputMobilenumber object equals '4673492468'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.phoneinputMobilenumber, "value", cmpEqual, "4673492468");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.panelVerificationInformation object equals 'VERIFICATION INFORMATION'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.panelVerificationInformation, "contentText", cmpEqual, "VERIFICATION INFORMATION");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.textnode3 object equals 'To play online and receive prize winnings automatically up to and including $600, you will be provided an online iHOPE
  //®
  //account with an e-wallet that you can fund with your debit card, bank account, and/or PayPal
  //®
  //account. Your iHOPE account will be available immediately for online gameplay.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnode3, "contentText", cmpEqual, "To play online and receive prize winnings automatically up to and including $600, you will be provided an online iHOPE\n®\naccount with an e-wallet that you can fund with your debit card, bank account, and/or PayPal\n®\naccount. Your iHOPE account will be available immediately for online gameplay.");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.textnode4 object equals 'To create your account and e-wallet, we must verify your identity.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.textnode4, "contentText", cmpEqual, "To create your account and e-wallet, we must verify your identity.");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.formConfirmregistration.label2 object equals 'Last 4 Digits of Social Security Number'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.label2, "contentText", cmpEqual, "Last 4 Digits of Social Security Number");
  //Clicks the 'textnode5' control.
  Aliases.browser.pageRegistration.formConfirmregistration.linkHelp3.textnode5.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.panelTooltipmodalcontent object equals 'Social Security
  //The last 4 digits of your Social Security number are required to verify your identity and that you are at least 18 years of age, as required by law.'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.panelTooltipmodalcontent, "contentText", cmpEqual, "Social Security\nThe last 4 digits of your Social Security number are required to verify your identity and that you are at least 18 years of age, as required by law.");
  //Clicks the 'buttonClose' button.
  Aliases.browser.pageRegistration.buttonClose.ClickButton();
  //Clicks the 'phoneinputRegistrationNonpublicp' control.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputRegistrationNonpublicp.Click();
  //Enters Project.Variables.SSN("SSN", Math.floor(Math.random() * 1000)) in the 'phoneinputRegistrationNonpublicp' object.
  Aliases.browser.pageRegistration.formConfirmregistration.phoneinputRegistrationNonpublicp.Keys(Project.Variables.SSN.Item("SSN", Math.floor(Math.random() * 1000)));
  //Selects the 'What is your favorite song?' item of the 'selectSecurityquestion1' combo box.
  Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion1.ClickItem("What is your favorite song?");
  //Clicks the 'passwordboxSecureanswer1' control.
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer1.Click();
  //Sets the text Project.Variables.Password1 in the 'passwordboxSecureanswer1' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer1.SetText(Project.Variables.Password1);
  //Selects the 'What is the name of the street you lived on in third grade?' item of the 'selectSecurityquestion2' combo box.
  Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion2.ClickItem("What is the name of the street you lived on in third grade?");
  //Checks whether the 'wText' property of the Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion1 object equals 'What is your favorite song?'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion1, "wText", cmpEqual, "What is your favorite song?");
  //Checks whether the 'wText' property of the Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion2 object equals 'What is the name of the street you lived on in third grade?'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.formConfirmregistration.selectSecurityquestion2, "wText", cmpEqual, "What is the name of the street you lived on in third grade?");
  //Clicks the 'passwordboxSecureanswer2' control.
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer2.Click();
  //Sets the text Project.Variables.Password1 in the 'passwordboxSecureanswer2' text editor.
  Aliases.browser.pageRegistration.formConfirmregistration.passwordboxSecureanswer2.SetText(Project.Variables.Password1);
  //Clicks the 'label3' control.
  Aliases.browser.pageRegistration.formConfirmregistration.label3.Click();
  //Clicks the 'label4' control.
  Aliases.browser.pageRegistration.formConfirmregistration.label4.Click();
  //Delays the test execution for the specified time period.
  Delay(500);
  //Clicks the 'label5' control.
  Aliases.browser.pageRegistration.formConfirmregistration.label5.Click();
  //Delays the test execution for the specified time period.
  Delay(500);
  //Clicks the 'linkLoadtandc' link.
  Aliases.browser.pageRegistration.formConfirmregistration.labelIAcceptTheGeorgiaLotteryTer.linkLoadtandc.Click();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Clicks the 'buttonIAccept' button.
  Aliases.browser.pageRegistration.buttonIAccept.ClickButton();
  //Clicks the 'buttonSubmit' button.
  Aliases.browser.pageRegistration.formConfirmregistration.buttonSubmit.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(3000);
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.panelCongratulations object equals 'Congratulations!'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.panelCongratulations, "contentText", cmpEqual, "Congratulations!");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.textnode6 object equals 'Welcome to your Georgia Lottery Players Club iHOPE® account!'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.textnode6, "contentText", cmpEqual, "Welcome to your Georgia Lottery Players Club iHOPE® account!");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.textnode7 object equals 'Ready to play lottery games online? Just select ADD FUNDS below to register your debit card, bank account, or PayPal® account as a funding source. Then add funds to your iHOPE account and start playing!'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.textnode7, "contentText", cmpEqual, "Ready to play lottery games online? Just select ADD FUNDS below to register your debit card, bank account, or PayPal® account as a funding source. Then add funds to your iHOPE account and start playing!");
  //Checks whether the 'contentText' property of the Aliases.browser.pageRegistration.buttonContinue object equals 'Add Funds'.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.buttonContinue, "contentText", cmpEqual, "Add Funds");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageRegistration.buttonContinue object equals True.
  aqObject.CheckProperty(Aliases.browser.pageRegistration.buttonContinue, "Enabled", cmpEqual, true);
  //Clicks the 'buttonClosebtnregsuccess' button.
  Aliases.browser.pageRegistration.buttonClosebtnregsuccess.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Clicks the 'textnode5' control.
  Aliases.browser.pageGeorgiaLottery.linkHomeHtml.textnode5.Click();
  //Clicks the 'linkLogout' link.
  Aliases.browser.pageGeorgiaLottery.textnode6.linkLogout.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageGeorgiaLottery.textnodeYouVeSignedOutOfYourPlay object equals 'You've signed out of your Players Club account.'.
  aqObject.CheckProperty(Aliases.browser.pageGeorgiaLottery.textnodeYouVeSignedOutOfYourPlay, "contentText", cmpEqual, "You've signed out of your Players Club account.");
}

function Test3()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/myaccount/contact-information.html");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnode5' control.
  Aliases.browser.pageContactInformation.link2.textnode5.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageContactInformation.textnodeMyAccount.linkLogout2 object equals 'Logout'.
  aqObject.CheckProperty(Aliases.browser.pageContactInformation.textnodeMyAccount.linkLogout2, "contentText", cmpEqual, "Logout");
  //Clicks the 'linkLogout2' link.
  Aliases.browser.pageContactInformation.textnodeMyAccount.linkLogout2.Click();
}