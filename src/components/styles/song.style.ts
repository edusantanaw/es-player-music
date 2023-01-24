import styled from "styled-components";

export const SongContainer = styled.div`
  display: flex;
  padding: 1.5em 3em;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;
  border-radius: 10px;
  background-color: #0005;
  img {
    width: 13em;
    height: 13em;
    object-fit: cover;
    border-radius: 10px;
  }
  .audio {
    width: 50%;
    audio {
      display: none;
    }
  }

  .content {
    width: 100%;
  }
`;
