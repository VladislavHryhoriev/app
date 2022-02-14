import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import Message from './Message';
import Messages from './Messages';

const MessagesContainer = (props) => {
	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}

	return (
		<Messages
			updateNewMessageBody={onNewMessageChange}
			sendMessage={onSendMessageClick}
			dialogsPage={state} />
	);
};

export default MessagesContainer;