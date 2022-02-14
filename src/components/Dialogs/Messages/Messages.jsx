import React from 'react';
import Message from './Message';
import s from './Messages.module.css'

const Messages = (props) => {
	let state = props.dialogsPage;

	let messageElements = state.messages.map(m => {
		return (
			<Message /* key= */ message={m.message} author={m.isAuthor} />
		);
	});

	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
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