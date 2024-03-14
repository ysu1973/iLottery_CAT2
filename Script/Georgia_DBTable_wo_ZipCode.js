function Null_ZipCode_Values()

{
  // Get the sheet of the Excel file.
  var excelFile = Excel.Open("Z:\\Data\\fwhitley\\Documents\\TestComplete 15 Projects\\iLottery_Portal\\GeorgiaDataList.xlsx");
  var excelSheet = excelFile.SheetByTitle("County");
  
  // Read data from the Excel file.
   var valueA = excelSheet.Cell("A",Math.floor(Math.random()*159)).Value;
   
   //Clicks the 'textboxGeorgiaCounty' control.
    Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxGeorgiaCounty.Click();
   
   //Enters var valueA into 'textboxGeorgiaCounty' control.
  Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxGeorgiaCounty.SetText(valueA);

  // Get the sheet of the Excel file.
  var excelFile = Excel.Open("Z:\\Data\\fwhitley\\Documents\\TestComplete 15 Projects\\iLottery_Portal\\GeorgiaDataList.xlsx");
  var excelSheet = excelFile.SheetByTitle("City");
  
  //Read data from the Excel file.
  var valueB = excelSheet.Cell("A", Math.floor(Math.random()* 724)).Value;
  
  //Clicks the 'textboxCity' control.
  Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxCity.Click();
  
  //Enters var valueB into 'textboxCity' control.
  Aliases.browser.pageBecomeARetailer.formRetailercontactform.textboxCity.SetText(valueB);

    // Get the sheet of the Excel file.
  var excelFile = Excel.Open("Z:\\Data\\fwhitley\\Documents\\TestComplete 15 Projects\\iLottery_Portal\\GeorgiaDataList.xlsx");
  var excelSheet = excelFile.SheetByTitle("Zip Code");
  
   // Read data from the Excel file.
   var valueC = excelSheet.Cell("A",Math.floor(Math.random()*724)).Value;  
}