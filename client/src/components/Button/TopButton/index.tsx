import { AiOutlineArrowUp } from 'react-icons/ai';

export const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <AiOutlineArrowUp
      onClick={scrollToTop}
      size={30}
      style={{ cursor: 'pointer' }}
    />
  );
};
