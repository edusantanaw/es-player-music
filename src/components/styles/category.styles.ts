import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 50%;
  ul {
    padding-top: 1em;
    display: flex;
    gap: 1.5em;
    overflow-x: hidden;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.4em;
      gap: 0.6em;
      border-radius: 20px;
      width: 30%;
      height: 14em;
      cursor: pointer;
      background-color: #120d31;
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
      background-color: red;
    }
  }
`;
