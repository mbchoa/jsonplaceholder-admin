const apiClient = require('./apiClient');
const axios = require('axios');

module.exports = {
  typeDef: `
    extend type Query {
      Post(id: ID!): Post
      allPosts(page: Int, perPage: Int, sortField:String, sortOrder: String): [Post]
      _allPostsMeta(page: Int, perPage: Int, sortField: String, sortOrder: String): ListMetadata
    }

    type Post {
      userId: Int
      id: ID!
      title: String
      body: String
    }

    type ListMetadata {
      count: Int
    }
  `,
  resolvers: {
    Query: {
      Post: (root, { id }) => {
        return apiClient
          .get(`/posts/${id}`)
          .then(({ data }) => data );
      },
      allPosts: () => {
        return apiClient
          .get('/posts')
          .then(({ data }) => {
            return data;
          });
      },
      _allPostsMeta: () => {
        return apiClient
          .get('/posts')
          .then(({ data }) => ({ count: data.length }));
      }
    }
  }
}
