import React, { useState, useEffect, useContext } from "react";
import NotesContext from "../contexts/NotesContext";
import AuthContext from "../contexts/AuthContext";

const NoteStateComponent = ({ children }) => {
	const rootUrl = import.meta.env.VITE_ROOT_URL;

	const [allNotes, setallNotes] = useState([]);

	const { authToken } = useContext(AuthContext);

	useEffect(() => {
		let getNotes = async () => {
			//returns an array containing all notes of the user / empty array if any error occurrs
			try {
				const response = await fetch(`${rootUrl}/api/notes/fetchallnotes`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"auth-token": authToken,
					},
				});

				if (!response.ok) {
					console.log(response);
					throw new Error(`Response status: ${response.status}`);
				}

				const data = await response.json();
				setallNotes(data["Your notes"]); //set "allNotes" state
				return data["Your notes"]; //array containing all notes of the user
			} catch (error) {
				console.log("Error fetching notes: ");
				console.log(error);
				return [];
			}
		};

		getNotes();
	}, [authToken]);

	// CRUD Operations for notes

	//CREATE: Add a new note
	const addNote = async (title, description, tag = "General") => {
		//API Call
		const url = `${rootUrl}/api/notes/addnote`;
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"auth-token": authToken,
				},
				body: JSON.stringify({
					title: title,
					description: description,
					tag: tag,
				}),
			});

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const newNote = await response.json(); //"newNote" is the note that was just added
			//TODO: type <never> error
			setallNotes([...allNotes, newNote]);
		} catch (error) {
			console.error(error.message);
		}
	};

	//READ: User can read notes in the frontend

	//UPDATE: update an existing note
	const updateNote = async (noteID, title, description, tag = "General") => {
		//API Call
		const url = `${rootUrl}/api/notes/updatenote/${noteID}`;
		try {
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"auth-token": authToken,
				},
				body: JSON.stringify({
					title: title,
					description: description,
					tag: tag,
				}),
			});

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const updatedNote = await response.json();
			console.log(updatedNote);
			let newAllNotes = allNotes.map((note) =>
				note._id === noteID ? updatedNote : note
			);

			setallNotes(newAllNotes);
		} catch (error) {
			console.error(error.message);
		}
	};

	//DELETE: delete an existing note
	const deleteNote = async (noteID) => {
		//API Call
		const url = `${rootUrl}/api/notes/deletenote/${noteID}`;
		try {
			const response = await fetch(url, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"auth-token": authToken,
				},
			});

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();
			console.log(json);

			console.log("Deleteing note:" + noteID);
			let newAllNotes = allNotes.filter((note) => {
				return note._id != noteID;
			});

			setallNotes(newAllNotes);
		} catch (error) {
			console.error(error.message);
		}
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
