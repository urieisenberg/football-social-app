import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListContainer = styled.div.attrs(() => ({
  className: 'row row-cols justify-content-center',
}))``;

export const ListTitle = styled.h4.attrs(() => ({
  className: 'text-center',
}))`
  margin-top: 20px;
`;

export const ListItem = styled(motion.div).attrs(() => ({
  className: 'col mt-5 mb-5 text-center',
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.9 } },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1.3 },
}))`
  max-width: 300px;
  width: 100%;
`;

export const ListFixture = styled.div`
  curso: pointer;
`;

export const ListImg = styled.img.attrs(() => ({
  className: 'img-fluid',
}))`
  width: 40px;
`;

export const ListSubtitle = styled.div.attrs(() => ({
  className: 'text-center fw-bold mb-2',
}))`
  letter-spacing: 1px;
`;

export const ListDate = styled.div.attrs(() => ({
  className: 'text-center text-muted',
}))``;

export const ListDelete = styled.span`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.error};
    scale: 1.1;
  }
`;
