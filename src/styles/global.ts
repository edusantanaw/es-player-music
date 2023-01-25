import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    li{
        list-style: none;
    }

    body{
        background-color: #0d051b;
        color: #fff;
    }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.h2`
    font-size: 2em;
    font-weight: 500;
`
