import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'container',
})`
  text-align: center;
  flex-direction: column;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 16px;
  }

  > h1 {
    margin-bottom: 2rem;
  }

  > div {
    padding: 20px;
  }
`;


