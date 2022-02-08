import React from 'react';
import PostBlock from './PostBlock/PostBlock';
import s from './ProfileWrapper.module.css'
import Profile from './Profile/Profile';

const ProfileWrapper = (props) => {
	return (
		<main className={s.profileWrapper}>
			<div className={s.profileBanner} />
			<Profile profileInfo={props.profilePage.profileInfo} />
			<PostBlock posts={props.profilePage.posts} addPost={props.addPost} />
		</main>
	);
};

export default ProfileWrapper;