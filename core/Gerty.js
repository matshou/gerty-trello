
function Gerty() {}

Gerty.username = "gertyb";

/**
 * Returns true if Gery has been mentioned in the given notification.
 */
Gerty.isMentioned = function(notif)
{
  return Utils.isUserMentioned(Gerty.username);
}

/**
 * Returns true if Gerty is added to the given card.
 */
Gerty.isAddedToCard = function(card)
{
  var is_added = false;
  card.members().each(function(member)
  {
    if (member.name() == Gerty.username) {
      is_added = true; return false;
    }
  });
  Logger.debug("Checking if Gerty is added to card \"" + card.name() +
    '\"' + " (result: " + is_added + ')');

  return is_added;
}

/**
 * Post a comment on the given card with a mention to the specified member.
 * E.g: @some_user Hello!
 */
Gerty.postComment = function(element, member, comment)
{
  element.card().postComment('@' + member.name() + ' ' + comment);
}
