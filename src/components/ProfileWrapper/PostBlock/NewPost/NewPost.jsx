import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
	let refTextArea = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = refTextArea.current.value;
		props.updateNewPostText(text);
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
			<button onClick={onAddPost} className={s.button}>Отправить</button>
		</div>
	);
};

export default NewPost;