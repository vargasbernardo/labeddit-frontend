import styled from "styled-components";

export const CommentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 15px;
  margin-top: 15px;
  min-width: 400px;
  padding: 10px;
  margin-bottom: 15px;
  h5 {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;
export const LikesDislikesContainer = styled.span`
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  padding: 5px;
  border-radius: 15px;
  justify-content: space-around;
  width: 35%;
`;

export const LikesDislikesCommentsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
