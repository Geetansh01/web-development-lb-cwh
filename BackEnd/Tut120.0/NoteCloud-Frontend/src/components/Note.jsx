import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import NotesContext from "../contexts/NotesContext";
import UpdateNote from "./UpdateNote";

const Note = (props) => {
	let { deleteNote } = useContext(NotesContext);
	const [showUpdateNoteBox, setshowUpdateNoteBox] = useState(false);

	const editHandler = () => {
		// TODO : add some way for user to add newtitle
		setshowUpdateNoteBox(!showUpdateNoteBox);
	};

	const deleteHandler = () => {
		deleteNote(props.note._id);
	};

	return (
		<div className="card col-4 box-sizing bg-light">
			{/* Update Note Dialog Box */}
			{showUpdateNoteBox ? (
				<UpdateNote setshowUpdateNoteBox={setshowUpdateNoteBox} noteID={props.note._id} />
			) : (
				""
			)}

			<div className="card-body">
				<div className="row align-items-center ">
					<h5 className="card-title col-9">{props.note.title}</h5>
					<div className="icons col row px-3 column-gap-2">
						<FontAwesomeIcon
							role="button"
							onClick={deleteHandler}
							className="card-title col"
							icon={faTrash}
						/>
						<FontAwesomeIcon
							role="button"
							onClick={editHandler}
							className="card-title col"
							icon={faPen}
						/>
					</div>
				</div>
				<p className="card-text">{props.note.description}</p>
			</div>
		</div>
	);
};

export default Note;
