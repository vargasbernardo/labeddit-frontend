import useForm from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TextArea } from "../FeedPage/FeedPageStyle";
import { BreakLine } from "../HomePage/HomePageStyles";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";
import Header from "../../components/Header/Header";
import { useApi } from "../../hooks/useApi";
import { CommentCard } from "../../components/CommentCard/CommentCard";
import { Container, PostDetailContainer } from "./PostDetailsStyle";
import Button2 from "../../components/Button2/Button2";
import GlobalContext from "../../context/GlobalContext";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import BASE_URL from "../../constants/BASE_URL";

export default function PostDetails() {
  const { comments, setComments, posts } = useContext(GlobalContext);
  const { id } = useParams();
  const { form, onChange, resetForm } = useForm({ content: "" });
  const { post, loading, fetchData } = useApi({ id });
  const token = localStorage.getItem("token");
  const commentsById = comments.filter((comment) => comment.postId === id);
  const commentsToBeReversed = commentsById.reverse();

  useEffect(() => {
    fetchData();
  }, [id, token]);
  const postComment = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}/comments/${id}`,
        {
          content: `${form.content}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => setComments([...comments, res.data]))
      .catch((err) => console.log(err));
    resetForm();
  };
  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <Header currentPage="postDetail" />
      <PostDetailContainer>
        <Container>
          <div>
            <PostCard post={post} />
            <TextArea
              name="content"
              type="text"
              value={form.content}
              onChange={onChange}
              placeholder="Adicionar Comentario..."
            ></TextArea>
            <Button2 onClick={postComment}>Responder</Button2>
          </div>
          <div>
            <BreakLine />
          </div>
        </Container>
        {commentsToBeReversed.map((comment, index) => {
          return <CommentCard key={index} comment={comment} posts={posts} />;
        })}
      </PostDetailContainer>
    </>
  );
}
