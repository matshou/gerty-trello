function BoardUtils() {}

/**
 * Check if the specified user was mentioned in the given text.
 */
BoardUtils.isUserMentioned = function(text, target)
{
  var regex = "\\@" + target + "\\s"
  var matches = new RegExp(regex).test(text.toString());

  Logger.debug("Checked if user " + '@' + target + " was mentioned "
  + "in comment \"" + text + "\" (result: " + matches + ')');

  return matches;
}
