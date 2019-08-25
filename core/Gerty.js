function Gerty() {}

/**
 * Check if Mother was mentioned in the given notification.
 */
Gerty.isMentioned = function(notif)
{
  if (notif.addedComment().card().comments().first().member().notTrellinator())
  {
    var is_mentioned = false;
    notif.mentionedMembers().each(function(member)
    {
      if (Gerty.is(member))
        is_mentioned = true;
    });
    return is_mentioned;
  }
  else return false;
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