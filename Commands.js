/**
 * When a use mentions Gerty the comment is considered
 * either a command or query and will be treated as such
 */
function postCommandOrQuery(notification)
{
  var notif = new Notification(notification);
  if(Gerty.didUserMention(notif))
  {
    var comment = notif.addedComment();
    var message = null;

    if (new RegExp("ping", "i").test(comment.text())) {
      message = "pong";
    }
    else message = "Unknown command or query.";
    Gerty.postMentionComment(comment.card(), notif.member(), message);
  }
}
    }
  }
}
