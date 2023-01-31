import styled from "styled-components";

export const ControllsContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

export const BarTime = styled.div<{ current: string }>`
  width: 50%;
  background-color: #a0a0a0;
  height: 0.13em;
  border-radius: 5px;
  div {
    width: ${(props) => props.current};
    height: 100%;
    background-color: red;
    transition: 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
