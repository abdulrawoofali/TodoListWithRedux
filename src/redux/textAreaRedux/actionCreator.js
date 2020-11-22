import { INPUTHANDLER, SUMBITTEDTASK, UPDATETASK } from "./actionConstants";

export const handleActionSubmit = () => {
	return { type: SUMBITTEDTASK };
};

export const inputHandlerActionCreator = (newInput) => {
	return {
		type: INPUTHANDLER,
		payload: newInput
	};
};

export const handleUpdateOnTask = (updatedData) => {
	return {
		type: UPDATETASK,
		payload: updatedData
	};
};

// export default [inputHandlerActionCreator, handleActionSubmit];
