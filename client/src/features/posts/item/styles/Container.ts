import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  background-clip: border-box;
  box-shadow: 0 2px 20px 0 rgba(127, 170, 240, 0.37);
  border-radius: 10px;
`;
