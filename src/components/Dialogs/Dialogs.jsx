import React from 'react';
import s from './Dialogs.module.css';
import DialogList from './DialogList/DialogList';
import MessagesContainer from './Messages/MessagesContainer';


const Dialogs = (props) => {
	return (
		<div className={s.dailogs}>
			<DialogList users={props.dialogsPage.users} />
			<MessagesContainer
				store={props.store}
			/>

		</div>
	);
};

export default Dialogs;