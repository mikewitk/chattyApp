import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';



class App extends Component {
  constructor() {
    super();
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
    this.connection = new WebSocket('ws://localhost:3001/')
  }


  


  addMessage(messageText, nameOfUser) {
    const newMessages = {
      username: nameOfUser,
      content: messageText
    };
    this.connection.send(JSON.stringify(newMessages));
    console.log("Message sent")
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.connection.onopen = function (event) {
      console.log("Connected to server")
    };

    this.connection.onmessage = (event) => {
      console.log("Message from server: ",JSON.parse(event.data));
      const parsedData = JSON.parse(event.data);
      const oldMessages = this.state.messages;
      const newObj = {};
      newObj.content = parsedData.content;
      newObj.username = parsedData.username;
      newObj.id = parsedData.id;
      console.log("This is newObj: ", newObj);
      const newMessages = [...oldMessages, newObj]
      this.setState({ messages: newMessages })
      // console.log("I received the message");
    };

    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser.name} addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default App;
