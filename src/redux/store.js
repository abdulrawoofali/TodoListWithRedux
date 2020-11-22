import { createStore, combineReducers } from "redux";
import taskCreator from "./textAreaRedux/reducer";
import toDoListReducer from "./toDoListRedux/reducer";

const rootReducer = combineReducers({
	taskCreator: taskCreator,
	toDoListReducer: toDoListReducer
});

export default createStore(rootReducer);
