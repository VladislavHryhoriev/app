import React from 'react';
import avatar from '../../../resource/user-avatar.png'
import s from './PostBlock.module.css';


const PostList = () => {
	return (
		<div className={s.postsList}>
			<div className={s.post}>
				<img src={avatar} alt="" className={s.postAvatar} />
				<p className={s.text}>Hey, why nobody love me?</p>
			</div>
		</div>
	);
};

export default PostList;