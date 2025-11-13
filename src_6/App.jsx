import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts") // safe & fast test API
      .then((res) => res.json())
      .then((data) => setPosts(data.posts)) // "posts" key ke andar data hota hai
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <h2>Fetched Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
