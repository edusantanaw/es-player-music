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
    }

    li{
        list-style: none;
    }

`;

export const Container = styled.div`
    width: 100%;
    display: flex;
`
