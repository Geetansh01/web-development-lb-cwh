// NOTE: This file only works with Method 2 in "main.jsx". So ensure that Method 2 is uncommented in main.jsx

import { useState } from 'react'
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import './App.css'

const query = gql`
query getAllTodos {
  getTodos {
    title,
    user {
      name
    }
  }
}
`

function App() {
  const {data, loading} = useQuery(query);
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <table>
        <tbody>
          {
            data.getTodos.map(todo =>
              <tr>
                <td>{todo.title}</td>
                <td>{todo.user.name}</td>
              </tr>
            )
          }
        </tbody>
      </table>

    </>
  )
}

export default App
