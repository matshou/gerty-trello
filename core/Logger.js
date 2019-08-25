function Logger() {}

Logger.print = function(log)
{
  board = new Trellinator().board("Nostromo");
  board.card(new RegExp("Terminal")).postComment(log);
}
