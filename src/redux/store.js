import { rerenderEntireTree } from '../index'

let store = {
	state: {
		profilePage: {
			profileInfo: {
				username: "Михаил Ржевский",
				birthday: "7 июля 2003 г",
				city: "Ржев",
				education: "Ржевский колледж (бывш. РАК, РМТ)",
				website: "https://vk.com/mihail_foksi"
			},
			posts: [
				{
					id: 1,
					message: "Привет, как дела?",
					likesCount: 35,
				},
				{
					id: 2,
					message: "Это мой второй пост.",
					likesCount: 3,
				},
			],
		},
		dialogsPage: {
			users: [
				{
					id: 1,
					username: "Дмитрий В.",
				},
				{
					id: 2,
					username: "Александр Д.",
				},
				{
					id: 3,
					username: "Илья К.",
				},
				{
					id: 4,
					username: "Анастасия С.",
				},
			],

			messages: [
				{
					id: 1,
					message: "Привет",
					isAuthor: true,
				},
				{
					id: 2,
					message: "Привет",
					isAuthor: false,
				},
				{
					id: 3,
					message: "Как дела?",
					isAuthor: true,
				},
				{
					id: 4,
					message: "Нормально",
					isAuthor: false,
				},
			],
		},
	},

	_rerenderEntireTree() {
		console.log('State changed');
	},

	_subscribe(observer) {
		this._rerenderEntireTree = observer;
	},

}

export let addPost = () => {
	let newPost = {
		id: 3,
		message: "Новый пост",
		likesCount: 0,
	};
	store.state.profilePage.posts.push(newPost);
	rerenderEntireTree();
}

export default store;