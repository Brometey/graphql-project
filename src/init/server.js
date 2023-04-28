import express from 'express';
import {ApolloServer} from 'apollo-server-express';

import { resolvers } from '../resolvers';
import schema from '../schema.graphql';

const app = express();

async function serverStart(){
const server = new ApolloServer({typeDefs: schema, resolvers});
await server.start();
server.applyMiddleware({app});
} 

export {app,serverStart};