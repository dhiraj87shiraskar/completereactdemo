import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [idChangeFromBtnClick, setIdChangeFromBtnClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idChangeFromBtnClick]);

  const onChangeHandler = () => {
    setIdChangeFromBtnClick(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h1>{post.title}</h1>
      <button type="button" onClick={onChangeHandler}>
        Click for post id{" "}
      </button>
      {/* <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
