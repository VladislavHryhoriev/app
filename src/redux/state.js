let store = {
	_state: {
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
			newPostText: "text message",
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

	getState() {
		return this._state;
	},

	_callSubscriber() {
		// zero
	},

	addPost() {
		let newPost = {
			id: 3,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},

	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

};

window.store = store;


export default store;