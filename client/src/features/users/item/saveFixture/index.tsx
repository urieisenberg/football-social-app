import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import {
  useSaveFavFixturesMutation,
  useDeleteFavFixturesMutation,
  useGetFavFixturesQuery,
} from '../../api';
import { toast } from 'react-toastify';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Item } from '../../styles';
import { FavFixtures } from '../../types';

interface SaveFavFixtureProps {
  fixture: FavFixtures;
}

export const SaveFavFixture = ({ fixture }: SaveFavFixtureProps) => {
  const { user } = useAppSelector((state) => state.auth);

  const [checkDuplicate, setCheckDuplicate] = useState(false);

  const { data: favFixtures } = useGetFavFixturesQuery(user?._id as string);

  const [saveFavFixtures, { isLoading }] = useSaveFavFixturesMutation();

  const [deleteFavFixtures, { isLoading: isDeleting }] =
    useDeleteFavFixturesMutation();

  useEffect(() => {
    const fixtureAlreadyIn = favFixtures?.some(
      (favFixture) => favFixture?.id === fixture?.id
    );
    setCheckDuplicate(fixtureAlreadyIn ? true : false);
  }, [favFixtures, fixture]);

  const onClick = () => {
    if (!checkDuplicate) {
      saveFavFixtures({ fixture, id: user?._id as string });
      toast.success('Fixture is now saved to your favourites');
    } else {
      deleteFavFixtures({ fixture, id: user?._id as string });
      toast.success('Fixture is now removed from your favourites');
    }
  };

  let content;
  if (!checkDuplicate) {
    content = (
      <Item
        onClick={onClick}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="save fixture"
      >
        <AiOutlineStar size={16} />
      </Item>
    );
  } else {
    content = (
      <Item
        onClick={onClick}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="unsave fixture"
      >
        <AiFillStar size={16} />
      </Item>
    );
  }

  return <> {content} </>;
};
