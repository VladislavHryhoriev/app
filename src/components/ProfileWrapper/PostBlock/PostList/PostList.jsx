import React from 'react';
import Post from './Post';
import s from './PostList.module.css';


const PostList = (props) => {
	let postElements = props.posts.map(item => {
		return <Post /* key= */ message={item.message} likes={item.likesCount} />
	});
	return (
		<div className={s.postsList}>
			{postElements}
		</div>
	);
};

export default PostList;