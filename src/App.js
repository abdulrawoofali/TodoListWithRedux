import React from "react";
import "./styles.css";
import ToDoCreator from "./components/ToDo/TodoCerator/todoCreator";
import TaskViewList from "./components/ToDo/ToDoTaskView/TaskViewList";

export default function App() {
	return (
		<div className="App">
			<ToDoCreator />
			<TaskViewList />
		</div>
	);
}
