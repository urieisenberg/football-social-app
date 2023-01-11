import { BsX, BsCheck } from 'react-icons/bs';
import {
  FormEditableAction,
  FormEditableContainer,
  FormEditableKey,
} from '../styles';

interface EditableProps {
  editable: boolean;
  setEditable: (value: boolean) => void;
  children: React.ReactNode;
  text: string;
  action: () => void;
}

export const Editable = ({
  editable,
  setEditable,
  children,
  text,
  action,
}: EditableProps) => {
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setEditable(false);
    }
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <FormEditableContainer>
      {editable ? (
        <FormEditableKey onKeyDown={handleKey}>
          {children}
          <FormEditableAction>
            <BsCheck onClick={action} size={16} />
          </FormEditableAction>
          <FormEditableAction>
            <BsX onClick={() => setEditable(false)} size={16} />
          </FormEditableAction>
        </FormEditableKey>
      ) : (
        <FormEditableAction onClick={() => setEditable(true)}>
          {text}
        </FormEditableAction>
      )}
    </FormEditableContainer>
  );
};
