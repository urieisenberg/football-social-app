import {
  useGetNotesQuery,
  useDeleteNoteMutation,
} from '../api';
import { Transition } from '../../../components/Transition';
import { NotesContainer, NotesContent } from '../styles';
import { DeleteNote } from '../../../app/types';
import { NotesItem } from '../Item';

interface NotesProps {
  ticketId: string;
}

export const Notes = ({ ticketId }: NotesProps) => {
  const { data } = useGetNotesQuery({
    ticketId: ticketId,
  });

  const [deleteNote] = useDeleteNoteMutation();

  const onDelete = async ({ noteId, ticketId }: DeleteNote) => {
    deleteNote({
      noteId: noteId,
      ticketId: ticketId,
    });
  };

  console.log(data)

  let content;
  if (data?.length)
    content = (
      <Transition key="notes">
        <NotesContainer>
          <NotesContent>
            {data?.map((note) => (
              <NotesItem
                key={note._id}
                note={note}
                onDelete={onDelete}
                ticketId={ticketId}
              />
            ))}
          </NotesContent>
        </NotesContainer>
      </Transition>
    );
  else content = null;

  return content;
};
