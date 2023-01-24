import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 85%;
  ul {
    padding-top: 1em;
    display: flex;
    gap: 2em;
    overflow-x: hidden;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.6em;
      gap: 0.6em;
      border-radius: 15px;
      height: 10.5em;
      cursor: pointer;
      img {
        width: 6.5em;
        height: 6.5em;
        object-fit: cover;
        border-radius: 15px;
      }
      span {
        font-size: 1.1em;
        font-weight: 400;
        margin-left: 0.4em;
      }
    }
    #selected {
      background-color: #dd3203;
    }
  }
`;
