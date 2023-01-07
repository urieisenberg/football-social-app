import { useAppSelector } from '../../../app/hooks';
import { User } from '../../../app/types';
import {
  ListWrapper,
  ListContainer,
  ListTitle,
  ListItem,
  ListSubtitle,
  ListDelete,
} from '../styles';

interface UsersListProps {
  users: User[];
  onDelete: (id: string) => void;
}

export const UsersList = ({ users, onDelete }: UsersListProps) => {
    const { user } = useAppSelector((state) => state.auth);

    let content;
                
  return <div>UsersList</div>;
};
