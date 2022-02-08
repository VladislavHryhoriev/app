import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div className={s.profileInfo}>
			<h2 className={s.nickname}>{props.profileInfo.username}</h2>
			<ul className={s.subInfo}>
				{/* Вынести для каждого element */}
				<li className={s.element}>
					День рождения: {props.profileInfo.birthday}
				</li>
				<li className={s.element}>
					Город: {props.profileInfo.city}
				</li>
				<li className={s.element}>
					Образование: {props.profileInfo.education}
				</li>
				<li className={s.element}>
					Веб сайт: {props.profileInfo.website}
				</li>
				{/* Вынести для каждого element */}
			</ul>
		</div>
	);
};

export default ProfileInfo;