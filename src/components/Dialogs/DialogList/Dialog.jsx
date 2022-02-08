import React from 'react';
import s from './DialogList.module.css';
import avatar from '../../../resource/dialogAvatar.jpg'

const Dialog = (props) => {
	return (
		<div className={s.dialog}>
			<img src={avatar} alt="" className={s.avatar} />
			<h3 className={s.username}>{props.username}</h3>
		</div>
	);
};

export default Dialog;