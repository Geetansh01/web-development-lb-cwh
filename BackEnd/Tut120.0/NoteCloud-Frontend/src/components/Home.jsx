import React, { useContext, useState } from "react";
import Note from "./Note";
import NoteContext from "../contexts/NotesContext";
import AddNote from "./AddNote";

const Home = () => {
	const notesObject = useContext(NoteContext);

	const [showAddNoteBox, setshowAddNoteBox] = useState(false);

	const handleAddNote = () => {
		setshowAddNoteBox(!showAddNoteBox);
	};

	let notes = notesObject.allNotes;
	return (
		<>
			{/* Update Note Dialog Box */}
			{showAddNoteBox ? <AddNote setshowAddNoteBox={setshowAddNoteBox} /> : ""}

			<div className="container">
				<h2 className="row mb-3">Your Notes</h2>

				<div className="row mb-3 column-gap-3 row-gap-3">
					{notes.map((note) => {
						return <Note key={note._id} note={note} />;
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
