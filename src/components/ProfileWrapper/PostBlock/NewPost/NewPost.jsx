import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
	let refTextArea = React.createRef();

	let updateText = () => {
		let text = refTextArea.current.value;
	};

	let addPost = () => {
		let text = refTextArea.current.value;
		props.addPost(text);
	};

	return (
		<div className={s.newPost}>
			<h2 className={s.title}>Мои посты</h2>
			<textarea
				ref={refTextArea}
				onChange={updateText}
				className={s.area}
				placeholder="Ваши новости..."
			// value="Заглушка"
			/>
			<button onClick={addPost} className={s.button}>Отправить</button>
		</div>
	);
};

export default NewPost;