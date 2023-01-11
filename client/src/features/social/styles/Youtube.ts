import styled from 'styled-components';

export const YoutubeContent = styled.div.attrs({
  className: 'container text-center align-items-center justify-content-center',
})``;

export const YoutubeTitle = styled.h5`
  margin-bottom: 1rem;
`;

export const YoutubeIframe = styled.iframe.attrs({
  title: 'youtube',
  allowFullScreen: true,
  frameBorder: '0',
})`
  width: 90%;
  height: 300px;
  @media (max-width: 672px) {
    width: 60%;
    height: 250px;
  }
`;

export const YoutubeLine = styled.hr``;
