import styled from "styled-components";

export const SongContainer = styled.div`
  display: flex;
  padding: 1.5em 3em;
  width: 100%;
  align-items: center;
  height: 5em;
  position: fixed;
  bottom: 0px;
  z-index: 10;
  gap: 0.6em;
  border-radius: 15px 15px 0px 0px;
  background-color: #dd3203;
  color: #fff;
  img {
    width: 3.5em;
    height: 3.5em;
    object-fit: cover;
    border-radius: 10px;
  }

  .content {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 2em;
  }
`;
