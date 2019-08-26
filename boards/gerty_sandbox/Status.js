/**
 * When a user mentions Gerty with a ping query.
 * This is used to test bot responsiveness.
 */
function ping(notification)
{
  try {
      var notif = new Notification(notification);
      var comment = notif.addedComment();
      var mentioned = BoardUtils.isUserMentioned(comment.text(), Gerty.username);

      if(mentioned && new RegExp("ping", "i").test(comment.text()))
      {
        var name = notif.member().name();
        Logger.info("Responding to ping query from user " + name);
        comment.card().postComment("pong");
      }
  }
  catch (e) {
    Notification.expectException(InvalidActionException, e);
  }
}
