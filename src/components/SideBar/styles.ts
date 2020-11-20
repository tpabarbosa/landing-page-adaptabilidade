import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;
  padding: 1rem 2rem;
  width: 100%;
  background-color: #D1D0CC;
  //position: fixed;
  box-shadow: 0.3rem 0rem 0.5rem #1a1a19;

  @media (min-width: 768px) {
    margin: 0;
    width: 20rem;
    position: fixed;
    top: -6rem;
    right: 1.3rem;
    z-index: 1;
    padding: 16rem 0 0 0;
    height: 120vh;
  }

  div {
    margin: 1rem;

    h2 {
      font-size: 2rem;
      color: #ae4715;
    }

    p {
      margin: 1rem 0rem 0rem;
      line-height: 2rem;
      color: #363635;
      font-size: 1.4rem;
    }

    @media (min-width: 1024px) {
      p {
        font-size: 1.2rem;
      }
    }
  }

  form {
    input {
      width: 100%;
      background-color: #e5e5e5;
      border-radius: 0.5rem;
      border: 0;
      height: 2.5rem;
      line-height: 1.8rem;
      padding: 0.8rem;
      color: #363635;
      margin-top: 1rem;
      font-weight: 700;

      &::placeholder {
        color: #757572;
        font-weight: 400;
      }
    }

    button {
      margin: 1rem 0;
      width: 100%;
      height: 2.5rem;
      background: #ff7735;
      color: #363635;
      border-radius: 0.5rem;
      border: 0rem;
      transition: background color 0.2s;

      &:hover {
        background-color: #ae4715;
        color: #1a1a19;
      }
    }
  }
`;
