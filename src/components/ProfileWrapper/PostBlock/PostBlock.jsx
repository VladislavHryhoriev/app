import React from 'react';
import s from './PostBlock.module.css'
import NewPost from './NewPost';
import PostList from './PostList';


const PostBlock = () => {
	return (
		<div className={s.postsBlock}>
			<NewPost />
			<PostList />
		</div>
	);
};

export default PostBlock;