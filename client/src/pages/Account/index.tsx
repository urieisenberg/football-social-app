import { useAppSelector } from '../../app/hooks';
import { useNavigate, useRoutes, Outlet, Navigate } from 'react-router-dom';
import { useToggle, useAuthActions } from '../../app/hooks';
import { useDeleteUserMutation } from '../../features/users/api';
import { UserAccount } from '../../features/users/item/account';
import { Nav } from '../../components/Nav';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { toast } from 'react-toastify';

export const Account = () => {
  const { user } = useAppSelector((state) => state.auth);

  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const [showDeleteModal, toggleDeleteModal] = useToggle(true);

  const { logout } = useAuthActions();

  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteUser();
    toast.success('You deleted your account, you will be logged out now ', {
      toastId: 'deleteUser',
    });
    logout();
  };

  let elements = useRoutes([
    { path: '', element: <UserAccount /> },
    {
      path: 'tickets',
      element: <Navigate to={`/contact`} />,
    },
    {
      path: 'delete/account',
      element: (
        <Modal setShow={toggleDeleteModal} show={showDeleteModal}>
          <h2>Are you sure you want to delete your account?</h2>

          <Button onClick={handleDelete} text="delete" variant="error" />
          <Button
            onClick={() => navigate(`/account/${user?._id}/${user?.username}`)}
            text="cancel"
            variant="primary"
          />
        </Modal>
      ),
    },
  ]);

  return (
    <>
      <Nav links={['tickets', 'delete account']} />
      {elements}
      <Outlet />
    </>
  );
};
