import React, {Component} from 'react';

class ChatBar extends Component {

  render() {

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        const messageInput = e.target.value;
        const nameOfUser = this.props.currentUser
        console.log('This is the message Input: ', messageInput);
        console.log('This is the current User: ', this.props.currentUser);
 
        this.props.addMessage(messageInput, nameOfUser);

        e.target.value = "";

      }

    }

    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser} placeholder="Your Name (Optional)" />
        <input name='messageBar' className="chatbar-message" onKeyDown={handleKeyDown}  placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}


export default ChatBar;