var reusableFunctions = require("Reusable_Functions")

function winnersGalleryPage(){
  Browsers.Item(btChrome).Navigate("https://gasc1playdigital.dev.igt.com/en-us/home.html");
  Aliases.browser.pageGeorgiaLottery.Wait();
  reusableFunctions.navToWinnersGallery;
  
  //Browsers.Item(btChrome).Navigate("https://gasc1playdigital.dev.igt.com/en-us/home.html");
  //let browser = Aliases.browser;
  //browser.BrowserWindow2.Maximize();
  //let link = browser.pageGeorgiaLottery.nav.textnodeGamesDrawGamesCash3BuyNo;
  //link.textnodeWinners.linkWinners.Click();
  //let link2 = link.textnodeDiggiGames.linkDiggiGames;
  //aqObject.CheckProperty(link2, "href", cmpEqual, "https://gasc1playdigital.dev.igt.com/en-us/games/diggi-games.html");
  //link2.Click();
  //browser.ToUrl("https://gasc1playdigital.dev.igt.com/en-us/winners/winners-gallery.html");
}

function Test4()
{
  //Compares the structure and contents of the web page with the WebComparison1 Stores item.
  WebTesting.WebComparison1.Check();
}