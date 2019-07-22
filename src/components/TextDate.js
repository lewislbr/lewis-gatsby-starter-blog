import styled from 'styled-components';

import TextBody from './TextBody';

export default styled(TextBody)`
  font-size: 16px;
  color: var(--dark-color-lighter);

  @media (max-width: 849px) {
    font-size: 15px;
  }
`;
