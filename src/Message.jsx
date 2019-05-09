import React, {Component} from 'react';

class Message extends Component {
	render () {
    const content = this.props.messageContent;
		const username = this.props.messageUser;
		const type = this.props.messageType;

			if ( type === "postMessage") {
				return ( <div className="message">
									<span className='message-username'>{username}</span>
									<span className='message-content'>{content}</span>
								</div> )
			} else {
				return ( <div className="notification">
									<span className="notification-content">{content}</span>
								</div> ) }
	}
}

export default Message;
