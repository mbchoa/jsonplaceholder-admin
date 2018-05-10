import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import gqlDataProvider from './gqlDataProvider';

import PostList from './components/PostList';
import PostEdit from './components/PostEdit';

class App extends Component {
  state = {
    dateProvider: null,
  };

  async componentWillMount() {
    const dataProvider = await gqlDataProvider();
    this.setState ({ dataProvider });
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading...</div>
    }

    return (
      <div className="App">
        <Admin dataProvider={dataProvider}>
          <Resource name="posts" list={PostList} edit={PostEdit} />
        </Admin>
      </div>
    );
  }
}

export default App;
