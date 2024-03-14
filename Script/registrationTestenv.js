function beforeEachScenario (){
  Browsers.Item(btChrome).Navigate("https://gasc1playdigital.dev.igt.com/en-us/registration.html")
}

When("I input an address that does not exist", function (){
  throw new NotImplementedError();
});

Given("I am on the registration page", function (){
  throw new NotImplementedError();
});

When("I input a birthdate that would make the user less than {arg} years old", function (param1){
  throw new NotImplementedError();
});

Then("I see an error message syaing they much be at least {arg} years old", function (param1){
  throw new NotImplementedError();
});
