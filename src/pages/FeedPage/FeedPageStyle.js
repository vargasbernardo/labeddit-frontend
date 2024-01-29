import styled from "styled-components";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 131px;
  border-radius: 10px;
  background: #EDEDED;
  padding: 5px;
  margin-bottom: 20px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  justify-content: space-around;
  height: 35vh;
  width: 90%;
`;
