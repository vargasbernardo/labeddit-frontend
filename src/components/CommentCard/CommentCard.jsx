import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import {
  CommentCardContainer,
  LikesDislikesContainer,
} from "./CommentCardStyle";
import axios from "axios";
import { useContext, useState } from "react";
import BASE_URL from "../../constants/BASE_URL";
import GlobalContext from "../../context/GlobalContext";

export function CommentCard({ comment }) {
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  const {users} = useContext(GlobalContext)
  const usersFilter = users.filter((user) => user.id === comment.creatorId)
  const likeComment = (e) => {
    e.preventDefault();
    axios
      .put(
        `${BASE_URL}/comments/${comment.id}/like`,
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
      .catch((err) => {
        console.log(err);
      });
  };
  const dislikeComment = (e) => {
    e.preventDefault();
    axios
      .put(
        `${BASE_URL}/comments/${comment.id}/like`,
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
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <CommentCardContainer>
        <p>Enviado por: {usersFilter[0].name}</p>
        <h5>{comment.content}</h5>
        <LikesDislikesContainer>
          <TbArrowBigUp onClick={likeComment} />
          <span>{likes}</span>
          <TbArrowBigDown onClick={dislikeComment} />
        </LikesDislikesContainer>
      </CommentCardContainer>
    </>
  );
}
