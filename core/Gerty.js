
function Gerty() {}

Gerty.username = "gertyb";

/**
 * Check if Gerty was mentioned in the given notification.
 */
Gerty.isMentioned = function(notif)
{
  var is_mentioned = false;
  notif.mentionedMembers().each(function(member)
  {
    if (Gerty.is(member)) {
      is_mentioned = true; return false;
    }
  }); return is_mentioned;
};

/**
 * Returns true if the member resolved from the
 * given notification mentioned Gerty
 */
Gerty.didUserMention = function(notif)
{
  return notif.member().notTrellinator() && Gerty.isMentioned(notif);
}


/**
 * Returns true if the given member is Gerty
 */
Gerty.is = function(member)
{
  return member.name() == "Gerty6000";
}