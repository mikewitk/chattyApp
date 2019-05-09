import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  	render () {
		  
		const MessageItems = this.props.messages.map(message => {
			const username = message.username ? message.username.name : null;
			return ( <Message messageContent={message.content} 
						messageUser={username} 
						key={message.id}
						messageType = {message.type} /> 
					)
		});

		return (
			<main className="messages">
				{MessageItems}
			</main>
		)
	}
}

export default MessageList;

{/* <main className="messages">
				{MessageList}
				<div className="message system">
					Mike changed their name to MikeWitk.
				</div>
			</main> */}