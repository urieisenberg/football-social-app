import styled from 'styled-components';

export const Like = styled.div`
  position: absolute;
  right: 40px;
  top: 90px;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LikeCount = styled.span`
  margin-right: 0.5rem;
  font-size: 0.7rem;
`;

export const LikeIcon = styled.span`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;
