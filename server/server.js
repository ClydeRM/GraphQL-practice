const { GraphQLServer } = require('graphql-yoga')

const messages = [];

// type like DB schema
// ! mean it most require
const typeDefs = `
    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
        postMessage(user: String!, content: String!): ID!
    }
`;

// get and post message
// Query.messages return an array
const resolvers = {
    Query: {
        messages: () => messages,
    },
    Mutation: {
        postMessage: (parent, {user, content}) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            return id;
        }
    }
};

// server use typeDefs
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(({ port }) => {
    console.log(`Starting server on http://localhost:${port}/`);
});
