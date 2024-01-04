import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;

`
export const HomeLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 152px;
        height: 142px;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20%;

`
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

`
export const Input = styled.input`
    width: 363px;
    height: 60px;
    margin-top: 10px;
    padding-left: 10px;
    border-radius: 8px;
    border: 1px solid gray;
`

export const BreakLine = styled.div`
    width: 100%;
    padding: 1px;
    border: 1px solid transparent;
    background: linear-gradient(to right, var(--gradient--color--1), var(--gradient--color--2));
`
export const Button1 = styled.button`
    width: 365px;
    height: 51px;
    border-radius: 27px;
    background: linear-gradient(to right, var(--gradient--color--1), var(--gradient--color--2));
    border: none;
    color: #ffffff;
    font-weight: bold;

`
export const Button2 = styled.button`
    width: 365px;
    height: 51px;
    border-radius: 27px;
    border: 1px solid var(--button2--border--color);
    background: #ffffff;
    color: var(--button2--border--color);
    font-weight: bold;

`