import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto 5vh auto;

  width: 20vw;
  font-size: 26px;
  line-height: 3;
  font-weight: bold;
  border-radius: 100px;
  border: 3px solid var(--primary-color);
  color: var(--primary-color);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    box-shadow: 0px 9px 0 0 var(--primary-color);
  }

  :active {
    box-shadow: 0px 9px 0 0 var(--primary-color);
  }

  @media (max-width: 849px) {
    width: 60vw;
    line-height: 2.7;
    font-size: 20px;
  }
`;
