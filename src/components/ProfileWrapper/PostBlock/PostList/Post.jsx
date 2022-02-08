import React from 'react';
import s from './PostList.module.css'
import avatar from '../../../../resource/user-avatar.jpg'

const Post = (props) => {
	return (
		<div className={s.postWrapper}>
			<div className={s.post}>
				<img src={avatar} alt="" className={s.postAvatar} />
				<p className={s.text}>{props.message}</p>
			</div>
			<div className={s.likesCount}>Лайков: {props.likes}</div>
		</div>
	);
};

export default Post;