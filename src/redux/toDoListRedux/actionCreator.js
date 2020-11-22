import { HANDLE_EDIT } from "./actionConstants";

export default (Taskdata) => {
	console.log("handling click on edit..... action trigred");
	return {
		type: HANDLE_EDIT
	};
};
