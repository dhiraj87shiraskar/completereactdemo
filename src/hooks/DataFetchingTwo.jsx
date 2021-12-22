import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  posts: {},
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        posts: action.payload,
        error: "",
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        posts: {},
        error: "Something went wrong",
        loading: false,
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      <h1>{state.loading ? "Loading....." : state.posts.title}</h1>
      <h1>{state.error ? state.error : null}</h1>
    </div>
  );
}

export default DataFetchingTwo;
