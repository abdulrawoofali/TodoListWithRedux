import React from "react";
import TaskView from "./TaskView";
import { connect } from "react-redux";

const TaskViewList = (props) => {
	console.log(props.taskList, "todoList");
	return (
		<>
			{props.taskList.length === 0 ? (
				<p>No data..</p>
			) : (
				props.taskList.map((task, index) => (
					<TaskView key={task._id} task={task} />
				))
			)}
		</>
	);
};

const matchStateToProps = (store) => {
	return {
		taskList: store.taskCreator.toDoList
	};
};

export default connect(matchStateToProps, null)(TaskViewList);
