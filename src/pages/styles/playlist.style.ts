import styled from "styled-components";

export const PlayListContainer = styled.section`
  padding: 1em 3em;
  width: 100%;
  .head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 11em;
      height: 3em;
      border: none;
      border-radius: 4px;
      background-color: red;
      color: #fff;
      font-weight: 500;
      font-size: 1.01em;
    }
  }
  .playlists {
    padding-top: 1em;
    display: flex;
    gap: 0.8em;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0.5em;
      width: 7em;
      height: 8em;
      border-radius: 10px;
      background-color: #120d31;
    }
    .liked {
      svg {
        color: red;
        font-size: 3em;
      }
    }
  }
`;
