import styled from "styled-components";

export const ControllsContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2em;
  audio {
    display: none;
  }

  .time {
    span {
      font-size: 1.1em;
    }
  }

  .buttons {
    display: flex;
    gap: 0.3em;
    align-items: center;
    svg {
        font-size: 2.5em;
        padding: 0.2em;
      border: 1px solid #fff;
      cursor: pointer;
      border-radius: 50%;
    }
  }
`;
