import React, {Component} from 'react';

class Message extends Component {
	render () {

			if ( this.props.messageType === "postMessage") {
				return ( <div className="message">
									<span className='message-username'>{ this.props.messageUser }</span>
									<span className='message-content'>{ this.props.messageContent }</span>
								</div> )
			} else {
				return ( <div className="message system">
									{ this.props.messageContent }
								</div> ) }
	}
}

export default Message;
