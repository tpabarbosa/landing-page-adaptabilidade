/* eslint-disable react/prop-types */
import React, { HTMLAttributes } from 'react';
import { Container, Content, Video, Image } from './styles';

interface ContentBoxProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  type?: string;
  videoSource?: string;
  videoTitle?: string;
  imageSource?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  title,
  type = 'left-content',
  videoSource,
  videoTitle,
  imageSource,
}) => {

  return (
    <Container>
      {type === 'left-content' && (
        <Content type={type}>
          <h2>{title}</h2>
          {children}
        </Content>
      )}
      {imageSource && <Image type={type} source={imageSource} />}
      {videoSource && (
        <Video type={type}>
          <iframe
            title={videoTitle}
            src={videoSource}
            frameBorder="4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Video>
      )}
      {type === 'right-content' && (
        <Content type={type}>
          <h2>{title}</h2>
          {children}
        </Content>
      )}
    </Container>
  );
};

export default ContentBox;
