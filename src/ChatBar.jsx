import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        const newInput = e.currentTarget.value;
        switch (e.currentTarget.name) {
          case 'messageBar':
            this.props.addMessage(newInput);
            e.currentTarget.value = "";
            break;
          case 'usernameField':
            const info = `${this.props.currentUser} changed their name to ${newInput}`
            this.props.nameChange(newInput);
            this.props.addNotification(info)
            break;
          default:
            console.warn('I don\'t know wha to do with this', newInput, e.currentTarget.name);
            break;
        }
      }
    }

    return (
      <footer className="chatbar">
        <input 
          className="chatbar-username" 
          defaultValue={this.props.currentUser}
          name="usernameField"
          onKeyDown={handleKeyDown}
          placeholder="Your Name (Optional)" />
        <input 
          className="chatbar-message" 
          name="messageBar" 
          onKeyDown={handleKeyDown}  
          placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}


export default ChatBar;