import { INPUTHANDLER, SUMBITTEDTASK, UPDATETASK } from "./actionConstants";

const INIT_STATE = {
	inputValue: "",
	newTask: true,
	toDoList: []
};

const Task = function (id, task) {
	this._id = id;
	this.tsakDetails = task;
	this.isCompleted = false;
	this.startDate = null;
	this.endDate = null;
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case INPUTHANDLER: {
			return {
				...state,
				inputValue: action.payload,
				newTask: true
			};
		}
		case SUMBITTEDTASK:
			const copyOFtoDoList = [...state.toDoList];
			console.log(copyOFtoDoList);
			copyOFtoDoList.unshift(
				new Task(copyOFtoDoList.length + 1, state.inputValue)
			);
			return {
				...state,
				inputValue: "",
				newTask: false,
				toDoList: copyOFtoDoList
			};
		case UPDATETASK:
			return {
				toDoList: [...state.toDoList].splice(
					action.payLoad._id,
					1,
					action.payLoad
				)
			};
		default:
			return state;
	}
};
