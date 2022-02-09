import React from 'react';
import PostBlock from './PostBlock/PostBlock';
import s from './ProfileWrapper.module.css'
import Profile from './Profile/Profile';

const ProfileWrapper = (props) => {
	return (
		<main className={s.profileWrapper}>
			<div className={s.profileBanner} />
			<Profile profileInfo={props.profilePage.profileInfo} />
			<PostBlock
				posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</main>
	);
};

export default ProfileWrapper;