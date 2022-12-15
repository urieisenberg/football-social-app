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
        {(props.data.logo || props.data.image) && (
          <img
            src={props.data.image || props.data.logo}
            alt={props.data.label || (props.data.name as string)}
            width={30}
          />
        )}
        <span>{props.data.label || props.data.name}</span>
      </Container>
    </components.Option>
  );
};
