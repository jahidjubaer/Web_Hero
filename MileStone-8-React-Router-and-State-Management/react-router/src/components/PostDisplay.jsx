import React from "react";
import { useLoaderData } from "react-router";

const PostDisplay = ({params}) => {
    const data = useLoaderData(params); 
    console.log(data);
    
    
  return (
    <div>
      <h1>{params.title}</h1>
    </div>
  );
};

export default PostDisplay;
