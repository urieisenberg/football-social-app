import {
  ItemContainer,
  ItemDate,
  ItemHeader,
  ItemDelete,
  ItemText,
} from '../styles';
import { Note } from '../../../app/types';
import { BiX } from 'react-icons/bi';

interface NotesItemProps {
  note: Note;
  ticketId: string;
  onDelete: (data: { ticketId: string; noteId: string }) => void;
}

export const NotesItem = ({ note, ticketId, onDelete }: NotesItemProps) => {
  return (
    <ItemContainer>
      <>
        <ItemHeader>
          Note from {note.user}
          <ItemDelete
            onClick={() =>
              onDelete({
                ticketId: ticketId,
                noteId: note._id,
              })
            }
          >
            <BiX />
          </ItemDelete>
        </ItemHeader>

        <ItemText>{note.text}</ItemText>
        <ItemDate>
          {new Date(note.createdAt as string).toLocaleString()}
        </ItemDate>
      </>
    </ItemContainer>
  );
};
