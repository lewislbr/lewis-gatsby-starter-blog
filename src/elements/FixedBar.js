import styled from 'styled-components';

export default styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  left: auto;
  right: auto;
  z-index: 999;
  height: 8vh;
  width: 100%;
  padding: 0 var(--sides-padding-desktop);
  top: 0px;

  background-color: var(--background-color-translucent);
  -webkit-backdrop-filter: blur(2.5px);
  backdrop-filter: blur(2.5px);

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;
