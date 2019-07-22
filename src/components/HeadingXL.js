import styled from 'styled-components';

export default styled.h1`
  display: block;
  margin: 0 auto 10vh auto;
  font-size: 80px;
  line-height: 1.2;
  text-align: center;
  font-weight: 700;
  letter-spacing: -4px;
  background: -webkit-linear-gradient(
    240deg,
    hsl(189, 100%, 50%),
    hsl(174, 79%, 49%),
    hsl(188, 81%, 59%),
    hsl(213, 62%, 61%),
    hsl(240, 100%, 70%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 849px) {
    font-size: 45px;
  }
`;
