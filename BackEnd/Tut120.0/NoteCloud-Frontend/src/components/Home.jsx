import React, { useContext, useState, useRef, useEffect } from "react";
import Note from "./Note";
import NoteContext from "../contexts/NotesContext";
import AddNote from "./AddNote";
import NotesContext from "../contexts/NotesContext";
import AuthContext from "../contexts/AuthContext";

const Home = () => {
	const notesObject = useContext(NoteContext);
	let notes = notesObject.allNotes;

	const { authToken } = useContext(AuthContext);

	const [showAddNoteBox, setshowAddNoteBox] = useState(false);

	const handleAddNote = () => {
		setshowAddNoteBox(!showAddNoteBox);
	};

	/******* Below Code needed for Option 2 (See below) *********/
	const [modalNote, setmodalNote] = useState({
		id: "",
		title: "",
		description: "",
		tag: "",
	});
	let { updateNote } = useContext(NotesContext);
	const bootstrapModalOpenerButtoonRef = useRef(null);
	function updateNoteViaBootstrapModal(noteToBeUpdated) {
		setmodalNote({
			id: noteToBeUpdated._id,
			title: noteToBeUpdated.title,
			description: noteToBeUpdated.description,
			tag: noteToBeUpdated.tag,
		}); //"modalNote" state is responsible for what is visible in the modal. So, update "modalNote" with already existing note's title, description & tag
		bootstrapModalOpenerButtoonRef.current.click(); //Programatically click the modal opener button
	}

	const handleInput = (event) => {
		setmodalNote({ ...modalNote, [event.target.name]: event.target.value });
	};
	const handleUpdate = (event) => {
		event.preventDefault();
		updateNote(modalNote.id, modalNote.title, modalNote.description);
		bootstrapModalOpenerButtoonRef.current.click(); //Programatically click the modal opener button
	};

	return (
		<>
			{/* Add Note Dialog Box */}
			{showAddNoteBox ? <AddNote setshowAddNoteBox={setshowAddNoteBox} /> : ""}

			{/* 
				1)I should NOT use Option 2. Option 1 is better (For Option 1 , See "./components/Note.jsx") 
				2)Why? This is because option 2 uses Bootstrap's modal, and Bootstrap has implemented the modal such that it uses JavaScript to open and close the modal. However, since this is a React project, pure JavaScript should not be used to manipulate DOM elements. React should handle the DOM elements by itself. That is why option 2 is not preferable to be used.
			
			*/}

			{/* Option 2 : Bootstrap Modal to update the note */}
			{/* Button to trigger modal */}
			<button
				type="button"
				className="btn btn-primary d-none" //"d-none" : hide the button from the DOM
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				ref={bootstrapModalOpenerButtoonRef}
			>
				Launch modal
			</button>
			{/* Modal */}
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
										value={modalNote.title}
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
										value={modalNote.description}
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

			<div className="container">
				<h2 className="row mb-3">Your Notes</h2>
				<button
					type="button"
					className="btn btn-info row mb-3"
					onClick={handleAddNote}
				>
					Add Note
				</button>
				<div className="container fs-3 text d-flex justify-content-center align-items-center">
					{authToken === "no auth token" ? (
						<div className="text-secondary">Login to view your Notes. 😎</div>
					) : (
						notes.length === 0 && (
							<div className="text-secondary">
								Nothing but 🐛🐜🐛🐜 here! ¯\(°_o)/¯{" "}
							</div>
						)
					)}
				</div>
				<div className="row mb-3 column-gap-3 row-gap-3">
					{notes.map((note) => {
						return (
							<Note
								key={note._id}
								note={note}
								updateNoteViaBootstrapModal={updateNoteViaBootstrapModal} //To be used with Option 2
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
