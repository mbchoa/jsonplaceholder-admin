import React from 'react';
import { DisabledInput, Edit, SimpleForm, TextInput } from 'react-admin';

const PostEdit = (props) => (
  <Edit title="Edit Post" {...props}>
    <SimpleForm>
      <DisabledInput label="Id" source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
