import styled from "styled-components";

export const AlbumlistContainer = styled.div`
  padding-top: 1em;
  width: 50%;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    A{
      color: blueviolet;
    }
  }

  ul {
    padding-top: 1em;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    li {
      position: relative;
      width: 48%;
      height: 11em;
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
      .infos {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #0009;
        backdrop-filter: blur(3px);
        border-radius: 5px 5px 0 0;
        padding: 0.5em;
        font-size: 1.2em;
        font-weight: 400;
      }
    }
  }
`;
