import React from 'react';

import axios from '../axios';

const CreatePost = ({ posts, setPosts }) => {
  async function createPost() {
    try {
      const response = await axios.post('/posts', {
        userId: 1,
        title: 'New Post',
        body: 'Body of new post',
      });
      setPosts([...posts, response.data]);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <button className="ui button primary" onClick={createPost}>
      Create Post
    </button>
  );
};

export default CreatePost;
