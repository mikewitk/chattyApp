import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: { name: "Bob" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      usersOnline: 0
    }
    this.connection = new WebSocket( 'ws://localhost:3001/' );
  }

  //  When the user changes its name, a notification will be sent to every user in the app
  addNotification = ( messageText ) => {
    this.connection.send( JSON.stringify (
      { type: "postNotification",
      content: messageText }
    ))
  }

  // When the user sends a message, it will be rendered to every user in the app
  addMessage = ( messageText ) => {
    this.connection.send( JSON.stringify ( 
      { username: this.state.currentUser, 
        content: messageText,
        type: "postMessage"
      } ) 
    );
  }
  
  // Function that updates the user name
  nameChange = ( newName ) => {
    this.setState( { currentUser: { name: newName } } );
  }

  componentDidMount() {
    console.log( "componentDidMount <App />" );


    this.connection.onopen = ( event ) => {
      console.log( "Connected to server" )
    };

    // Event listener to decide whether to set state of messages/notifications or update the number of users
    this.connection.onmessage = ( event ) => {
      let dataObj = JSON.parse( event.data )
        if ( dataObj.type === "usersOnline" ) {
          this.setState( { usersOnline: dataObj.number } )
        } else {
          this.setState( { messages: this.state.messages.concat( JSON.parse( event.data ) ) } ) 
        }
  } }

  render() {
    return (
      <div>
        <NavBar usersOnline={ this.state.usersOnline } />
        <MessageList messages={ this.state.messages } />
        <ChatBar currentUser={ this.state.currentUser.name } addNotification={ this.addNotification } addMessage={ this.addMessage } nameChange={ this.nameChange } />
      </div>
    );
  }
}

export default App;
