function ClearHistory()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://gasc2playdigital.dev.igt.com/en-us/home.html");
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(1852, 63);
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(1856, 58);
  //Clicks the 'wndChrome_WidgetWin_1' object.
  Aliases.browser.wndChrome_WidgetWin_1.Click(110, 204);
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(599, 28);
}