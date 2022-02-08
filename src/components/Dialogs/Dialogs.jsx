import React from 'react';
import s from './Dialogs.module.css';
import DialogList from './DialogList/DialogList';
import Messages from './Messages/Messages';


const Dialogs = (props) => {
	return (
		<div className={s.dailogs}>
			<DialogList users={props.dialogsPage.users} />
			<Messages messages={props.dialogsPage.messages} />
		</div>
	);
};

export default Dialogs;