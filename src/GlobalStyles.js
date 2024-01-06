import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --gradient--color--1: #ff6489;
        --gradient--color--2: #f9b24e;
        --button2--border--color: #FE7E02;

    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;

    }
`;
