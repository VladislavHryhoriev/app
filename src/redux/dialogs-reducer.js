const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state, action) => {

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
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogsReducer;