function CloseBrowser()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Closes the 'wndChrome_WidgetWin_1' window.
  Aliases.browser.wndChrome_WidgetWin_1.Close();
}