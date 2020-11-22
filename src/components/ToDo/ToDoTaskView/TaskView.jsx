import React from "react";
import { connect } from "react-redux";
import { handleUpdateOnTask } from "../../../redux/textAreaRedux/actionCreator";
import { handleEditOnTask } from "../../../redux/toDoListRedux/actionCreator";
import TextAreaReader from "../../ToDo/TodoCerator/TextAreaReader/textAreaReader";

const TaskView = (props) => {
	console.log(handleEditOnTask);

	console.log("Is Edit", props.isEdit);
	console.log(props.task, "Am view");
	const { tsakDetails, isCompleted, startDate, endDate, ...other } = props.task;
	return (
		<>
			{props.isEdit ? (
				<>
					<p id="task-details">{tsakDetails}</p>
					<button onClick={props.handleEditOnTask}>Edit</button>
				</>
			) : (
				<>
					<TextAreaReader output={tsakDetails}>
						<button onClick={props.handleUpdateOnTask}>Update</button>
					</TextAreaReader>
				</>
			)}
		</>
	);
};

const mapStateToProps = (store) => {
	return {
		isEdit: store.toDoListReducer.isEdit
	};
};

export default connect(mapStateToProps, {
	handleUpdateOnTask,
	handleEditOnTask
})(TaskView);
