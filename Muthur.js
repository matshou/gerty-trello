function Muthur() {}

/**
 * Check if Mother was mentioned in the given notification.
 */
Muthur.isMentioned = function(notif)
{
  if (notif.addedComment().card().comments().first().member().notTrellinator())
  {
    var is_mentioned = false;
    notif.mentionedMembers().each(function(member)
    {
      if (Muthur.is(member))
        is_mentioned = true;
    });
    return is_mentioned;
  }
  else return false;
};

/**
 * Returns true if the member resolved from the
 * given notification mentioned Muthur
 */
Muthur.didUserMention = function(notif)
{
  return notif.member().notTrellinator() && Muthur.isMentioned(notif);
}


/**
 * Returns true if the given member is Muthur
 */
Muthur.is = function(member)
{
  return member.name() == "muthur6000";
}