function Logger() {}

Logger.info = function(log)
{
  Trellinator.log("INFO: " + log);
}

Logger.debug = function(log)
{
  Trellinator.log("DEBUG: " + log);
}
