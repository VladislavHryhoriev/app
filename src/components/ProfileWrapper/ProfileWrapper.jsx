import React from 'react';
import PostBlock from './PostBlock/PostBlock';
import s from './ProfileWrapper.module.css'
import Profile from './Profile/Profile';

const ProfileWrapper = (props) => {
	let state = props.store.getState();

	return (
		<main className={s.profileWrapper}>
			<div className={s.profileBanner} />
			<Profile profileInfo={state.profilePage.profileInfo} />
			<PostBlock
				posts={state.profilePage.posts}
				store={props.store}
			/>
		</main>
	);
};

export default ProfileWrapper;