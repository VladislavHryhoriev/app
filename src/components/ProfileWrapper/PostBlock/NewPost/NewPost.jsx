import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/state';
import s from './NewPost.module.css';

const NewPost = (props) => {
	let refTextArea = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = () => {
		let text = refTextArea.current.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	};

	return (
		<div className={s.newPost}>
			<h2 className={s.title}>Мои посты</h2>
			<textarea
				ref={refTextArea}
				onChange={onPostChange}
				className={s.area}
				placeholder="Ваши новости..."
				value={props.newPostText}
			/>
			<button onClick={addPost} className={s.button}>Отправить</button>
		</div>
	);
};

export default NewPost;