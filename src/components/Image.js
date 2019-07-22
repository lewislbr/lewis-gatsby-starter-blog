import styled from 'styled-components';
import Img from 'gatsby-image';

export default styled(Img)`
  margin: 0 5% 5vh 5%;

  @media (max-width: 849px) {
    margin: 0 0 5vh 0;
  }
`;
