import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #d6dfe5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 50px;
  width: 100%;
  a {
    grid-column: 3;
    justify-self: end;
    margin-right: 20px;
    text-decoration: none;
    color: blue;
    font-weight: bold;
  }
  img {
    grid-column: 2;
    justify-self: center;
  }
  svg {
    grid-column: 1;
    justify-self: start;
  }
`;
