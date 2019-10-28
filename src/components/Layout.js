import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Footer, GlobalStyles } from '../components';
import { BREAKPOINT } from '../utils/constants';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 var(--sides-padding-desktop);

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

const Content = styled.main`
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
  }
`;

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
