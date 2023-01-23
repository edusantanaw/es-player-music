import styled from "styled-components";

export const CategoryContainer = styled.div`
    width: 100%;
    ul{
        padding-top: 2em;
        display: flex;
        gap: 2em;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.6em;
            gap: 0.6em;
            border-radius: 10px;
            height: 11.7em;
            img{
                width: 7.8em;
                height: 7.8em;
                object-fit: cover;
                border-radius: 15px;
            }
            span{
                font-size: 1.1em;
                font-weight: 400;
                margin-left: 0.4em;
            }
        }
        #selected {
            background-color: #DD3203;
        }
    }
`