const murphy = require("murphytest");
//ADJUST THE PATH TO FIND THE FILES RELATIVE TO YOUR CURRENT DIRECTORY
eval(murphy.load(__dirname,"../../../apps/trellinator/ExecutionQueue.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator/Trellinator.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator/Trigger.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator/TrigTest.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Board.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Card.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Attachment.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/CheckItem.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Checklist.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Comment.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/CustomField.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Exceptions.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/HttpApi.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/IterableCollection.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Label.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/List.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Member.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Notification.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/Team.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/TestConnector.js"));
eval(murphy.load(__dirname,"../../../apps/trellinator-libs/TrelloApi.js"));
eval(murphy.load(__dirname,"../../../core/Gerty.js"));
eval(murphy.load(__dirname,"../../../core/Utils.js"));
eval(murphy.load(__dirname,"../../../core/Logger.js"));
//INCLUDE ANY OTHER REQUIRED FILES HERE
eval(murphy.load(__dirname,"../Action.js"));
eval(murphy.load(__dirname,"../Status.js"));
eval(murphy.load(__dirname,"notifications/default.run.js/added_attachment.js"));
eval(murphy.load(__dirname,"notifications/default.run.js/added_to_card.js"));
eval(murphy.load(__dirname,"notifications/default.run.js/mentioned.js"));
eval(murphy.load(__dirname,"notifications/default.run.js/pinged.js"));
//SET SOME MOCKING VARIABLES
TestConnector.test_base_dir = __dirname;
TestConnector.use_sequencer = true;//where multiple URLs need to be cached depending on when they are called
                                   //this is configured by default but not turned on by default
                                   //because otherwise all previously existing tests would need to
                                   //be refixtured
//the override_token needs to be set so that when others run your tests
//the new Trellinator() method doesn't fetch their member
//object instead of using your cached api fixtures
//DO NOT INCLUDE YOUR API KEY HERE -- TOKEN ONLY!!!
Trellinator.override_token = "YOUR TRELLO DEV TOKEN";
Trellinator.fake_now = new Date("2018-02-28T05:00:00.000Z");
/*OPTIONAL
TestConnector.prefix = "actual";
ExecutionQueue.fake_push = function(name,params,signature,time)
{

}
*/

//TestConnector.nocache = true;//use this to test performance or do setup/teardown
//ADD YOUR TEST FUNCTIONS HERE
ping(mention_notif);
ping(ping_notif);

addedGertyMemberToCard(add_to_card_notif);
addedBoardAttachmentToCard(add_attachment_notif);
