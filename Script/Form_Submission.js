When("I do not interact with any field", function (){
  Browsers.Item(btChrome).Navigate("https://gasc2playdigital.dev.igt.com/en-us/registration.html");
});
 
When("I submit the form", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let button = browser.pageRegistration.formConfirmregistration.buttonSubmit;
  aqObject.CheckProperty(button, "ObjectLabel", cmpEqual, "SUBMIT");
  button.ClickButton();
});

Then("I see error messages indicating to the user to select or input necessary information needed for each required field", function (){
  let vlabel = Aliases.browser.pageRegistration.formConfirmregistration;
  aqObject.CheckProperty(vlabel.labelFirstnameError, "contentText", cmpEqual, "Please enter your first name.");
  aqObject.CheckProperty(Aliases.browser.pageRegistration2.formConfirmregistration.labelLastnameError, "contentText", cmpEqual, "Please enter your last name.");
  aqObject.CheckProperty(vlabel.labelEmailError, "contentText", cmpEqual, "Please enter a valid email address.");
  aqObject.CheckProperty(vlabel.labelConfirmemailError, "contentText", cmpEqual, "Please enter your email address again.");
  aqObject.CheckProperty(vlabel.labelUserPasswordError, "contentText", cmpEqual, "Please choose a password.");
  aqObject.CheckProperty(vlabel.labelConfirmPasswordError, "contentText", cmpEqual, "Please enter your password again.");
  aqObject.CheckProperty(vlabel.labelDobrequiredError, "contentText", cmpEqual, "Please enter your date of birth. You must be 18 years of age or older to play lottery games.");
  aqObject.CheckProperty(vlabel.labelSecurityquestion1Error, "contentText", cmpEqual, "Please select security question to be used if you forget your password.");
  aqObject.CheckProperty(vlabel.labelSecureanswer1Error, "contentText", cmpEqual, "Please enter the answer to your chosen security question.");
  aqObject.CheckProperty(vlabel.labelSecurityquestion2Error, "contentText", cmpEqual, "Please select security question to be used if you forget your password.");
  aqObject.CheckProperty(vlabel.labelSecureanswer2Error, "contentText", cmpEqual, "Please enter the answer to your chosen security question.");
  aqObject.CheckProperty(vlabel.labelToRegisterYouMustAcceptThe, "contentText", cmpEqual, "To register, you must accept the Terms of Use.");
})
  
