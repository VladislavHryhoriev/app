import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div className={s.profileInfo}>
			<h2 className={s.nickname}>Анна В.</h2>
			<ul className={s.subInfo}>
				{/* Вынести для каждого element */}
				<li className={s.element}>
					День рождения: 10 апреля
				</li>
				<li className={s.element}>
					Город: Киев
				</li>
				<li className={s.element}>
					Образование: BSU'9
				</li>
				<li className={s.element}>
					Веб сайт: https://vk.com/anna_V
				</li>
				{/* Вынести для каждого element */}
			</ul>
		</div>
	);
};

export default ProfileInfo;