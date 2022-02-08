import React from 'react';
import PostBlock from './PostBlock/PostBlock';
import s from './ProfileWrapper.module.css'
import Profile from './Profile/Profile';

const ProfileWrapper = () => {
	return (
		<main className={s.profileWrapper}>
			<div className={s.profileBanner} />
			<Profile />
			<PostBlock />
		</main>
	);
};

export default ProfileWrapper;