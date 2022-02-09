import React from 'react';
import s from './PostBlock.module.css'
import NewPost from './NewPost/NewPost';
import PostList from './PostList/PostList';


const PostBlock = (props) => {
	return (
		<div className={s.postsBlock}>
			<NewPost
				addPost={props.addPost}
				newPostText={props.newPostText}
				updateNewPostText={props.updateNewPostText}
			/>
			<PostList posts={props.posts} />
		</div>
	);
};

export default PostBlock;