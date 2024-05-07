import React from 'react'
import { useState } from 'react'
import './App.css'

function App() { 
  const [inputValue, setinputValue] = useState("Ur Text Here ✍✍");

  const [form, setform] = useState({email: "xyz@x.com", phone: "xyz"});

  const [form2, setForm2] = useState({})

  function handleClick() {
    alert("Hey I am clicked!")
  }

  const handleMouseOver = () => {
    alert("Hey I mujme mouse agya!")
  }
  
  const handleValueChange = (event) => {
    setinputValue(event.target.value)
  }

  const handleChange2 = (e) => {
    //To change 'value' of respective inputs 'email' and 'phone' when user tries to change them via keyboard, we have two Methods :

    //Method 1 : Not used much bcz of its bulky syntax 
    // if(e.target.name == 'email'){
    //   setform(form.email = e.target.value);
    // }
    // else if(e.target.name == 'phone'){
    //   setform(form.phone = e.target.value);
    // }

    //Method 2 : Almost always used
    setform({...form, [e.target.name] : e.target.value})

  }

  const handleChange3 = (e)=>{
    setForm2({...form2, [e.target.name] : [e.target.value]})
  } 

  return (
    <>
      <button className="button" onClick={handleClick}>Click Me</button>
      <div className="redbox" onMouseOver={handleMouseOver}>Take Mouse Inside me!</div>

      {/* Input Element */}
      <input type="text" value={inputValue} onChange={handleValueChange}/>

      {/* Making Forms in React : handling many <input>s of a Form with a single event handling function */}
      <div className='myForm'>
        <input type="text" name='email' value={form.email} onChange={handleChange2}/>
        <input type="text" name='phone' value={form.phone} onChange={handleChange2}/>
      </div>

      {/* Making Forms in React : when your "form" object is not predefined */}
      <div className='myForm'>
        {/* 
          1) " value={form2.email ? form2.email : "XYZ"} " means agr "form2" object me "email" property hai to vo lelo otherwise "XYZ" lelo value me 
         */}
        <input type="text" name='email' value={form2.email ? form2.email : "XYZ"} onChange={handleChange3}/>
        <input type="text" name='phone' value={form2.phone ? form2.phone : "ABC"} onChange={handleChange3}/>
      </div>
      
    </>
  )
}

export default App
