const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } =  require('@as-integrations/express5');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

async function startApolloServer(){
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
            type Todo {
                id: ID! 
                title: String!
                completed: Boolean!
                user: User!
            }
            
            type User {
                id: ID!
                name: String!
                email: String!
                username: String!
                phone: String!
                website: String!
            }

            type Query {
                getTodos: [Todo]
                getUsers: [User]
                getUserById(id: ID!): User
            }
        `,
        resolvers: {
            Query: {
                getTodos: async () => { 
                    return (await axios.get('https://jsonplaceholder.typicode.com/todos')).data;
                },
                getUsers: async () => { 
                    return (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
                },

                // Signature: You have 2 things available to you - "parent" and "args i.e {}" that you can pass to the resolver function. ("parent" is used when you have nested queries) 
                getUserById: async (parent, { id }) => {
                    const user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
                    return user;
                }
            },

            Todo: {
                user: async (parent_todo, _) => {
                    const user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${parent_todo.userId}`)).data;
                    return user;
                }
            }
        },
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use('/graphql', expressMiddleware(server)); // If any request comes to /graphQL, it will be handled by "expressMiddleware(server)" middleware (This is basically our GraphQL server)

    app.listen(8000, () => {
        console.log('Server started at PORT 8000');
    })
}

startApolloServer();