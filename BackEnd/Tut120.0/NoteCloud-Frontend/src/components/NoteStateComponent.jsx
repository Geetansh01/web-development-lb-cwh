import React, { useState } from "react";
import NotesContext from "../contexts/NotesContext";

const NoteStateComponent = ({ children }) => {
	const [allNotes, setallNotes] = useState([
		{
			_id: "668fc0b2d8bc194a543801db",
			user: "668f950c1b51da8985b14b28",
			title: "Test note 1 changed again",
			description: "Meds Lani hai",
			tag: "Market",
			date: "2024-07-11T11:23:30.202Z",
			__v: 0,
		},
		{
			_id: "668fc25ed8bc194a543801de",
			user: "668f950c1b51da8985b14b28",
			title: "Test note 2 changed",
			description: "Gym jana hai!",
			tag: "Fitness",
			date: "2024-07-11T11:30:38.756Z",
			__v: 0,
		},
		{
			_id: "668fc25md8bc194a543801de",
			user: "668f950c1b51da8985b14b28",
			title: "Test note 3",
			description: "DSA 3 Questions!",
			tag: "Fitness",
			date: "2024-07-11T11:30:38.756Z",
			__v: 0,
		},
		{
			_id: "668fc25md8bc194a523801de",
			user: "668f950c1b51da8985b14b28",
			title: "Test note 4",
			description: "Web Dev Questions!",
			tag: "Fitness",
			date: "2024-07-11T11:30:38.756Z",
			__v: 0,
		},

	]);

	// CRUD Operations for notes

	//CREATE: Add a new note
	const addNote = (title, description) => {
		//TODO: API CALL
		let newNote = {
			_id: "668fc35ed8bc194a543801de",
			user: "668f950c1b51da8985b14b28",
			title: title,
			description: description,
			tag: "Fitness",
			date: "2024-07-11T11:30:38.756Z",
			__v: 0,
		};
		setallNotes([...allNotes, newNote]);
	};

	//READ: User can read notes in the frontend

	//UPDATE: update an existing note
	const updateNote = (noteId, title, description) => {
		//TODO: API CALL
		let updatedNote = {
			_id: "668fc0b2d8bc194a543801db",
			user: "668f950c1b51da8985b14b28",
			title: title,
			description: description,
			tag: "Market",
			date: "2024-07-11T11:23:30.202Z",
			__v: 0,
		};

		let newAllNotes = allNotes.map((note) =>
			note._id === noteId ? updatedNote : note
		);

		setallNotes(newAllNotes);
	};

	//DELETE: delete an existing note
	const deleteNote = (noteId) => {
		//TODO: API CALL
		//TODO: API CALL to get notes again
	};

	return (
		<NotesContext.Provider
			value={{ allNotes, addNote, updateNote, deleteNote }}
		>
			{children}
		</NotesContext.Provider>
	);
};

export default NoteStateComponent;

//TODO : Fix CORS error, unable to get notes from backend
// useEffect(() => {
//   let getNotes = async () => {
//     const response = await fetch(
//       "http://localhost:5000/api/notes/fetchallnotes",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token":
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJRCI6IjY2OGY5NTBjMWI1MWRhODk4NWIxNGIyOCJ9LCJpYXQiOjE3MjA2ODU4NjJ9.xZ0EAh_nP6nFQohdwfAnxaxRWvNuv_bW21shbBi1AlU",
//         },
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   };
//   getNotes();
// }, []);
