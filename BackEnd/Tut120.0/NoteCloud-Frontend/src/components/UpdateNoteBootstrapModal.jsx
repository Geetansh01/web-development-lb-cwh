//I AM NOT USING THIS COMPONENT!
import React, { useContext, useState, useEffect } from "react";
import NotesContext from "../contexts/NotesContext";

const UpdateNoteBootstrapModal = ({ note }) => {
	let { updateNote } = useContext(NotesContext);
	const [formInput, setformInput] = useState({
		title: "",
		description: "",
	});

	// Use useEffect to set the initial form input values when note changes
	useEffect(() => {
		setformInput({
			title: note.title,
			description: note.description,
		});
	}, [note]);

	const handleInput = (event) => {
		setformInput({ ...formInput, [event.target.name]: event.target.value });
	};
	const handleUpdate = (event) => {
		event.preventDefault();
		updateNote(note._id, formInput.title, formInput.description);
	};

	return (
		<div
			className="modal fade"
			id="exampleModal"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="exampleModalLabel">
							Update Note
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
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
						</form>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={handleUpdate}
						>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateNoteBootstrapModal;
