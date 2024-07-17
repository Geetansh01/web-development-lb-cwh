import React, { useState, useEffect } from "react";
import NotesContext from "../contexts/NotesContext";

const NoteStateComponent = ({ children }) => {
	//Dummy test notes
	// const [allNotes, setallNotes] = useState([
	// 	{
	// 		_id: "668fc0b2d8bc194a543801db",
	// 		user: "668f950c1b51da8985b14b28",
	// 		title: "Test note 1 changed again",
	// 		description: "Meds Lani hai",
	// 		tag: "Market",
	// 		date: "2024-07-11T11:23:30.202Z",
	// 		__v: 0,
	// 	},
	// 	{
	// 		_id: "668fc25ed8bc194a543801de",
	// 		user: "668f950c1b51da8985b14b28",
	// 		title: "Test note 2 changed",
	// 		description: "Gym jana hai!",
	// 		tag: "Fitness",
	// 		date: "2024-07-11T11:30:38.756Z",
	// 		__v: 0,
	// 	},
	// 	{
	// 		_id: "668fc25md8bc194a543801de",
	// 		user: "668f950c1b51da8985b14b28",
	// 		title: "Test note 3",
	// 		description: "DSA 3 Questions!",
	// 		tag: "Fitness",
	// 		date: "2024-07-11T11:30:38.756Z",
	// 		__v: 0,
	// 	},
	// 	{
	// 		_id: "668fc25md8bc194a523801de",
	// 		user: "668f950c1b51da8985b14b28",
	// 		title: "Test note 4",
	// 		description: "Web Dev Questions!",
	// 		tag: "Fitness",
	// 		date: "2024-07-11T11:30:38.756Z",
	// 		__v: 0,
	// 	},
	// ]);

	const rootUrl = "http://localhost:5000";
	const tempAuthToken =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJRCI6IjY2OGY5NTBjMWI1MWRhODk4NWIxNGIyOCJ9LCJpYXQiOjE3MjA2ODU4NjJ9.xZ0EAh_nP6nFQohdwfAnxaxRWvNuv_bW21shbBi1AlU";

	const [allNotes, setallNotes] = useState([]);

	useEffect(() => {
		let getNotes = async () => {
			//returns an array containing all notes of the user / empty array if any error occurrs
			try {
				const response = await fetch(`${rootUrl}/api/notes/fetchallnotes`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"auth-token": tempAuthToken,
					},
				});

				if (!response.ok) {
					console.log(response);
					throw new Error("Network response was not ok");
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
	}, []);

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
					"auth-token": tempAuthToken,
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
					"auth-token": tempAuthToken,
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
					"auth-token": tempAuthToken,
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
