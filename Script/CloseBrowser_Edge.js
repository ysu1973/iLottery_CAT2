function CloseBrowser()
{
  //Launches the specified browser and opens the specified URL in it.
  //Browsers.Item(btEdge).Run("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Closes the 'wndChrome_WidgetWin_1' window.
  //Aliases.browser.wndChrome_WidgetWin_1.Close();
  //Opens the specified URL in a running instance of the specified browser.
  //Browsers.Item(btEdge).Navigate("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  Aliases.browser.BrowserWindow.Maximize();
  Aliases.browser.BrowserWindow.Close();
}