import React from 'react';
import s from './PostBlock.module.css';

let updateText = () => { };

const NewPost = () => {
	return (
		<div className={s.newPost}>
			<h2 className={s.title}>Мои посты</h2>
			<textarea onChange={updateText} className={s.area} placeholder="Ваши новости..." value="Заглушка" />
			<button className={s.button}>Отправить</button>
		</div>
	);
};

export default NewPost;