import React from 'react';
import s from './Messages.module.css';

const Message = (props) => {
	if (props.author) {
		return <div className={s.message + ' ' + s.author}>{props.message}</div>
	}
	return <div className={s.message}>{props.message}</div>
};

export default Message;