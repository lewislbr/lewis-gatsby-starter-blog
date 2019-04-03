import styled from 'styled-components';

export default styled.p`
  display: block;
  max-width: 45em;
  line-height: 1.5;
  margin: 0 0 5vh 5%;

  color: var(--primary-color-light);

  @media (max-width: 849px) {
    margin: 0 0 5vh 0;
  }
`;
