import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import NavBar from './NavBar.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Message />
        <ChatBar />
      </div>
    );
  }
}
export default App;
