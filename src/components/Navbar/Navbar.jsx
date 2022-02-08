import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<ul className={s.navbarList}>
				<li className={s.navbarLink}>
					<NavLink to="/" className={link => link.isActive ? s.active : ''}>Профиль</NavLink>
				</li>
				<li className={s.navbarLink}>
					<NavLink to="/dialogs" className={link => link.isActive ? s.active : ''}>Сообщения</NavLink>
				</li>
				<li className={s.navbarLink}>
					Новости
				</li>
				<li className={s.navbarLink}>
					Музыка
				</li>
				<li className={s.navbarLink}>
					Настройки
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;