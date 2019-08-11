const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://graphql:12345@cluster0-axbx2.mongodb.net/tindevdb?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();