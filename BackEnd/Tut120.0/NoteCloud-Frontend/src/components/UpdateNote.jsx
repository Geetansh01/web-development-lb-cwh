import React, { useContext, useState } from "react";
import NotesContext from "../contexts/NotesContext";
import "../styles/updateNoteBox.css";

const UpdateNote = ({ setshowUpdateNoteBox, noteID }) => {
	let { updateNote } = useContext(NotesContext);

	const [formInput, setformInput] = useState({ title: "", description: "" });

	const handleInput = (event) => {
		console.log(event.target.name);
		setformInput({ ...formInput, [event.target.name]: event.target.value });
	};

	const handleUpdate = (event) => {
		//TODO: Add note function		
		event.preventDefault();
		updateNote(noteID, "TITLE UPDATED", "DESC UPDATED");
		setshowUpdateNoteBox(false);
	};
	return (
		<div className="UpdateNoteBox">
			<div className="container-lg h-100 bg-success-subtle rounded p-5">
				<h1>Update Note</h1>
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
						onClick={handleUpdate}
					>
						Update Note
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateNote;
