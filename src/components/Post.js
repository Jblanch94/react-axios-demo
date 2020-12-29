import React from 'react';

const Post = ({ title, body }) => {
  return (
    <div className="ui card">
      <div className="header">{title}</div>
      <div className="content">{body}</div>
    </div>
  );
};

export default Post;
