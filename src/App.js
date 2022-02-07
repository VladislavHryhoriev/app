import React from 'react'
import './App.css'
import logo from './resource/logo.png'
import avatar from './resource/user-avatar.png'

function App() {
	return (
		<div className="app-wrapper">
			<header>
				<div className="logo">
					<img src={logo} alt="1" />
				</div>
			</header>
			<nav className="navbar-wrapper">
				<ul className="navbar">
					<li className="navbar__link">Профиль</li>
					<li className="navbar__link">Messages</li>
					<li className="navbar__link">News</li>
					<li className="navbar__link">Music</li>
					<li className="navbar__link">Settings</li>
				</ul>
			</nav>
			<main>
				<div className="profile-banner"></div>
				<div className="profile">
					<img src={avatar} alt="" className="profile__avatar" />
					<div className="info">
						<h2 className="nickname">Анна В.</h2>
						<ul className="sub-info">
							<li className="sub-info__elem">
								День рождения: 10 апреля
							</li>
							<li className="sub-info__elem">
								Город: Киев
							</li>
							<li className="sub-info__elem">
								Образование: BSU'9
							</li>
							<li className="sub-info__elem">
								Веб сайт: https://vk.com/anna_V
							</li>
						</ul>
					</div>
					<div className="posts">
						<div className="new-post">
							<h2>Мои посты</h2>
							<textarea className="new-post__area" placeholder="Ваши новости..." value="" />
							<button className="new-post__button">Отправить</button>
						</div>
						<div className="posts-list">
							<div className="post">
								<img src="" alt="" className="user-avatar" />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
