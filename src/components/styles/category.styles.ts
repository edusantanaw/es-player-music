import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 100%;
  h2 {
    font-size: 2em;
    font-weight: 500;
  }
  ul {
    padding-top: 1em;
    display: flex;
    gap: 1em;
    overflow-x: hidden;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.8em;
      gap: 0.6em;
      border-radius: 20px;
      height: 11.7em;
      cursor: pointer;
      img {
        width: 7.5em;
        height: 7.5em;
        object-fit: cover;
        border-radius: 20px;
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
