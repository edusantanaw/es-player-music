import styled from "styled-components";

export const Songs = styled.ul`
  padding-top: 1em;
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  h2 {
    font-size: 2em;
    font-weight: 500;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7em;
    cursor: pointer;
    border-radius: 10px;
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
    background-color: #dd3203;
  }
`;
