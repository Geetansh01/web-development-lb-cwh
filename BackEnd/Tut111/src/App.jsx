import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'


function App() {
  const [posts, setPosts] = useState([{
    "userId": 1,
    "id": 1,
    "title": ""
}]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
      console.log(posts)
    }

    fetchData();
  }, [])

  return (
    <div className="wrapper">
      <Navbar />

      <div className="container">

        {posts.map((post) => {
          return (
            <Card key={post.id} props={post} />
          )
        })}

      </div>

    </div>
  )
}

export default App




