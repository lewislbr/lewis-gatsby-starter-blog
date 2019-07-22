import styled from 'styled-components';

export default styled.p`
  display: block;
  line-height: 1.5;
  margin: 0 5% 5vh 5%;
  letter-spacing: -0.003em;

  color: var(--dark-color-light);

  @media (max-width: 849px) {
    margin: 0 0 5vh 0;
  }
`;
