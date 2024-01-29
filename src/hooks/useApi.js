import axios from "axios";
import { useEffect, useState } from "react";

export function useApi({ id }) {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postRes, commentsRes] = await Promise.all([
        axios.get(`https://backend-labeddit-sfwt.onrender.com/posts/${id}`, {
          headers: {
            Authorization: `${token}`,
          },
        }),
        //   axios.get(`https://backend-labeddit-sfwt.onrender.com/comments`, {
        //     headers: {
        //         Authorization: `${token}`
        //     }
        // })
      ]);
      setPost(postRes.data);
      // setComments(commentsRes.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, token]);

  // useEffect(() => {
  //   axios.get(`https://backend-labeddit-sfwt.onrender.com/posts/${id}`, {
  //     Authorization: localStorage.getItem("token")
  //   })
  //     .then(res => {
  //         setPost(res.data)
  //         setLoading(false)
  //     })
  //     .catch(err => console.log(err));
  // }, [])

  // // other call
  //

  return { post, loading, fetchData };
}
