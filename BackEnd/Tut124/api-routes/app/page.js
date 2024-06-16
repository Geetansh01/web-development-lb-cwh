"use client";

export default function Home() {
  const data2send = {
    Info: "Data Sent By Client",
    Developer: "Geetansh Bhardwaj 😀",
  };

  async function handleClick() {
    let response = await fetch("/api/postEndpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2send), // body data type must match "Content-Type" header
    });
    let data = await response.json();
    console.log(data);
  }

  return (
    <button className="border border-2 border-red-600" onClick={handleClick}>
      {`Click Me (Make POST request to NextJS Server)`}
    </button>
  );
}
