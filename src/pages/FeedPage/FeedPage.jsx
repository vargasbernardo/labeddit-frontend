import { useContext } from "react";
import Header from "../../components/Header/Header";
import { BreakLine } from "../HomePage/HomePageStyles";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";
import { FeedContainer, PostContainer, TextArea } from "./FeedPageStyle";
import Button2 from "../../components/Button2/Button2";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import GlobalContext from "../../context/GlobalContext";
import BASE_URL from "../../constants/BASE_URL";

export default function FeedPage() {
  const {  posts, setPosts, error } = useContext(GlobalContext);
  const { form, onChange, resetForm } = useForm({ content: "" });
  const token = localStorage.getItem("token");
  const postsToBeReversed = [...posts];

  const postSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}/posts`,
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
      .then((res) => setPosts([...posts, res.data]))
      .catch((err) => console.log(err));
    resetForm();
  };
  if(error) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      <Header currentPage="feed" />
      <FeedContainer>
        <PostContainer>
          <TextArea
            type="text"
            name="content"
            value={form.content}
            onChange={onChange}
            placeholder="Escreva seu post aqui..."
          ></TextArea>
          <Button2 onClick={postSubmit}>Postar</Button2>
          <BreakLine />
        </PostContainer>
        {postsToBeReversed.reverse().map((post, index) => {
          return (
            <Link to={`/post/${post.id}`} key={index}>
              <PostCard post={post} />
            </Link>
          );
        })}
      </FeedContainer>
    </>
  );
}
