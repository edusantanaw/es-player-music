import styled from "styled-components";

export const Songs = styled.ul`
  padding-top: 1em;
  padding-bottom: 6em;
  width: 50%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
    display: none;
  }
 
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7em;
    cursor: pointer;
    background-color: #120d31;
    border-radius: 10px;
    margin-right: 1em;
    .infos {
      display: flex;
      gap: 2em;
    }
    img {
      width: 3.5em;
      height: 3.6em;
      object-fit: cover;
      border-radius: 10px;
    }

    p {
      letter-spacing: 1px;
      font-size: 1.1em;
    }
    span {
      font-size: 0.9em;
      color: #c2c2c2;
      letter-spacing: 1.2px;
    }
    &:hover {
      opacity: 0.9;
      background-color: #0003;
    }
  }
  #liked {
    color: red;
  }
  #current {
    background-color: red;
  }
`;
