import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);

    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    setPosts(data.posts);

    setLoading(false);
  }

  return (
    <div>
      

      <button onClick={fetchData}>
        Load Posts  Click 
      </button>

      {loading && <p>Loading...</p>}

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
