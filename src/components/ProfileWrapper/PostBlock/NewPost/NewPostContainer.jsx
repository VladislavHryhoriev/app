import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/profile-reducer';
import NewPost from './NewPost';

const NewPostContainer = (props) => {
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostCreator());
	};

	let onPostChange = (text) => {
		let action = updateNewPostTextCreator(text);
		props.store.dispatch(action);
	};

	return (
		<NewPost
			updateNewPostText={onPostChange}
			addPost={addPost}
			newPostText={state.profilePage.newPostText}
		/>
	);
};

export default NewPostContainer;