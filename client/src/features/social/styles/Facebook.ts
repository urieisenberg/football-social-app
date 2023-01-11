import styled from 'styled-components';

export const FacebookIframe = styled.iframe.attrs({
  title: 'facebook',
  scrolling: 'no',
  width: '500',
  height: '500',
  frameborder: '0',
  allowFullScreen: true,
})`
  border: none;
  @media (max-width: 576px) {
    width: 80%;
    overflow: scroll;
  }
`;
