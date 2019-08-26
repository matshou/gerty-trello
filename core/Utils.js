function Utils() {}

/**
 * Check if the specified user was mentioned in the given text.
 */
Utils.isUserMentioned = function(text, target)
{
  var regex = "\\@" + target + "\\s"
  var matches = new RegExp(regex).test(text.toString());

  Trellinator.log("DEBUG: Checked if user " + '@' + target +
    " was mentioned in comment \"" + text + "\" (result: " + matches + ")");

  return matches;
}

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