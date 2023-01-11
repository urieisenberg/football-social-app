import styled from 'styled-components';

export const Image = styled.img.attrs({
  className: 'mr-0',
})`
  position: absolute;
  left: 0;
  width: 60px;
  height: 60px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
