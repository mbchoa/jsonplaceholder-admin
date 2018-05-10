const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');

const {
  typeDef: Post,
  resolvers: postResolvers,
} = require('./post.js');

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

module.exports = makeExecutableSchema({
  typeDefs: [ Query, Post ],
  resolvers: merge(resolvers, postResolvers),
});
