import React, { useState, useEffect } from 'react';

import axios from '../axios';
import Post from './Post';
import CreatePost from './CreatePost';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    getPosts();
  }, []);

  function renderPosts() {
    return posts.map((post) => {
      return <Post key={post.id} title={post.title} body={post.body} />;
    });
  }

  return (
    <>
      <CreatePost setPosts={setPosts} posts={posts} />
      {renderPosts()}
    </>
  );
};

export default Posts;
