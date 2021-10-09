# BroadCast API
 
Applying broadcast api in a project. My objective is to understand how I can pass information between browser tabs in the same project.

I created two projects, they have the same layout and functionalities but one was code in vanilla javascript and other in Angular.

The project was separated into three parts. The main page has a form to write and choose for who sends the message.

The tab1 and tab2 files are able to receive the message sent by the main file and display on the page. Here tab1 file has an additional functionality, send message to tab2 if requested.

When the pages are open, a broadcast connection is started, in this moment they are able to receive messages, besides that theses files has a button to close the connection and not receive more messages


## Broadcast API on Angular

As Angular has its own lifecycle and the broadcast api runs off side it, I need to use the NgZone to notify Angular that a new message has been received.

## References
[Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API#broadcast_channel_interface)