import styled from "styled-components";

export const SongContainer = styled.div`
  display: flex;
  padding: 0.5em 3em;
  width: 100%;
  align-items: center;
  position: fixed;
  bottom: 0px;
  z-index: 10;
  gap: 0.6em;
  border-radius: 30px 30px 0px 0px;
  background-color: #000;
  color: #fff;
  img {
    width: 3.5em;
    height: 3.5em;
    object-fit: cover;
    border-radius: 5px;
  }

  .content {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 2em;

    h2 {
      font-size: 1.1em;
      font-weight: 500;
    }
  }
`;
