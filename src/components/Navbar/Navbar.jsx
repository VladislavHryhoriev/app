import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<ul className={s.navbarList}>
				<li className={s.navbarLink}>Профиль</li>
				<li className={s.navbarLink}>Сообщения</li>
				<li className={s.navbarLink}>Новости</li>
				<li className={s.navbarLink}>Музыка</li>
				<li className={s.navbarLink}>Настройки</li>
			</ul>
		</nav>
	);
};

export default Navbar;