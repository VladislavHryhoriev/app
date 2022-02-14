import React from 'react';
import s from './PostBlock.module.css'
import PostList from './PostList/PostList';
import NewPostContainer from './NewPost/NewPostContainer';


const PostBlock = (props) => {
	return (
		<div className={s.postsBlock}>
			<NewPostContainer store={props.store} />
			<PostList posts={props.posts} />
		</div>
	);
};

export default PostBlock;