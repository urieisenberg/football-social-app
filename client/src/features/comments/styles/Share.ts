import styled from 'styled-components';

interface ShareCommentsProps {
  place: 'true' | 'false';
}

export const Share = styled.div<ShareCommentsProps>`
  position: ${({ place }) => (place === 'true' ? 'absolute' : 'relative')};
  bottom: ${({ place }) => (place === 'true' ? '-40' : '')};
  align-items: left;
  outline: none;
  display: flex;
  flex-direction: row;
`;
