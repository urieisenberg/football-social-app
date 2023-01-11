import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TransfersWrapper = styled.div.attrs({
  className: 'container align-items-center justify-content-center', 
})``;

export const TransfersContainer = styled(motion.div).attrs({
  className:
    'row row-cols-auto mb-4 mt-4 m-auto align-items-center justify-content-center',
})``;

export const TransfersIn = styled(motion.div).attrs({
  className: 'col-auto mt-5 mb-5 text-center',
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8 } },
  viewport: { once: true },
  whileHover: { scale: 0.9 },
})`
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  align-items: center;
  margin: 60px;
  width: 200px;
`;

export const TransfersOut = styled(motion.div).attrs({
  className: 'col-auto mt-5 mb-5 text-center',
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8 } },
  viewport: { once: true },
  whileHover: { scale: 0.9 },
})`
  background-color: ${(props) => props.theme.error};
  border-radius: 10px;
  align-items: center;
  margin: 60px;
  width: 200px;
`;
export const TransfersLogo = styled(motion.img).attrs({
  width: 50,
})`
  cursor: pointer;
  margin: 10px;
`;

export const TransfersName = styled.div`
  font-weight: 450;
  cursor: pointer;
`;

export const TransfersDate = styled.span``;

export const TransfersPrice = styled.span`
  font-weight: 450;
  font-size: 1rem;
  margin: 10px;
`;

export const TransfersType = styled.span.attrs({
  className: 'col mb-1 mt-1',
})``;

export const BR = styled.br``;
