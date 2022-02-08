import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog';
import s from './DialogList.module.css';

const DialogList = (props) => {
	let dialogElements = props.users.map(u => {
		return (
			<NavLink to={"./" + u.id}>
				<Dialog /* key= */ username={u.username} />
			</NavLink>
		)
	});

	return (
		<div className={s.dialogList}>
			{dialogElements}
		</div>
	);
};

export default DialogList;