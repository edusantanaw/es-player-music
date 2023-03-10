import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 13%;
  height: 100vh;
  background-color: #120d31;
  padding: 2em;
  color: #fff;

  span {
    font-size: 0.9em;
    color: #c2c2c2;
  }

  ul{
    padding-top: 0.7em;
    display: flex;
    flex-direction: column;
    gap: 0.8em;
  }
  li {
    a {
      display: flex;
      align-items: center;
      gap: 0.9em;
    }
    svg{
      font-size: 1.2em;
    }
    span {
      font-size: 1.2em;
      color: #fff;
    }
  }
`;
