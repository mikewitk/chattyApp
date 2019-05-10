
  // server.js

  const express = require('express');
  const SocketServer = require('ws').Server;
  
  const uuidv4 = require('uuid/v4');

  const WebSocket = require('ws');



  // Set the port to 3001
  const PORT = 3001;
  
  // Create a new express server
  const server = express()
     // Make the express server serve static assets (html, javascript, css) from the /public folder
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
  
  // Create the WebSockets server
  const wss = new SocketServer({ server });

  // Set up a callback that will run when a client connects to the server
  // When a client connects they are assigned a socket, represented by
  // the ws parameter in the callback.
  wss.on('connection', (ws) => {
    

    console.log("We have: ",wss.clients.size," users connected");
    wss.broadcast = function broadcast( data ) {
      wss.clients.forEach( function each( client ) {
        if ( client.readyState === WebSocket.OPEN ) {
          client.send( JSON.stringify( data ) );
        }
      })
    }

    console.log('Client connected');
    const number = wss.clients.size;
    const usersObj = {}
    usersObj.type = "usersOnline"
    usersObj.number = number
    // console.log("This is the usersObj: ", usersObj)
    // console.log("This is the strObj: ", strObj)
    wss.broadcast( usersObj );

    ws.on('message', function incoming( data ) {
      newData = JSON.parse( data )
        newData["id"] = uuidv4();
        wss.broadcast( newData );
    }) 

    // Set up a callback for when a client closes the socket. This usually means they closed their browser.
    ws.on('close', () => {
      console.log('Client disconnected'); 
      const usersObj = {};
      usersObj.type = "usersOnline"
      usersObj.number = wss.clients.size
      wss.broadcast( usersObj )
      console.log("We have: ",wss.clients.size," users connected"); } );
  });
