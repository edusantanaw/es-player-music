import styled from "styled-components";

export const PlayListContainer = styled.section`
  padding: 2em 3em;
  width: 100%;

  .content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    ul {
      padding-top: 0;
    }
  }
  .left {
    width: 46%;
  }
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    width: 100%;
  }
  button {
    width: 11em;
    height: 3em;
    border: none;
    border-radius: 4px;
    background-color: red;
    color: #fff;
    font-weight: 500;
    font-size: 1.01em;
    cursor: pointer;
  }
  .songs {
    width: 100%;
  }

  .playlists {
    padding-top: 1em;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0.7em;
      width: 11em;
      gap: 0.6em;
      height: 14em;
      cursor: pointer;
      border-radius: 20px;
      background-color: #120d31;
    }
    .liked {
      svg {
        color: red;
        font-size: 3em;
      }
    }
  }
  .playlist_item {
    img {
      width: 7.5em;
      height: 7.5em;
      border-radius: 10px;
    }
  }
`;
