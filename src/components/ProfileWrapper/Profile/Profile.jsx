import React from 'react';
import s from './Profile.module.css'
import avatar from '../../../resource/user-avatar.png'
import ProfileInfo from './ProfileInfo';


const Profile = () => {
	return (
		<div className={s.profile}>
			<img src={avatar} alt="" className={s.profileAvatar} />
			<ProfileInfo />
		</div>
	);
};

export default Profile;