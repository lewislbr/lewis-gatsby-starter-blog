import styled from 'styled-components';

export default styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10vh auto 5vh auto;
  padding: 20px 50px;
  width: 300px;
  font-size: 26px;
  font-weight: bold;
  border-radius: 100px;
  border: 3px solid var(--accent-color);
  color: var(--accent-color);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    box-shadow: 0px 9px 0 0 var(--accent-color);
  }

  :active {
    box-shadow: 0px 9px 0 0 var(--accent-color);
  }

  @media (max-width: 849px) {
    font-size: 20px;
  }
`;
