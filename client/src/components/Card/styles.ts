import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div).attrs({
  className: 'col-auto p-4',
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.9 } },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1.3 },
})`
  max-width: 200px;
  width: 100%;
`;

export const CardInfo = styled(motion.div).attrs({
  whileHover: { scale: 1.1 },
  whileTap: {
    scale: 1.3,
    borderRadius: '6px',
  },
})`
  cursor: pointer;
  background-clip: border-box;
  box-shadow: 0 2px 20px 0 rgba(127, 170, 240, 0.37);
  border-radius: 20px;
  overflow: hidden;
  justify-content: center;
  margin-bottom: 10px !important;
`;

export const CardImage = styled.img.attrs({
  className: 'img-fluid rounded',
})`
  overflow: hidden;
  width: 100%
  width: 200px;
`;

export const CardName = styled.div.attrs({
  className: 'text-center fw-bold mb-2',
})`
  font-weight: bold;
  font-size: 1rem;
  overflow-wrap: break-word;
  line-break: anywhere;
  word-wrap: break-word;
  hyphens: auto;
`;

export const CardLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 150px;
  position: absolute;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CardDate = styled.span.attrs({
  className: 'text-muted',
})``;
