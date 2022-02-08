import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../resource/logo.png'
import s from './Header.module.css'

const Header = () => {
	return (
		<header className={s.header}>
			<NavLink to="/">
				<img className={s.logo} src={logo} alt="logo" />
			</NavLink>
		</header>
	);
};

export default Header;