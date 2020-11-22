import React from "react";
import TextAreaReader from "./TextAreaReader/textAreaReader";
import { connect } from "react-redux";
import { handleActionSubmit } from "../../../redux/textAreaRedux/actionCreator";
//console.log(handleActionSubmit);
const ToDoCreator = (props) => {
	return (
		<>
			<h3>Enter Your Task</h3>
			<TextAreaReader>
				<button onClick={props.handleActionSubmit}>Submit</button>
			</TextAreaReader>
		</>
	);
};

export default connect(null, { handleActionSubmit })(ToDoCreator);
