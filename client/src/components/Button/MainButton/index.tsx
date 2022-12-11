import { TextButton, TextButtonProps } from "../Text";

interface MainButtonProps extends TextButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const MainButton = ({
  text,
  icon,
  onClick,
  ...props
}: MainButtonProps) => {
  return (
    <TextButton onClick={onClick} {...props}>
      {text} {icon}
    </TextButton>
  );
};
