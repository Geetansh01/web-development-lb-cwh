import React, { useContext, useState } from "react";
import NotesContext from "../contexts/NotesContext";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/updateNoteBox.css";

const AddNote = ({ setshowAddNoteBox }) => {
	let { addNote } = useContext(NotesContext);
	const [showAlert] = useOutletContext();

	const [formInput, setformInput] = useState({ title: "", description: "" });

	const handleInput = (event) => {
		setformInput({ ...formInput, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		let response = await addNote(formInput.title, formInput.description)
		setshowAddNoteBox(false);
		if (response.success) {
			showAlert("green", `${response.reason}`)
		}
		else {
			showAlert("red", `${response.reason}`)
		}
	};

	const handleClose = ()=>{
		setshowAddNoteBox(false);
	}

	return (
		<>
			<div className="UpdateNoteBox">
				<div className="container-lg h-100 bg-info-subtle rounded px-5 pt-3">
					<div className="closeBtnContainer">
						<button className="closeBtn btn btn-light" onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>
					</div>
					<h1>Add a Note</h1>
					<form>
						<div className="mb-3">
							<label htmlFor="title" className="form-label">
								Title
							</label>
							<input
								type="text"
								className="form-control"
								id="titel"
								name="title"
								value={formInput.title}
								onChange={handleInput}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="description" className="form-label">
								Description
							</label>
							<input
								type="text"
								className="form-control"
								id="description"
								name="description"
								value={formInput.description}
								onChange={handleInput}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-success"
							onClick={handleSubmit}
						>
							Add Note
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddNote;
