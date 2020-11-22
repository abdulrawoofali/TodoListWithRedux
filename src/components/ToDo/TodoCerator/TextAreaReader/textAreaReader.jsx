import React from "react";
import { connect } from "react-redux";
import { inputHandlerActionCreator } from "../../../../redux/textAreaRedux/actionCreator";
import { NEWTASK, ADDEDTASK } from "./textAreaConstants";
const TextAreaReader = (props) => {
	const handleChange = (event) => {
		console.log("handling changes in text Area....");
		props.inputHandlerActionCreator(event.target.value);
	};

	return (
		<>
			<p></p>
			<textarea onChange={handleChange} value={props.output}></textarea>
			{props.children}
		</>
	);
};

const matchStateToProps = (store) => {
	return {
		output: store.taskCreator.inputValue,
		msg: store.taskCreator.newTask
	};
};

export default connect(matchStateToProps, {
	inputHandlerActionCreator
})(TextAreaReader);
