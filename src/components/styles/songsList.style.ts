import styled from "styled-components";

export const Songs = styled.ul`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;

  li {
    display: flex;
    gap: 1em;
    img {
      width: 3em;
      height: 3em;
      object-fit: cover;
        border-radius: 6px;
    }
  }
`;
