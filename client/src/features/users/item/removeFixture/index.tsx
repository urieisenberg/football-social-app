import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { useDeleteFavFixturesMutation } from '../../api';
import { toast } from 'react-toastify';
import { BsX } from 'react-icons/bs';
import { Item } from '../../styles';
import { FavFixtures } from '../../types';

interface RemoveFavFixtureProps {
  fixture: FavFixtures;
}

export const RemoveFavFixture = ({ fixture }: RemoveFavFixtureProps) => {
  const { user } = useAppSelector((state) => state.auth);

  const [deleteFavFixtures, { isLoading: isDeleting }] =
    useDeleteFavFixturesMutation();

  const onClick = () => {
    deleteFavFixtures({ fixture, id: user?._id as string });
    toast.success('Fixture is now removed from your favourites');
  };

  return (
    <Item
      onClick={onClick}
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title="remove fixture"
    >
      <BsX size={16} />
    </Item>
  );
};
