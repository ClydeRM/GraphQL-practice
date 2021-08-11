const { GraphQLServer, PubSub } = require('graphql-yoga')

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

    type Subscription {
        messages: [Message!]
    }
`;

// Who is on server now and use channal
const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

// get and post message
// Query.messages return an array
const resolvers = {
    Query: {
        messages: () => messages,
    },
    Mutation: {
        postMessage: (parent, { user, content }) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            subscribers.forEach((fn) => fn());
            return id;
        }
    },
    Subscription: {  // alert server online has a user send a message
        messages: {
            subscribe: (parent, args, { pubsub }) => {
                const channel = Math.random().toString(36).slice(2, 15); // channel id
                onMessagesUpdates(() => pubsub.publish(channel, { messages })); // someone pull message
                setTimeout(() => pubsub.publish(channel, { messages }), 0); // async to update
                return pubsub.asyncIterator(channel);
            }
        }
    }
};

const pubsub = new PubSub();

// server use typeDefs
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(({ port }) => {
    console.log(`Starting server on http://localhost:${port}/`);
});
