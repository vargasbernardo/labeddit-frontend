import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #D6DFE5;
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
    }
    img {
        grid-column: 2;
        justify-self: center;
    }

`