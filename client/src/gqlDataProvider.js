import buildApolloClient from 'ra-data-graphql-simple';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});

const getGqlResource = resource => {
  switch (resource) {
    case 'posts':
      return 'Post';
    default:
      throw new Error(`Unknown resource ${resource}`);
  }
}

export default () => {
  return buildApolloClient({ client })
    .then(dataProvider =>
      (type, resource, params) =>
        dataProvider(type, getGqlResource(resource), params)
    );
}
