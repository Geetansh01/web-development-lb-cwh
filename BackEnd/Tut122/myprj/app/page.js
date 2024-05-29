import React from 'react'
import fs from "fs/promises"
import Navbar from '@/components/Navbar';

let promise = fs.readFile("./data.json");
let info = promise.then((data) => {
    return data.toString()
});

const page = () => {
  return (
    <>

    <Navbar/>

    <div>This is Home Page!</div>
    <div>
        Sent from server : {info};
    </div>
    </>

  )
}

export default page