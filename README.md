# j5-exploring
Exploring node.js with johnny-five and Arduino

Some testing with the enviroment created by./for node_ardx showed that digital
sensors were not calling the data event handler.  The johnny-five version
installed with that was 0.7.56, based on a dependency specification of "~0.7.3".
The latest version is 0.8.58.  Start by seeing if the lastest version has the
symptoms.

Confirmed that the sample digital sensor data event handler is not getting called.
