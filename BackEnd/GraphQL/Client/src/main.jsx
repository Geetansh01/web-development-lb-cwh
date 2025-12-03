import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import './index.css'
import App from './App.jsx'

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8000/graphql" }),
  cache: new InMemoryCache(),
});

// Method 1: Make a graphQL query using plain JS. See the console in the browser for the output.
// A nested query to get all the ToDos and the corresponding users of each ToDo
// client
//   .query({
//     query: gql`
//       query getAllTodos {
//         getTodos {
//           title,
//           user {
//             name
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Method 2: Using ApolloProvider to wrap the React app. Now go to App.jsx to see how to use Apollo Client in React components.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
