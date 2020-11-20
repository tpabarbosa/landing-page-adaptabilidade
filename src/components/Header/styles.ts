import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 2rem 0;
  background-color: #363635;
  color: #aeab9c;
  font-size: 1.2rem;
  padding: 1.5rem 3rem;
  box-shadow: 0rem 0.3rem 0.8rem #1a1a19;

  @media (min-width: 768px) {
    width: 99%vw;
  }

  h1 {
    font-size: 2.5rem;
    color: #ff7735;
  }

  div {
    margin: 0.5rem;
  }

  em {
    font-size: 2rem;
  }

  strong {
    font-size: 1.2rem;
  }
`;
