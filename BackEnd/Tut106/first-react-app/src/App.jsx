import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
      {/* write JSX Here */}
      <Navbar />
      <div className="container">
        <Card title="Art" desc="Art is Beautiful!" />
        <Card title="Food" desc="Food is Delicious!" />
        <Card title="Travel" desc="Travel is Awesome!" />
        <Card title="Music" desc="Music is Wonderful!" />
      </div>
      <Footer />
    </>
  )

}


export default App
