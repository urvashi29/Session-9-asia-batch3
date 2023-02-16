import React, { useEffect, useState } from "react";
import { fetchPosts } from "./utils";

const GetApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let r = fetchPosts();
    r.then(
      (res) => {
        setPosts(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  });

  return (
    <div>
      {posts.length ? (
        posts.map((item) => {
          return <React.Fragment key={item.id}>{item.title}</React.Fragment>;
        })
      ) : (
        <p>No post yet</p>
      )}
    </div>
  );
};

export default GetApi;
