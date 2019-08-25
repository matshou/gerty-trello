/**
 * Baseline test to see if bot is online.
 * Also a nice easter egg.
 */
function askStory(notificaion)
{
  var notif = new Notification(notificaion);
  if(Muthur.didUserMention(notif))
  {
    var comment = notif.addedComment();
    if (new RegExp("what's the story", "i").test(comment.text())) {
      comment.card().postComment("@" + notif.member().name() + " All systems nominal.");
    }
    else if (new RegExp("Status report", "i").test(comment.text())) {
      comment.card().postComment("@" + notif.member().name() + " Seven bells and all's well.");
    }
  }
}
