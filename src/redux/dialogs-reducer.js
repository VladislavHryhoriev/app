const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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

};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;

		case SEND_MESSAGE:
			let body = state.newMessageBody;
			let newMessage = {
				id: 5,
				message: state.newMessageBody,
				isAuthor: true,
			};
			state.messages.push(newMessage);
			state.newMessageBody = '';

		default:
			return state;
	}
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogsReducer;