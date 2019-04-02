import styled from 'styled-components';

export default styled.div`
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  margin: 0 3vw 5vh 3vw;

  width: 20vw;
  font-size: 26px;
  line-height: 3;
  font-weight: bold;
  border-radius: 100px;
  border: 3px solid var(--primary-color);
  color: var(--primary-color);
  -webkit-transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition: -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  -moz-transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  -ms-transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    -webkit-box-shadow: 0px 9px 0 0 hsla(0, 0%, 94%, 1);
    box-shadow: 0px 9px 0 0 hsla(0, 0%, 94%, 1);
  }

  :active {
    -webkit-box-shadow: 0px 9px 0 0 hsla(0, 0%, 94%, 1);
    box-shadow: 0px 9px 0 0 hsla(0, 0%, 94%, 1);
  }

  @media (max-width: 849px) {
    width: 85%;
    line-height: 2.7;
    font-size: 20px;
  }
`;
