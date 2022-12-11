import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'container',
})`
  margin: auto;
  text-align: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  > h1 {
    margin-bottom: 2rem;
  }

  > div {
    padding: 20px;
  }
`;
