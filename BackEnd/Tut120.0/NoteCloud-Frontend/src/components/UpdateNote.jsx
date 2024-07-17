import React, { useContext, useState } from "react";
import NotesContext from "../contexts/NotesContext";
import "../styles/updateNoteBox.css";

const UpdateNote = ({ setshowUpdateNoteBox, note }) => {
	let { updateNote } = useContext(NotesContext);

	const [formInput, setformInput] = useState({ title: note.title, description: note.description });

	const handleInput = (event) => {
		setformInput({ ...formInput, [event.target.name]: event.target.value });
	};

	const handleUpdate = (event) => {		
		event.preventDefault();
		updateNote(note._id, formInput.title, formInput.description);
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
