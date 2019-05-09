import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
    this.connection = new WebSocket('ws://localhost:3001/');
  }

  addNotification = (messageText) => {
    this.connection.send( JSON.stringify(
      {type: "postNotification",
      content: messageText}
    ))
  }

  addMessage = (messageText) => {
    this.connection.send( JSON.stringify( 
      { username: this.state.currentUser, 
        content: messageText,
        type: "postMessage"
      } ) 
    );
  }

  

  nameChange = (newName) => {
    this.setState({ currentUser: { name: newName } });
  }

  componentDidMount() {
    console.log("componentDidMount <App />");


    this.connection.onopen = ( event ) => {
      console.log("Connected to server")
    };

    this.connection.onmessage = ( event ) => {
      this.setState( { messages: this.state.messages.concat( JSON.parse( event.data ) ) } )
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={ this.state.messages } />
        <ChatBar currentUser={ this.state.currentUser.name } addNotification={this.addNotification} addMessage={ this.addMessage } nameChange={ this.nameChange }/>
      </div>
    );
  }
}

export default App;
