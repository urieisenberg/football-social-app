import styled from 'styled-components';

export const Name = styled.div`
  text-align: left;
  margin-left: 70px;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  font-weight: 400;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
