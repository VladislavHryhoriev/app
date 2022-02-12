import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/state';
import s from './NewPost.module.css';

const NewPost = (props) => {
	let refTextArea = React.createRef();

	let addPost = () => {
		props.dispatch(addPostCreator());
	};

	let onPostChange = () => {
		let text = refTextArea.current.value;
		let action = updateNewPostTextCreator(text);
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