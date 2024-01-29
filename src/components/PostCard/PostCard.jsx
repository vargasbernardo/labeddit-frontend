import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";
import {
  CommentsContainer,
  LikesDislikesCommentsContainer,
  LikesDislikesContainer,
  PostCardContainer,
} from "./PostCardStyle";
import axios from "axios";
import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import BASE_URL from "../../constants/BASE_URL";

export default function PostCard({ post }) {
  const { comments } = useContext(GlobalContext);
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  const commentsById = comments.filter((comment) => comment.postId === post.id);
  const likePost = (e) => {
    e.preventDefault();
    axios
      .put(
        `${BASE_URL}/posts/${post.id}/like`,
        {
          like: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setLikes((prevLikes) => prevLikes + 1);
      })
      .catch((err) => console.log(err));
  };
  const dislikePost = (e) => {
    e.preventDefault();
    axios
      .put(
        `${BASE_URL}/posts/${post.id}/like`,
        {
          like: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setDislikes((prevDislikes) => prevDislikes + 1);
        setLikes((prevLikes) => prevLikes - 1);
      })
      .catch((err) => console.log(err));
  };
  return (
    <PostCardContainer>
      <p>Enviado por: {post.creator.name}</p>
      <h5>{post.content}</h5>
      <LikesDislikesCommentsContainer>
        <LikesDislikesContainer>
          <TbArrowBigUp onClick={likePost} />
          <p>{likes}</p>
          <TbArrowBigDown onClick={dislikePost} />
        </LikesDislikesContainer>
        <CommentsContainer>
          <TfiComment />
          <p>{commentsById.length}</p>
        </CommentsContainer>
      </LikesDislikesCommentsContainer>
    </PostCardContainer>
  );
}
