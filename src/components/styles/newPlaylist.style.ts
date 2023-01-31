import styled from "styled-components";

export const NewPlaylistModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  .close {
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: #0005;
  }
  form {
    top: 0;
    position: relative;
    z-index: 2;
    width: 30em;
    height: 85vh;
    background-color: #0d051b;
    padding: 2em;
    margin-top: 4em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    img {
      width: 3em;
    }

    .name_input {
      padding-bottom: 1em;
      label {
        display: block;
        font-size: 1.1em;
      }

      input {
        margin-top: 0.4em;
        padding: 0.8em;
        border: none;
        width: 100%;
        border-radius: 5px;
      }
    }
  }
  .songs {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    li {
      width: 100%;
      display: flex;
      gap: 1em;
      padding: 0.5em;
      cursor: pointer;
      border-radius: 6px;
      img {
        border-radius: 5px;
      }
      h3 {
        font-size: 1em;
        font-weight: 500;
      }
      span {
        color: #c2c2c2;
        font-size: 0.9em;
        font-weight: 400;
      }
      &:hover {
        background-color: #0005;
      }
    }
  }

  .selected {
    background-color: #000;
  }

  #create_button {
    align-self: center;
    width: 13em;
    height: 3em;
    font-size: 1.05em;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    position: absolute;
    bottom: 2em;
    color: #fff;
    background-color: blueviolet;
    cursor: pointer;
  }
`;
