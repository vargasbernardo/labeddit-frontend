import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";
import BASE_URL from "../constants/BASE_URL";

export default function GlobalState(props) {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${BASE_URL}/comments`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err)
      });
  }, []);
  useEffect(() => {
    axios.get(`${BASE_URL}/users`, {
      headers:{
        Authorization: `${token}`
      },
    })
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }, [comments, posts ])
  console.log(error)
  return (
    <GlobalContext.Provider value={{ comments, setComments, posts, setPosts, users, error }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
