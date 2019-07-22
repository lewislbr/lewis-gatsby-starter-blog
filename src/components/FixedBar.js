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
  background-color: var(--light-color-translucent);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;
