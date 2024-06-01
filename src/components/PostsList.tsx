import React from "react";

type Post = {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
};

async function getPosts(): Promise<Post[] | null> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const body = await response.json();
  await new Promise((res, rej) => {
    setTimeout(res, 3000);
  });
  return body;
}

async function PostsList() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts?.map((i, index) => (
          <div key={index}>
            {index + 1}). {i.title}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsList;
