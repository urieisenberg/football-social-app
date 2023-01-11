import { MotionTransition } from './style';

interface TransitionProps {
  children: React.ReactNode;
}

export const Transition = ({ children }: TransitionProps) => {
  return <MotionTransition>{children}</MotionTransition>;
};
