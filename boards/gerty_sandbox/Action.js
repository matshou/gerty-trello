/**
 * When Gerty is added to a card.
 */
function addedGertyMemberToCard(notification)
{
  var notif = new Notification(notification);
  try {
    var member = notif.addedMemberToCard();
    if (member.name() == Gerty.username)
      Gerty.postComment(notif, notif.member(), "I will watch this card.")
  }
  catch (e) {
    Notification.expectException(InvalidActionException, e);
  }
}
/**
 * When an attachment has been added to a card
 * of which Gerty is a member of.
 */
function addedBoardAttachmentToCard(notification)
{
  var notif = new Notification(notification);
  var attachment = notif.attachedBoard();

  Gerty.postComment(attachment, notif.member(), "You have added " +
    attachment.text() + " board as an attachment to this card");
}
