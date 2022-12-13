import styled from 'styled-components';
import { components } from 'react-select';

 const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  @media (max-width: 576px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
  }
  > span {
    margin-left: 5px;
  }
`;

export const Options = (props: any) => {
  return (
    <components.Option {...props}>
      <Container>
        <img
          src={props.data.image}
          alt={props.data.label as string}
          width={30}
        />
        <span>{props.data.label}</span>
      </Container>
    </components.Option>
  );
};
