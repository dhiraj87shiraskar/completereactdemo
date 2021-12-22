import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.t,ypicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setPosts(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something gose wrong");
        setPosts({});
      });
  }, []);
  console.log(loading);
  return (
    <div>
      <h1>{loading ? "Loading....." : posts.title}</h1>
      <h1>{error ? error : null}</h1>
    </div>
  );
}

export default DataFetchingOne;
