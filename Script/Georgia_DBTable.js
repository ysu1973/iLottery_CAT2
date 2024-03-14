function Filled_Entry_Values()

{
  // Get the sheet of the Excel file.
  var excelFile = Excel.Open("W:\\Sample Data\\GeorgiaDataList.xlsx");
  var excelSheet = excelFile.SheetByTitle("County");
  
  // Read data from the Excel file.
   var valueA = excelSheet.Cell("A",Math.floor(Math.random()*158)).Value;
   
   //Clicks the 'textboxGeorgiaCounty' control.
    Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxGeorgiaCounty.Click();
   
   //Enters var valueA into 'textboxGeorgiaCounty' control.
  Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxGeorgiaCounty.SetText(valueA);

  // Get the sheet of the Excel file.
  var excelFile = Excel.Open("W:\\Sample Data\\GeorgiaDataList.xlsx");
  var excelSheet = excelFile.SheetByTitle("City");
  
  //Read data from the Excel file.
  var valueB = excelSheet.Cell("A", Math.floor(Math.random()* 724)).Value;
  
  //Clicks the 'textboxCity' control.
  Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxCity.Click();
  
  //Enters var valueB into 'textboxCity' control.
  Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxCity.SetText(valueB);

    // Get the sheet of the Excel file.
  var excelFile = Excel.Open("W:\\Sample Data\\GeorgiaDataList.xlsx");
  var excelSheet = excelFile.SheetByTitle("Zip Code");
  
   // Read data from the Excel file.
   var valueC = excelSheet.Cell("A",Math.floor(Math.random()*724)).Value;
   
    //Clicks the 'textboxZipCode' control.
  Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxZipCode.Click();
  
   //Enters var valueB into 'textboxZipCode' control.
  Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxZipCode.SetText(valueC);
}