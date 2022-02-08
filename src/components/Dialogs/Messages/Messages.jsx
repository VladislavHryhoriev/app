import React from 'react';
import Message from './Message';
import s from './Messages.module.css'

let updateTextArea = () => { };

const Messages = (props) => {
	let messageElements = props.messages.map(m => {
		return (
			<Message /* key= */ message={m.message} author={m.isAuthor} />
		);
	});
	return (
		<div className={s.messages}>
			<div className={s.box}>
				{messageElements}
			</div>
			<div className={s.sendArea}>
				<textarea
					onChange={updateTextArea}
					className={s.area}
					value="Заглушка"
				/>
				<button className={s.button}>Отправить</button>
			</div>
		</div>
	);
};

export default Messages;