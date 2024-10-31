"use client";

import React, { useState } from 'react';

interface Post {
  id: number;
  title: string;
  text: string;
}

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  const [openPostId, setOpenPostId] = useState<number | null>(null); // State to track which post is open

  const handleClick = (postId: number) => {
    setOpenPostId((prevId) => (prevId === postId ? null : postId));
  };

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <button onClick={() => handleClick(post.id)}>
            {post.title}
          </button>
          {openPostId === post.id && <p>{post.content}</p>}
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
