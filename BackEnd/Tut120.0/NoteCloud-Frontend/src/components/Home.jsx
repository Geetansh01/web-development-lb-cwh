import React, { useContext, useState, useRef, useEffect } from "react";
import Note from "./Note";
import NoteContext from "../contexts/NotesContext";
import AddNote from "./AddNote";
import UpdateNoteBootstrapModal from "./UpdateNoteBootstrapModal"; //Don't remove it, i might use it! (See "Option 2" below)

const Home = () => {
	const notesObject = useContext(NoteContext);
	let notes = notesObject.allNotes;

	const [showAddNoteBox, setshowAddNoteBox] = useState(false);

	
	const handleAddNote = () => {
		setshowAddNoteBox(!showAddNoteBox);
	};
	
	/******* Below Code needed for Option 2 (See below) *********/
	// const [modalNote, setmodalNote] = useState({
	// 	title: "1",
	// 	description: "1",
	// 	tag: "1",
	// });
	// useEffect(() => {
	// 	console.log(modalNote);
	// 	bootstrapModalOpenerButtoonRef.current.click(); //Programatically click the modal opener button
	// }, [modalNote]);
	// const bootstrapModalOpenerButtoonRef = useRef(null);
	// function updateNoteViaBootstrapModal(noteToBeUpdated) {
	// 	console.log(noteToBeUpdated);
	// 	setmodalNote({
	// 		title: noteToBeUpdated.title,
	// 		description: noteToBeUpdated.description,
	// 		tag: noteToBeUpdated.tag,
	// 	}); //Fill the modal's fields with already existing note's title, description & tag
	// }

	return (
		<>
			{/* Add Note Dialog Box */}
			{showAddNoteBox ? <AddNote setshowAddNoteBox={setshowAddNoteBox} /> : ""}

			{/* I am not using Option 2. Option 1 is better (For Option 1 , See "./components/Note.jsx") */}
			{/* Option 2 : Bootstrap Modal to update the note */}
			{/* Button to trigger modal */}
			{/* <button
				type="button"
				className="btn btn-primary d-none" //"d-none" : hide the button from the DOM
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				ref={bootstrapModalOpenerButtoonRef}
			>
				Launch modal
			</button> */}
			{/* Modal */}
			{/* <UpdateNoteBootstrapModal note={modalNote} /> */}

			<div className="container">
				<h2 className="row mb-3">Your Notes</h2>

				<div className="row mb-3 column-gap-3 row-gap-3">
					{notes.map((note) => {
						return (
							<Note
								key={note._id}
								note={note}
								// updateNoteViaBootstrapModal={updateNoteViaBootstrapModal} //To be used with Option 2
							/>
						);
					})}
				</div>
				<button
					type="button"
					className="btn btn-info row mb-3"
					onClick={handleAddNote}
				>
					Add Note
				</button>
			</div>
		</>
	);
};

export default Home;
