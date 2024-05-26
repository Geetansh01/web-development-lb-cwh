import React from "react";
import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError, //Used to show the server side errors (If the form you submitted had invalid credentials and server sent an error!)
    formState: { errors, isSubmitting },
  } = useForm();

  //Simulating Delay of 2s
  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

  // Fake "onSubmit()" : Simulates submitting form to server
  const onSubmit = async (data) => {
    await delay(); //Simulating Network Delay of 2s while submitting the from to server
    console.log(data);
    if(data.username2 != "HARI"){
      setError("myError1", { message: "Server Bola : Invalid Username2. Correct : HARI" });
    }
    if(data.username3 == "Geetansh"){
      setError("myError2_blockedUsers", { message: "Server Bola : Geetansh is blocked on this server" });
    }
  };

  // Real "onSubmit()" : Actually submits form to server. To use this, run "server.js" from "BackEnd/" folder (Use cmd: "nodemon .\server.js" with terminal in the "BackEnd/" folder )
  // const onSubmit = async (data) => {
  //   const response = await fetch("http://localhost:3000/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   const info = await response.json();
  //   console.log(`Server's response`)
  //   console.log(info);
  // };

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex">
        {/* 1) Displaying Static error message when VALIDATION fails*/}
        <input
          placeholder="username"
          {...register("username", {
            required: true,
            minLength: 3,
            maxLength: 5,
          })}
          type="text"
        ></input>
        {errors.username && <span>Invalid Username : VALIDATION failed</span>}

        {/* 2) Displaying error messages from the validation that has failed */}
        {/* Input atleast 1 char before pressing "submit" to see the error msg. (Idk why it's like that) */}
        <input
          placeholder="username2"
          {...register("username2", {
            required: true,
            minLength: { value: 3, message: "Min-Length is 3" },
            maxLength: { value: 5, message: "Max-Length is 5" },
          })}
          type="text"
        ></input>
        {errors.username2 && <div>{errors.username2.message}</div>}

        {/* 2.2) Similar to 2) but this time for "required" too! */}
        <input
          placeholder="username3"
          {...register("username3", {
            required: { value: true, message: "This field is ReQuIrEd 😜😜" },
            minLength: { value: 3, message: "Min-Length is 3" },
            maxLength: { value: 15, message: "Max-Length is 15" },
          })}
          type="text"
        ></input>
        {errors.username3 && <div>{errors.username3.message}</div>}

        <input
          placeholder="password"
          {...register("password")}
          type="password"
        />

        {/* "isSubmitting" is a value () that would be true while the form is being submitted to the server! */}
        <input disabled={isSubmitting} type="submit" />
      </form>

      {/* using "setError()" function to show the server side errors (If the form you submitted had invalid credentials and server sent an error!)*/}
      {isSubmitting && <div>Submitting...</div>}
      {errors.myError1 && <div>{errors.myError1.message}</div>}
      {errors.myError2_blockedUsers && <div>{errors.myError2_blockedUsers.message}</div>}
    </>
  );
}

export default App;
