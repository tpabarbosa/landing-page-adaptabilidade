import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    font-size: ${px2vw(36)};

    @media (min-width: 768px) {
      font-size: ${px2vw(24)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
  }

  body {
    background: #446A5F;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font-family: 'Barlow', serif;
    font-weight: 400; //regular
  }

  strong, button {
    font-family: 'Barlow', serif;
    font-weight: 700; //bold
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Racing Sans One', cursive;
    letter-spacing: 0.05em;
  }

  button {
    cursor: pointer;
  }
`;
