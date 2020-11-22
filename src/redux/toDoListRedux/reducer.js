import { HANDLEEDIT } from "./actionConstants";
const INIT_STATE = {
	isEdit: false
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case HANDLEEDIT: {
			return {
				...state,
				isEdit: true
			};
		}
		default:
			return state;
	}
};
