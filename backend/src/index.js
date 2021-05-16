import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
const rfs = require('rotating-file-stream');

import { error } from './utils';

const { PORT = 3001 } = process.env;

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, '../logs'),
});

//express server
const app = express();
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
app.use(helmet());

// application wide needed middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

//graphql server

//types query/mutation/subscription
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;

//resolvers
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app });

app.get('/rest', (req, res) => {
  res.json({
    data: 'API is working...',
  });
});

// 404 - not found handling
app.use((req, res, next) => {
  res.status(404).json(error('404: Not found.', res.statusCode));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
