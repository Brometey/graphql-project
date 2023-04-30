import express from 'express';
import {ApolloServer} from 'apollo-server-express';

import { resolvers } from './resolvers';
import { api as starshipsAPI } from '../bus/starships/dataSource';

import schema from './types.graphql'
import { corsOptions, sessionOptions } from './config';
 
import cors from 'cors';
import session from 'express-session';
import { readToken } from './readToken';


const app = express();

app.use(session(sessionOptions))
app.use(cors(corsOptions))
app.use(readToken)

async function serverStart(){
const server = new ApolloServer({typeDefs: schema, resolvers,dataSources: () => {
    return {starshipsAPI}
}});

await server.start();
server.applyMiddleware({app});
} 

export {app,serverStart};