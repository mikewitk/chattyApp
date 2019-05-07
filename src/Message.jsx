import React, {Component} from 'react';

class Message extends Component {
  render () {
    return (
      <main className="messages">
        <div className="message">
          <span className="message-username">Mike</span>
          <span className="message-content">I won't be impressed with technology until I can download food.</span>
        </div>
        <div className="message system">
          Mike changed their name to MikeWitk.
        </div>
        <div className="message">
          <span className="message-username">UserNoName</span>
          <span className="message-content">Wher can I get some good food around here?.</span>
        </div>
      </main>
    )
  }
}

export default Message;
