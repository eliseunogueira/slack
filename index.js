import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const graphqlendpointURL = '/graphql';
const PORT = 8080;
const app = express();
app.use(graphqlendpointURL, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlendpointURL }));
app.listen(PORT);
