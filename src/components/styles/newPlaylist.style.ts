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
    img {
      width: 3em;
    }

    .name_input {
        padding-bottom: 1em;
      label {
        display: block;
        font-size: 1.1em;
    }

      input{
        margin-top: 0.4em;
        padding: 0.8em;
        border: none;
        width: 100%;
        border-radius: 5px;
      }
    }
  }
`;
