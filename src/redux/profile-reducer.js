const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 3,
				message: state.newPostText,
				likesCount: 0,
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;

			return state;

		default:
			return state;

	}
}

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default profileReducer;