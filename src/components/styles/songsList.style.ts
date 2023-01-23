import styled from "styled-components";

export const Songs = styled.ul`
  padding-top: 1em;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  li {
    display: flex;
    gap: 1em;
    padding: 0.5em;
    cursor: pointer;
    img {
      width: 3em;
      height: 3em;
      object-fit: cover;
      border-radius: 6px;
    }

    span {
      font-size: 0.9em;
      color: #c2c2c2;
    }
    &:hover{
        opacity: 0.9;
        background-color: #0003;
    }
  }
`;
