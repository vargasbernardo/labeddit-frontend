import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import { TfiComment } from "react-icons/tfi";
import {
  CommentsContainer,
  LikesDislikesCommentsContainer,
  LikesDislikesContainer,
  PostCardContainer,
} from "./PostCardStyle";

export default function PostCard({ post }) {
  return (
    <PostCardContainer>
      <p>Enviado por: {post.userId}</p>
      <h5>{post.body}</h5>
      <LikesDislikesCommentsContainer>
        <LikesDislikesContainer>
          <TbArrowBigUp />
          <p>1.2k</p>
          <TbArrowBigDown />
        </LikesDislikesContainer>
        <CommentsContainer>
          <TfiComment />
          <p>132</p>
        </CommentsContainer>
      </LikesDislikesCommentsContainer>
    </PostCardContainer>
  );
}
