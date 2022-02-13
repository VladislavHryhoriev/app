import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
			newPostText: "",
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

			newMessageBody: "",

		},

		sidebar: {},
	},

	_callSubscriber() {
		// zero
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
};

window.store = store;


export default store;