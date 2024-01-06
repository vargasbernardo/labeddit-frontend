import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { BreakLine, Button1 } from "../HomePage/HomePageStyles";
import axios from "axios";
import PostCard from "../../components/Posts/PostCard";
import { FeedContainer, PostContainer, TextArea } from "./FeedPageStyle";

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header currentPage="feed" />
      <FeedContainer>
        <PostContainer>
          <TextArea placeholder="Escreva seu post aqui..."></TextArea>
          <Button1>Postar</Button1>
          <BreakLine />
        </PostContainer>
        {posts.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
      </FeedContainer>
    </>
  );
}
