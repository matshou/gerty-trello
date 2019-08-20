function Muthur() {};

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
      if (member.name() == "muthur6000")
        is_mentioned = true;
    });
    return is_mentioned;
  }
  else return false;
};
