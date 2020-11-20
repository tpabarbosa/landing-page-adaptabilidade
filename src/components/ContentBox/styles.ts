import styled from 'styled-components';

interface ContentBoxProps {
  type: string;
}

interface ImageProps {
  source: string;
  type: string;
}

interface VideoProps {
  type: string;
}

export const Container = styled.div`
  min-height: 21rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: 5rem 0rem;

  @media (min-width: 768px) {
    flex-direction: column;
    margin: 0 2.5rem;
    width: 34rem;
    align-items: stretch;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 0 1rem 2.5rem 2rem;
    width: 62rem;
  }

  & + div {
    margin-top: 5rem;
  }
`;

export const Content = styled.div<ContentBoxProps>`
  min-height: 21rem;
  background-color: #aca89b;
  border-radius: ${props =>
    props.type === 'left-content' ? '1.5rem 4rem 0 0' : '0 0 1.5rem 4rem'};

  h2 {
    padding: 1rem 3rem 0rem;
    font-size: 2rem;
    color: #ae4715;
    text-align: ${props => (props.type === 'left-content' ? 'left' : 'right')};
  }

  p {
    padding: 0rem 1.5rem;
    margin: 2rem 1rem;
    color: #363635;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  a {
    text-decoration: none;
    font-size: 1.3rem;
    font-style: italic;
    color: #ae4715;
    transition: background-color 0.2s;

    &:hover {
      background-color: #e5e5e5;
    }
  }

  @media (min-width: 1024px) {
    border-radius: ${props =>
      props.type === 'left-content' ? '1.5rem 0 0 4rem' : '0 4rem 1.5rem 0'};
    width: 56%;

    p {
      font-size: 1.2rem;
    }
  }
`;

export const Image = styled.div<ImageProps>`
  flex: 1;
  min-height: 21rem;
  background: url(${props => props.source}) no-repeat 75% 30%;
  background-size: cover;
  border-radius: ${props =>
    props.type === 'left-content' ? '0 0 1.5rem 4rem' : '1.5rem 4rem 0 0'};

  @media (min-width: 1024px) {
    border-radius: ${props =>
      props.type === 'left-content' ? '0 4rem 1.5rem 0' : '1.5rem 0 0 4rem'};
  }
`;

export const Video = styled.div<VideoProps>`
  min-height: 18rem;
  background-color: #363635;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props =>
    props.type === 'left-content' ? '0 0 1.5rem 4rem' : '1.5rem 4rem 0 0'};

  iframe {
    width: 100%;
    height: 21rem;
    border-radius: ${props =>
      props.type === 'left-content' ? '0 0 1.5rem 4rem' : '1.5rem 4rem 0 0'};
  }

  @media (min-width: 1024px) {
    border-radius: ${props =>
      props.type === 'left-content' ? '0 4rem 1.5rem 0' : '1.5rem 0 0 4rem'};

    iframe {
      width: 37.3rem;
      border-radius: ${props =>
        props.type === 'left-content' ? '0 4rem 1.5rem 0' : '1.5rem 0 0 4rem'};
    }
  }
`;
