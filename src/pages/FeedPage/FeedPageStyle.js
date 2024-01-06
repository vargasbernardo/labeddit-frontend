import styled from "styled-components";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background: lightgray;
  padding: 5px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  justify-content: space-around;
  height: 25vh;
`;
