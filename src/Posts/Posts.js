import React, { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Posts;

function Post({ post }) {
  return (
    <div className="p-4">
      <div className="flex flex-col">
        <span className="capitalize text-xl tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </span>
        <span className="capitalize font-normal text-gray-700 dark:text-gray-400">
          User Id: {post.userId}
        </span>
        <span className="capitalize font-normal text-gray-700 dark:text-gray-400">
          {post.body}
        </span>
      </div>
    </div>
  );
}
