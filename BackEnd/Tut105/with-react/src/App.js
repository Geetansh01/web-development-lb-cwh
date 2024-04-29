import logo from './logo.svg';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

function App() {
  //Making a "State" i.e a variable that can change (& the change is reflected in DOM)
  const [value, setValue] = useState(0);

  return (
    <div className="App">

      <Navbar />
      <Navbar logoText = "Geetansh's Navbar" />
      <div className="count">{value}</div>
      <button onClick={() => { setValue(value + 1) }} className="btn">Click Me!</button>
      <Footer logoText = "Geetansh's Footer" />
      
    </div>
  );
}

export default App;
