import styled from 'styled-components';

import BodyText from '../elements/BodyText';

export default styled(BodyText)`
  font-size: 16px;
  color: var(--primary-color-lighter);

  @media (max-width: 849px) {
    font-size: 15px;
  }
`;
