import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavIcon = styled.label`
  height: 58%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  width: 33px;
  padding: 10px;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  cursor: pointer;
  -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 849px) {
    width: 25px;
  }
`;

const NavIconLine = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--primary-color);
  border-radius: 20px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
`;

const NavIconLine1 = styled(NavIconLine)`
  top: 10px;
`;

const NavIconLine2 = styled(NavIconLine)`
  top: 18px;
  width: 70%;
`;

const NavIconLine3 = styled(NavIconLine)`
  top: 18px;
  width: 70%;
`;

const NavIconLine4 = styled(NavIconLine)`
  top: 26px;
`;

const Input = styled.input`
  display: none;

  :checked + ${NavIcon} {
    ${NavIconLine1} {
      top: 10px;
      width: 0%;
      left: 50%;
    }
    ${NavIconLine2} {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 100%;
    }
    ${NavIconLine3} {
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      width: 100%;
    }
    ${NavIconLine4} {
      top: 26px;
      width: 0%;
      left: 50%;
    }
  }
`;

const NavModal = styled.nav`
  display: none;

  ${Input}:checked ~ & {
    display: block;
    position: absolute;
    height: 100vh;
    width: 100vw;
    padding-top: 8vh;
    top: 100%;
    left: 0;
    right: 0;

    background-color: var(--background-color-translucent);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
`;

const NavLink = styled.div`
  display: block;
  padding-left: 21vw;
  font-size: 55px;
  font-weight: bold;
  width: 100%;
  height: 11vh;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 849px) {
    font-size: 40px;
    padding-left: 11vw;
  }
`;

const NavLinkActive = {
  textDecoration: 'underline',
};

function Nav() {
  return (
    <>
      <Input type="checkbox" id="menu" />
      <NavIcon for="menu">
        <NavIconLine1 />
        <NavIconLine2 />
        <NavIconLine3 />
        <NavIconLine4 />
      </NavIcon>
      <NavModal id="nav">
        <Link to="/" activeStyle={NavLinkActive}>
          <NavLink>Home</NavLink>
        </Link>
        <Link to="/info" activeStyle={NavLinkActive}>
          <NavLink>Info</NavLink>
        </Link>
        <Link to="/blog" activeStyle={NavLinkActive}>
          <NavLink>Blog</NavLink>
        </Link>
      </NavModal>
    </>
  );
}

export default Nav;
