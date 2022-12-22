import styled from 'styled-components';
import { motion } from 'framer-motion';

export const VenuesContainer = styled.div.attrs({
  className: 'container text-center justify-content-center align-items-center',
})`
  overflow: hidden;
`;

export const VenuesListContainer = styled.div.attrs({
  className: 'row row-cols',
})``;

export const VenuesItemContainer = styled(motion.div).attrs(() => ({
  className: 'col-auto mt-5 mb-5 m-auto text-center',
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8 } },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
  whileTap: {
    scale: 1.3,
    borderRadius: '6px',
  },
}))`
  border-radius: 10px;
  width: 180px;
  height: 150px;
`;

export const VenuesImage = styled.img`
  width: 100%;
  opacity: 0.8;
  border-radius: 10px;
  cursor: pointer;
`;

export const VenueItemImage = styled.img`
  width: 400px;
  height: 260px;
  border-radius: 10px;
`;

export const VenuesTitle = styled.h5`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const VenuesName = styled.span`
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

export const VenuesSearchContainer = styled.div.attrs({
  className: 'mt-2',
})``;
