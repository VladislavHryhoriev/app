import React from 'react';
import s from './Profile.module.css'
import avatar from '../../../resource/user-avatar.jpg'
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {
	return (
		<div className={s.profile}>
			<img src={avatar} alt="" className={s.profileAvatar} />
			<ProfileInfo profileInfo={props.profileInfo} />
		</div>
	);
};

export default Profile;