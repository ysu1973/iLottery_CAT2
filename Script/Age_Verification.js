let browser;
Given("I am on the registration page on {string}", function (browserType){
  if (browserType === "Chrome") {
    browser = Browsers.Item(btChrome)
  } else if (browserType === "Edge") {
    browser = Browsers.Item(btEdge)
  }
  
  if (browser) {
    let page = browser.Run("https://gasc2playdigital.dev.igt.com/en-us/registration.html");
    // Delay for 5 seconds to give the page time to load
    aqUtils.Delay(5000);
    Log.Message("Browser " + browserType + " has started successfully.");
  } else {
    Log.Error("Browser not defined or supported")
  }
  
});

When("I input a birthdate that would make the user less than 18 years old", function (){
  let browser = Aliases.browser;
  let vlabel = browser.pageRegistration.formConfirmregistration;
  // Use RefreshMappingInfo
  vlabel.RefreshMappingInfo();
  
  aqObject.CheckProperty(vlabel.labelDateOfBirth, "contentText", cmpEqual, "Date of Birth");

  // Refresh the phoneInput reference
  let phoneInput = vlabel.phoneinputBirthdayMonth;
  
  // Use RefreshMappingInfo
  phoneInput.RefreshMappingInfo();
  
  //aqObject.CheckProperty(phoneInput, "ObjectLabel", cmpEqual, "");
  phoneInput.Click();
  phoneInput.SetText("04");
  
  // Refresh the phoneInput reference
  phoneInput = vlabel.phoneinputBirthdayDay;
  
  // Use RefreshMappingInfo
  phoneInput.RefreshMappingInfo();
  
  //aqObject.CheckProperty(phoneInput, "ObjectLabel", cmpEqual, "");
  phoneInput.SetText("22");
  
  // Refresh the phoneInput reference
  phoneInput = vlabel.phoneinputBirthdayYear;
  
  // Use RefreshMappingInfo
  phoneInput.RefreshMappingInfo();
  
  aqObject.CheckProperty(phoneInput, "ObjectLabel", cmpEqual, "");
  phoneInput.SetText("2013");
});

Then("I see an error message saying 'Please check your date of birth. You must be 18 years of age or older to play lottery games", function (){
  let errorMessage = Aliases.browser.pageRegistration.formConfirmregistration.labelDobrequiredError;
  
  // Use RefreshMappingInfo
  errorMessage.RefreshMappingInfo();
  
  aqObject.CheckProperty(errorMessage, "contentText", cmpEqual, "Please check your date of birth. You must be 18 years of age or older to play lottery games.");

});