import styled from 'styled-components';

export const Container = styled.div.attrs({})`
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-height: 600px) {
    font-size: 0.8rem;
  }

  > h1 {
    margin-bottom: 2rem;
  }

  > div {
    padding: 20px;
  }
`;
