import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import Message from './Message';
import s from './Messages.module.css'

const Messages = (props) => {
	let state = props.store.getState();

	let messageElements = props.messages.map(m => {
		return (
			<Message /* key= */ message={m.message} author={m.isAuthor} />
		);
	});

	let newMessageBody = state.dialogsPage.newMessageBody;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}

	return (
		<div className={s.messages}>
			<div className={s.box}>
				{messageElements}
			</div>
			<div className={s.sendArea}>
				<textarea
					onChange={onNewMessageChange}
					className={s.area}
					placeholder="Введите сообщение..."
					value={newMessageBody}
				/>
				<button onClick={onSendMessageClick} className={s.button}>Отправить</button>
			</div>
		</div>
	);
};

export default Messages;