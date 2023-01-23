import styled from "styled-components";

export const SongContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  img {
    width: 12em;
    height: 13em;
    object-fit: cover;
  }
  .audio {
    width: 50%;
    audio {
      display: none;
    }
  }
`;
