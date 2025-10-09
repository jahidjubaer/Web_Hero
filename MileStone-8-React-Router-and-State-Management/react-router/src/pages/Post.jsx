import React from "react";
import { Link, useLoaderData } from "react-router";

const Post = ({params}) => {
  const postData = useLoaderData({params});
  // console.log(postData);

  return (
    <div>
      {postData.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <Link to={`/posts/${post.id}`}>
            <button>See more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
