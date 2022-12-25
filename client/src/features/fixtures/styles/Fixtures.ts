import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FixturesWrapper = styled.div.attrs({
  className: 'container text-center justify-content-center align-items-center',
})`
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const FixturesContainer = styled(motion.div).attrs({
  className: 'row row-cols',
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
  viewPort: { once: true },
})`
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;
`;

export const FixturesTitle = styled.h5`
  letter-spacing: 1px;
`;

export const FixturesLeague = styled.span.attrs({
  className: 'text-muted',
})`
  font-size: 0.8rem;
`;

export const FixturesDate = styled.div.attrs({
  className: 'col',
})`
  font-size: 0.9rem;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const FixturesTeam = styled.div.attrs({
  className: 'col',
})`
  font-size: 1.2rem;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const FixturesLogo = styled.img`
  width: 100px;
  @media (max-width: 600px) {
    width: 50px;
  }
`;

export const FixturesLink = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

export const FixturesScore = styled.div.attrs({
  className: 'col',
})`
  align-self: center;
`;

export const FixturesGoals = styled.h1`
  font-weight: bolder;
  font-size: 3.2rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const FixturesContent = styled.div.attrs({
  className: 'row',
})``;

export const FixturesVenue = styled.div.attrs({
  className: 'col',
})`
  font-size: 0.9rem;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const FixturesH2H = styled.div.attrs({
  className: 'text-muted',
})`
  font-size: 0.8rem;
`;

export const FixturesBR = styled.br``;

export const FixturesHR = styled.hr``;
