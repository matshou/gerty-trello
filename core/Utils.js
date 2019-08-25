function Utils() {}

Utils.getBoardNameFromURL = function(url)
{
  return url.match("(?:[^\/](?!\/))+$");
}

Utils.getSheetById = function(id)
{
  var sheets = SpreadsheetApp.getActive().getSheets();
  
  for (var i = 0; i < sheets.length; ++i) {
    if (sheets[i].getSheetId() == id)
      return sheets[i];
  }
  return null;
}

Utils.getSheetByName = function(name)
{
  var sheets = SpreadsheetApp.getActive().getSheets();
  
  for (var i = 0; i < sheets.length; ++i) {
    if (sheets[i].getName() == name)
      return sheets[i];
  }
  return null;
}