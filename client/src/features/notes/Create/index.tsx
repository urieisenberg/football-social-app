import { useEffect } from 'react';
import { useCreateNoteMutation } from '../../../app/services/server-api/notes';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { noteSchema } from '../utils/noteSchema';
import { CreateNote as AddNote } from '../../../app/types';
import { Form } from '../../../components/Form';
import { toast } from 'react-toastify';

interface CreateNoteProps {
  setShow: () => void;
  ticketId: string;
}

export const CreateNote = ({ setShow, ticketId }: CreateNoteProps) => {
  const [createNote, { data, isSuccess, error }] = useCreateNoteMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Note created`, {
        toastId: 'createNoteSuccess',
      });
    } else if (error) {
      const fetchError = error as FetchBaseQueryError;
      toast.error(fetchError?.data as string, {
        toastId: 'createNoteError',
      });
    }
  }, [error, isSuccess, data]);

  const onSubmit = async (data: AddNote) => {
    await createNote({
      ticketId: ticketId,
      text: data.text,
    });
    setShow();
  };

  return (
    <Form
      title="Create Note"
      text="write a note"
      onSubmit={onSubmit}
      schema={noteSchema}
    />
  );
};
